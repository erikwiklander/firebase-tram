export class Stop {
    constructor(public name: string, public id: number, public longitude: number, public latitude: number, public fullname: string) { }
}

export const stops: Stop[] = [{"name":"Solna station","id":740000759,"longitude":18.010041,"latitude":59.365104,"fullname":"Solna station"},
{"name":"Solna centrum","id":740064053,"longitude":17.996269,"latitude":59.361355,"fullname":"Solna centrum Spårv"},
{"name":"Solna business park","id":740064052,"longitude":17.978785,"latitude":59.359755,"fullname":"Solna business park Spårv"},
{"name":"Sundbybergs centrum","id":740064286,"longitude":17.970524,"latitude":59.360915,"fullname":"Sundbyberg centrum Spårv"},
{"name":"Bällsta bro","id":740064051,"longitude":17.9614,"latitude":59.360376,"fullname":"Bällsta bro Spårv (Sundbyberg kn)"},
{"name":"Karlsbodavägen","id":740064044,"longitude":17.961373,"latitude":59.356456,"fullname":"Karlsbodavägen Spårv (Stockholm kn)"},
{"name":"Norra Ulvsunda","id":740064041,"longitude":17.962299,"latitude":59.350721,"fullname":"Norra Ulvsunda Spårv (Stockholm kn)"},
{"name":"Johannesfred","id":740071178,"longitude":17.970066,"latitude":59.342433,"fullname":"Johannesfred Spårv (Stockholm kn)"},
{"name":"Alvik","id":740020755,"longitude":17.980269,"latitude":59.333633,"fullname":"Alvik T-bana (Stockholm kn)"},
{"name":"Alviks strand","id":740024925,"longitude":17.982102,"latitude":59.327691,"fullname":"Alvik Strand Spårv (Stockholm kn)"},
{"name":"Stora Essingen","id":740024924,"longitude":17.992979,"latitude":59.324778,"fullname":"Stockholm Stora Essingen"},
{"name":"Gröndal","id":740024923,"longitude":18.01121,"latitude":59.315924,"fullname":"Gröndal Spårv (Stockholm kn)"},
{"name":"Trekanten","id":740024922,"longitude":18.018104,"latitude":59.314171,"fullname":"Liljeholmen Trekanten Spårv (Stockholm kn)"},
{"name":"Liljeholmen","id":740004046,"longitude":18.023129,"latitude":59.31071,"fullname":"Liljeholmen T-bana (Stockholm kn)"},
{"name":"Årstadal","id":740024921,"longitude":18.025556,"latitude":59.306494,"fullname":"Årsta Årstadal Spårv (Stockholm kn)"},
{"name":"Årstaberg","id":740024920,"longitude":18.030231,"latitude":59.299231,"fullname":"Årstaberg station (Stockholm kn)"},
{"name":"Årstafältet","id":740024919,"longitude":18.039714,"latitude":59.296345,"fullname":"Årsta Årstafältet Spårv (Stockholm kn)"},
{"name":"Valla torg","id":740024684,"longitude":18.048425,"latitude":59.295015,"fullname":"Årsta Valla Torg Spårv (Stockholm kn)"},
{"name":"Linde","id":740024918,"longitude":18.063635,"latitude":59.293262,"fullname":"Årsta Linde Spårv (Stockholm kn)"},
{"name":"Globen","id":740021706,"longitude":18.077972,"latitude":59.294278,"fullname":"Globen T-bana (Stockholm kn)"},
{"name":"Gullmarsplan","id":740021705,"longitude":18.080768,"latitude":59.299114,"fullname":"Gullmarsplan T-bana (Stockholm kn)"},
{"name":"Mårtensdal","id":740024928,"longitude":18.088103,"latitude":59.302692,"fullname":"Stockholm Mårtensdal"},
{"name":"Luma","id":740024929,"longitude":18.094728,"latitude":59.30404,"fullname":"Stockholm Luma"},
{"name":"Sickla kaj","id":740024926,"longitude":18.103619,"latitude":59.302773,"fullname":"Stockholm Sickla Kaj"},
{"name":"Sickla udde","id":740024927,"longitude":18.108769,"latitude":59.306251,"fullname":"Stockholm Sickla Udde"},
{"name":"Sickla","id":740024807,"longitude":18.121327,"latitude":59.306818,"fullname":"Sickla station (Nacka kn)"}];

export const nameByFullname :{ [key:string]:string; }  = stops.reduce(function(map, stop) {
    map[stop.fullname] = stop.name;
    return map;
}, {});