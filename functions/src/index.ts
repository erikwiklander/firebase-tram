import { Departure } from './model/internal/departure.model';
import { DepartureRobotResponse } from './model/trafiklab/departure.model';
import { DeviationResponse } from './model/deviation.model';
import * as functions from 'firebase-functions';
import * as rm from 'typed-rest-client/RestClient';
import * as cors from 'cors';
import { Disruption } from './model/disruption.model';
import { stops, nameByFullname } from './model/stop.model';

const corsHandler = cors({ origin: true });

export const disruptions = functions
    .region('europe-west1')
    .https
    .onRequest((request, response) => {
        corsHandler(request, response, () => {
            new rm.RestClient('deviations', 'http://api.sl.se/api2/')
                .get<DeviationResponse>('deviations.json?key=' + functions.config().deviation.key + '&LineNumber=22')
                .then((dr) => {
                    response.header('Cache-Control', 'public, max-age=30, s-maxage=30')
                        .send(dr.result.ResponseData.map(dev => new Disruption(dev.Header, dev.Details)));
                })
                .catch((er) => {
                    response.status(500).send(er);
                });
        });
    });

export const closestId = functions
    .region('europe-west1')
    .https
    .onRequest((request, response) => {
        corsHandler(request, response, () => {
            const la: number = request.query.la;
            const lo: number = request.query.lo;
            const closestMap = new Map(stops.map(stop =>
                [(stop.longitude - lo) * (stop.longitude - lo) + (stop.latitude - la) * (stop.latitude - la), stop.id] as [number, number]));
            let myId: number;
            let smallest: number;
            closestMap.forEach((val, key) => {
                if (myId === undefined || smallest > key) {
                    smallest = key;
                    myId = val;
                }
            });
            response.header('Cache-Control', 'public, max-age=300, s-maxage=300').send('' + myId);
        });
    });

export const dep = functions
    .region('europe-west1')
    .https
    .onRequest((request, response) => {
        corsHandler(request, response, () => {
            const direction: string = request.query.direction;
            const id: number = +request.query.id;
            const index: number = stops.findIndex(stop => stop.id === id);
            const dirIndex: number = direction === 'sickla' ? index + 1 : index - 1;
            const current: string = stops[index].name;
            if (dirIndex < 0 || dirIndex >= stops.length) {
                response.send([]);
            } else {
                new rm.RestClient('departureBoard', 'https://api.resrobot.se/v2/')
                    .get<DepartureRobotResponse>(
                        'departureBoard?key=' + functions.config().robot.key + '&passlist=0&products=64&format=json&direction=' + stops[dirIndex].id + '&id=' + id)
                    .then((dpr) => {
                        response
                        .header('Cache-Control', 'public, max-age=30, s-maxage=30')
                        .send(dpr.result.Departure.map(
                            prod => new Departure(
                                prod.date + 'T' + prod.time,
                                prod.rtDate ? prod.rtDate + 'T' + prod.rtTime : null,
                                nameByFullname[prod.direction],
                                current
                            )
                        ));
                    })
                    .catch((er) => {
                        response.status(500).send(er);
                    });
            }
        });
    });
