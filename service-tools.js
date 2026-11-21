/* ===================== KAINOS IR KATEGORIJOS =====================
   p1 – pirmo tos kategorijos įrenginio integravimo kaina
   p2 – kiekvieno papildomo tos pačios kategorijos įrenginio kaina
   def – numatytasis suderinamumas: off (oficiali), hacs, loc (vietinis ryšys), chk (tikrinti)
   brands – gamintojai ir jų suderinamumo lygis šioje kategorijoje            */
const CATS=[{"id":"hp","name":"Šildymo katilas","ic":"thermo","p1":120,"p2":70,"kw":["silumos siurb","siluminis siurb","heat pump","oras-vanduo","oras vanduo","geoterm","zemes siurb","siurblys","katil","granul","dujinis","kieto kuro","boiler katil","sildymo katil","silumos siurbl"],"brands":{"Gree":"chk","Atlantic":"chk","Toshiba":"chk","Fujitsu":"chk","Haier":"chk","Galmet":"chk","Sprsun":"chk","Waterkotte":"chk","Danfoss":"chk","Hyundai":"chk","Rotenso":"chk","Viadrus":"chk","Kospel":"chk","Aira":"chk","Thermor":"chk","LG":"loc","Stiebel Eltron":"loc","Ochsner":"loc","iDM":"loc","Heliotherm":"loc","Lambda":"loc","Kronoterm":"loc","Hoval":"loc","Weishaupt":"loc","Panasonic":"hacs","Vaillant":"hacs","Samsung":"hacs","Bosch":"hacs","Buderus":"hacs","Thermia":"hacs","Midea":"hacs","Alpha Innotec":"hacs","Novelan":"hacs","Remeha":"hacs","De Dietrich":"hacs","Hitachi":"hacs","Kaisai":"hacs","Saunier Duval":"hacs","Protherm":"hacs","Junkers":"hacs","Daikin":"off","Nibe":"off","Viessmann":"off","Mitsubishi":"off","Ariston":"off","Wolf":"off","CTC":"off","Immergas":"chk","Kostrzewa":"chk","Defro":"chk","Kipi":"chk","Termet":"chk","Ferroli":"chk","Atmos":"chk","Enerkon":"chk","Thermostahl":"chk","Heiztechnik":"chk","Grandeg":"chk","Vaillant ecoTEC":"chk","Beretta":"chk","Hermann":"chk","Baxi":"hacs","Plum":"hacs","ecoMAX":"hacs","Hewalex":"chk","Remko":"chk","Kalvis":"chk","Liepsna":"chk","Carrier":"chk","Euroster":"chk","IVT":"hacs"},"note":"Šilumos siurbliai, dujiniai, granuliniai ir kieto kuro katilai. Dažniausiai valdoma per gamintojo modulį, Modbus arba OpenTherm.","def":"chk","sub":["Šilumos siurblys oras-vanduo","Geoterminis šilumos siurblys","Dujinis katilas","Granulinis katilas","Kieto kuro katilas","Elektrinis katilas"]},{"id":"ac","name":"Kondicionierius","ic":"snow","p1":60,"p2":35,"kw":["kondicion","oro kondic","split","oro-oras","oras-oras","klimato"],"brands":{"Carrier":"chk","Hyundai":"chk","Airwell":"chk","Ballu":"chk","Zanussi":"chk","Sharp":"chk","Daitsu":"chk","Fuji Electric":"chk","Olimpia Splendid":"chk","De'Longhi":"chk","Midea":"hacs","Panasonic":"hacs","Haier":"hacs","Hisense":"hacs","Electrolux":"hacs","AUX":"hacs","TCL":"hacs","Kaisai":"hacs","Hitachi":"hacs","Sinclair":"hacs","Bosch":"hacs","Comfee":"hacs","Toshiba Seiya":"hacs","Gree Versati":"hacs","Rotenso":"hacs","Vivax":"hacs","Daikin":"off","Samsung":"off","LG":"off","Mitsubishi":"off","Gree":"off","Toshiba":"off","Fujitsu":"off","Sensibo":"off","Tosot":"off","Cooper&Hunter":"off","Mitsubishi Heavy":"chk","Neoclima":"chk"},"note":"Su Wi-Fi moduliu dažniausiai veikia. Jei modulio nėra – IR valdymas arba papildomas adapteris.","def":"chk","sub":["Sieninis kondicionierius","Multi-split sistema","Kanalinis / kasetinis","Mobilus kondicionierius"]},{"id":"rec","name":"Rekuperatorius","ic":"wind","p1":110,"p2":65,"kw":["rekuper","vedinim","ventiliac","vedinimo"],"brands":{"Maico":"chk","Paul":"chk","Airobot":"chk","Recair":"chk","Mitsubishi Lossnay":"chk","Vortice":"chk","Ecovent":"chk","Komfovent":"loc","Salda":"loc","Amalva":"loc","Systemair":"loc","Brink":"loc","Ensy":"loc","Nilan":"loc","Swegon":"loc","Pluggit":"loc","Stiebel Eltron":"loc","Rekuperator Lt":"loc","Zehnder":"hacs","Vents":"hacs","Itho":"hacs","Blauberg":"hacs","Helios":"hacs","Dantherm":"hacs","Flexit":"off","Duco":"off","Oxygen":"chk","Recotherm":"chk","Pichler":"chk","Tecna":"chk","Mitsubishi Electric":"chk","Daikin":"chk","Domekt":"loc","Thessla Green":"loc","Atrea":"loc"},"note":"Dažniausiai jungiama per Modbus (RS485 arba TCP). Reikia valdiklio modelio ir prieigos prie jo.","def":"loc","sub":["Rekuperatorius","Ištraukiamasis ventiliatorius","Kanalinis šildytuvas / aušintuvas"]},{"id":"heat","name":"Termostatai ir šildymo zonos","ic":"thermo","p1":50,"p2":20,"kw":["termostat","grindin","radiator","sildym","zonu","kolektori"],"brands":{"Computherm":"chk","Elektra":"chk","Siemens":"chk","Uponor":"chk","Rehau":"chk","Wavin":"chk","Purmo":"chk","Tech Sterowniki":"chk","Auraton":"chk","Salus":"hacs","Moes":"hacs","Tuya":"hacs","Heatmiser":"hacs","Hive":"hacs","Zemismart":"hacs","Meross":"hacs","Ezviz":"hacs","Tado":"off","Netatmo":"off","Danfoss":"off","Nest":"off","Honeywell":"off","Shelly":"off","Aqara":"off","Sonoff":"off","Ecobee":"off","Plugwise":"off","Fibaro":"off","Eurotronic":"off","Bosch":"off","Viessmann":"off","Euroster":"chk","Watts":"chk"},"note":"Zigbee ir Wi-Fi termostatai paprastai integruojami lengvai. Grindinio šildymo valdikliams reikia patikros.","def":"chk","sub":["Radiatoriaus termostatinė galvutė","Grindinio šildymo valdiklis","Kambario termostatas","Elektrinis radiatorius / konvektorius"]},{"id":"dhw","name":"Vandens šildytuvas","ic":"drop","p1":45,"p2":25,"kw":["vandens sildytuv","boiler","karsto vandens","tūrin"],"brands":{"Gorenje":"chk","Drazice":"chk","Atlantic":"chk","OSO":"chk","Eldom":"chk","Tesy":"chk","Kospel":"chk","Ariston Lydos":"chk","Thermor":"chk","Bosch":"chk","Stiebel Eltron":"loc","Midea":"hacs","Electrolux":"hacs","Gorenje Smart":"hacs","Thermex":"hacs","Ariston":"off","Shelly":"off","Polaris":"chk"},"note":"Valdomas per Wi-Fi modulį arba išmanią relę su galios matavimu.","def":"chk","sub":["Elektrinis boileris","Šilumos siurblio boileris","Momentinis vandens šildytuvas"]},{"id":"inv","name":"Saulės inverteris","ic":"sun","p1":150,"p2":80,"kw":["inverter","keitikl","saules elektrin","fotovoltin","saules panel","hibridin","fotovolt"],"brands":{"Livoltek":"chk","Delta":"chk","Must":"chk","Voltronic":"chk","Axpert":"chk","Easun":"chk","Felicity":"chk","Luxpower":"chk","Hypontech":"chk","Ingeteam":"chk","Chint":"chk","Sermatec":"chk","Solis":"loc","Ginlong":"loc","Huawei":"loc","Deye":"loc","Sungrow":"loc","Fox ESS":"loc","Sofar":"loc","Sunsynk":"loc","Afore":"loc","Kaco":"loc","ABB":"loc","FIMER":"loc","Sigenergy":"loc","SAJ":"loc","Solplanet":"loc","Growatt SPH":"loc","Growatt":"hacs","Hoymiles":"hacs","Anker":"hacs","EcoFlow":"hacs","Zendure":"hacs","Sunsynk Cloud":"hacs","Solarman":"hacs","Fronius":"off","SMA":"off","GoodWe":"off","SolarEdge":"off","Victron":"off","Enphase":"off","SolaX":"off","Kostal":"off","APsystems":"off","Zeversolar":"off","Tesla":"off"},"note":"Pirmenybė – vietiniam Modbus ryšiui: duomenys kas kelias sekundes ir galimybė valdyti krovimą.","def":"chk","sub":["Hibridinis inverteris","Tinklinis inverteris","Mikroinverteriai","Balkono elektrinė"]},{"id":"bat","name":"Namų baterija","ic":"battery","p1":90,"p2":50,"kw":["bater","akumuliator","kaupikl","energijos kaup"],"brands":{"LG":"chk","Hithium":"chk","Felicity":"chk","Lifepo":"chk","Must":"chk","SunPower":"chk","Pylontech":"loc","BYD":"loc","Dyness":"loc","Huawei":"loc","Fox ESS":"loc","Solis":"loc","Deye":"loc","Sungrow":"loc","Sigenergy":"loc","Seplos":"loc","JK BMS":"loc","Weco":"loc","Sofar":"loc","Alpha ESS":"hacs","Growatt":"hacs","EcoFlow":"hacs","Anker":"hacs","Zendure":"hacs","Senec":"hacs","E3DC":"hacs","Varta":"hacs","Tesla":"off","SolaX":"off","Sonnen":"off","Victron":"off","GoodWe":"off","SMA":"off","SolarEdge":"off","Enphase":"off","Kostal":"off"},"note":"Dažniausiai valdoma per inverterį. Optimizavimui reikia, kad inverteris leistų keisti krovimo režimus.","def":"chk","sub":["Namų baterija","Nešiojama elektrinė"]},{"id":"ev","name":"Elektromobilio įkroviklis","ic":"car","p1":110,"p2":60,"kw":["ikrovikl","wallbox","ikrovimo stotel","elektromobil","ev "," ev","ikrovimo","krovikl"],"brands":{"Ekoenergetyka":"chk","Juice":"chk","Webasto":"chk","Schneider":"chk","Kostal":"chk","Circontrol":"chk","Wallbe":"chk","Solis":"chk","Growatt":"chk","Elinta":"hacs","V2C":"chk","Orbis":"chk","Siemens":"chk","Hager":"chk","ABB":"loc","Mennekes":"loc","Heidelberg":"loc","Huawei":"loc","Sungrow":"loc","Etrel":"loc","Phoenix Contact":"loc","Webasto Unite":"loc","Zaptec":"hacs","Easee":"hacs","OCPP":"hacs","TeltoCharge":"hacs","Teltonika":"hacs","Fronius":"hacs","Wattpilot":"hacs","Myenergi":"hacs","Zappi":"hacs","Hypervolt":"hacs","Elli":"hacs","Autel":"hacs","Charge Amps":"hacs","Garo":"hacs","Delta":"hacs","EVBox":"hacs","Alfen":"hacs","Wallbox":"off","go-e":"off","Tesla":"off","Keba":"off","OpenEVSE":"off","Ohme":"off","Peblar":"off","Smappee":"off","Pulsar":"off"},"note":"Krovimas pagal saulės perteklių ir tarifą galimas, jei įkroviklis leidžia keisti srovę (dažnai per OCPP).","def":"chk","sub":["Sieninis įkroviklis","Nešiojamas įkroviklis"]},{"id":"sec","name":"Apsaugos sistema","ic":"shield","p1":100,"p2":60,"kw":["apsaug","signaliz","alarm","apsaugos"],"brands":{"Trikdis":"chk","Eldes":"chk","Elmo":"chk","Teletek":"chk","Abus":"chk","Hikvision AX":"chk","Dahua Airshield":"chk","Somfy":"chk","Nice":"chk","Crow":"chk","Inim":"chk","Texecom Premier":"chk","Paradox":"hacs","Ajax":"hacs","Jablotron":"hacs","Texecom":"hacs","Galaxy":"hacs","Pyronix":"hacs","Visonic":"hacs","Satel":"off","DSC":"off","Risco":"off","Honeywell":"off","Bosch":"off","Yale":"off","Verisure":"off","Ring":"off","SimpliSafe":"off"},"note":"Dažnai reikia papildomo modulio (IP arba GSM). Saugumo sumetimais pirmiausia diegiama būsenų stebėsena.","def":"chk","sub":["Signalizacijos centralė","Sirena","Gaisro / dūmų jutikliai","Klaviatūra / pultelis"]},{"id":"cam","name":"Vaizdo kamera","ic":"cam","p1":40,"p2":20,"kw":["kamer","nvr","dvr","stebejim","vaizdo"],"brands":{"Xiaomi":"chk","Aqara":"chk","Ajax":"chk","Trikdis":"chk","Ezviz cloud":"chk","Hikvision":"loc","Dahua":"loc","Imou":"loc","Annke":"loc","Uniview":"loc","Hanwha":"loc","Milesight":"loc","Vivotek":"loc","Bosch":"loc","Hilook":"loc","Eufy":"hacs","Arlo":"hacs","Yi":"hacs","Wyze":"hacs","Tuya":"hacs","Frigate":"hacs","Reolink":"off","Ubiquiti":"off","UniFi":"off","Tapo":"off","TP-Link":"off","Ring":"off","Axis":"off","Ezviz":"off","Foscam":"off","Amcrest":"off","Blink":"off","Nest":"off","Netatmo":"off","Synology":"off","Doorbird":"off"},"note":"Veikia per RTSP/ONVIF: vaizdas, judesio įvykiai ir įrašai skydelyje.","def":"loc","sub":["Lauko kamera","Vidaus kamera","Įrašymo įrenginys (NVR)","Durų skambutis su kamera"]},{"id":"light","name":"Apšvietimas ir jungikliai","ic":"light","p1":25,"p2":10,"kw":["sviest","lemp","apsviet","led","jungikl","rele","dimer","sviesos"],"brands":{"Legrand":"chk","Schneider":"chk","Busch-Jaeger":"chk","Gira":"chk","Jung":"chk","ABB":"chk","Dali":"chk","Hager":"chk","Berker":"chk","Ospel":"chk","Kontakt-Simon":"chk","Simon":"chk","Tuya":"hacs","Moes":"hacs","Zemismart":"hacs","Meross":"hacs","Loxone":"hacs","Smart Life":"hacs","Philips Hue":"off","Philips":"off","IKEA":"off","Tradfri":"off","Shelly":"off","Sonoff":"off","Aqara":"off","Govee":"off","Yeelight":"off","WiZ":"off","Nanoleaf":"off","Xiaomi":"off","LIFX":"off","Innr":"off","Ledvance":"off","Osram":"off","Paulmann":"off","Gledopto":"off","Lutron":"off","KNX":"off","Fibaro":"off","Livarno":"off","Lidl":"off","Zigbee":"off","Z-Wave":"off","Matter":"off","ESPHome":"off"},"note":"Dažniausiai paprasta integracija per Zigbee, Wi-Fi arba Matter.","def":"off","sub":["Lemputė","LED juosta","Sieninis jungiklis","Relė / dimeris po jungikliu","Lauko apšvietimas","Kištukinis lizdas"]},{"id":"air","name":"Drėkintuvas / oro valytuvas","ic":"drop","p1":30,"p2":15,"kw":["drekint","valytuv","sausint","oro kokyb","dregm"],"brands":{"Boneco":"chk","Sharp":"chk","Venta":"chk","Honeywell":"chk","Stadler Form":"chk","Rowenta":"chk","Trotec":"chk","Tefal":"chk","Philips":"hacs","Dyson":"hacs","Blueair":"hacs","Coway":"hacs","Electrolux":"hacs","Duux":"hacs","Meaco":"hacs","Xiaomi":"off","Smartmi":"off","Levoit":"off","Winix":"off","IKEA":"off","Philips Air":"off","Beurer":"chk"},"note":"Daugelis Wi-Fi modelių valdomi. Kai kuriems reikia gamintojo paskyros ir prieigos rakto.","def":"chk","sub":["Drėkintuvas","Oro valytuvas","Sausintuvas","Ventiliatorius"]},{"id":"cover","name":"Žaliuzės, užuolaidos, vartai","ic":"blinds","p1":45,"p2":25,"kw":["zaliuz","uzuolaid","vartai","vartu","garaz","roleti","markiz","vart"],"brands":{"Came":"chk","Fakro":"chk","Bft":"chk","Gaposa":"chk","Faac":"chk","Beninca":"chk","Marantec":"chk","Ryterna":"chk","Wisniowski":"chk","Sommer":"chk","Chamberlain":"chk","Novoferm":"chk","Selve":"chk","Becker":"chk","Nice":"hacs","Hormann":"hacs","Moes":"hacs","Zemismart":"hacs","Rademacher":"hacs","Dooya":"hacs","Tuya":"hacs","Somfy":"off","Shelly":"off","Velux":"off","Aqara":"off","IKEA":"off","Motionblinds":"off","Overkiz":"off","Sonoff":"off","Krispol":"chk","Aluprof":"chk"},"note":"Dažnai pakanka relės arba Shelly modulio prie esamos automatikos.","def":"chk","sub":["Žaliuzės","Roletai","Užuolaidos","Markizė","Kiemo vartai","Garažo vartai"]},{"id":"sens","name":"Jutikliai","ic":"sensor","p1":15,"p2":8,"kw":["jutikl","sensor","davikl","termometr","judesio","duru","nuoteki","dumu","co2"],"brands":{"Tuya":"hacs","Moes":"hacs","Aqara":"off","Xiaomi":"off","Shelly":"off","Sonoff":"off","IKEA":"off","Fibaro":"off","Netatmo":"off","Airthings":"off","Govee":"off","SwitchBot":"off","Ruuvi":"off","Eve":"off","Philips":"off","Frient":"off","Develco":"off","Heiman":"off","Bosch":"off","Zooz":"off","Aeotec":"off","ThirdReality":"off","Qingping":"off"},"note":"Temperatūros, drėgmės, judesio, durų ar nuotėkio jutikliai – greitas ir pigus prijungimas.","def":"off","sub":["Temperatūros ir drėgmės jutiklis","Judesio / buvimo jutiklis","Durų ir langų jutiklis","Vandens nuotėkio jutiklis","Dūmų jutiklis","CO₂ / oro kokybės jutiklis","Šviesos jutiklis","Vibracijos jutiklis"]},{"id":"meter","name":"Energijos skaitiklis","ic":"gauge","p1":50,"p2":30,"kw":["skaitikl","energijos matuokl","sunaudojim","em3","pro3em","p1"],"brands":{"ESO":"chk","Kaifa":"chk","Iskra":"chk","Landis":"chk","Elgama":"chk","Eastron":"loc","Carlo Gavazzi":"loc","Huawei":"loc","Solis":"loc","Chint":"loc","Orno":"loc","Acrel":"loc","Growatt":"hacs","Emporia":"hacs","Shelly":"off","Sonoff":"off","Fronius":"off","Victron":"off","SMA":"off","Iammeter":"off","Tibber":"off","Sense":"off","Smappee":"off","DSMR":"off","Efergy":"off"},"note":"Leidžia matyti viso namo ir atskirų grandinių suvartojimą realiu laiku.","def":"off","sub":["Viso namo skaitiklis","Grandinės / prietaiso matavimas","ESO skaitiklio nuskaitymas"]},{"id":"vac","name":"Robotas siurblys","ic":"sensor","p1":40,"p2":25,"def":"chk","kw":["robotas siurbl","siurblys robot","robotas dulk","dulkiu siurb","robot","plaunantis robot","robotas"],"brands":{"Roborock":"off","iRobot":"off","Ecovacs":"off","Xiaomi":"off","Samsung":"off","Shark":"off","Neato":"off","Dreame":"hacs","Eufy":"hacs","Narwal":"hacs","Viomi":"hacs","Dyson":"hacs","Roidmi":"chk","Rowenta":"chk","Tefal":"chk","Lefant":"chk","Proscenic":"chk","Conga":"chk","Midea":"chk","Ezviz":"chk","Mova":"hacs","Imou":"chk"},"note":"Valymo pradžia, zonos, baterija ir klaidos skydelyje. Pvz., valyti automatiškai, kai visi išvyksta.","sub":["Robotas siurblys","Siurbiantis ir plaunantis robotas","Langų valymo robotas"]},{"id":"app","name":"Buitinė technika","ic":"washer","p1":35,"p2":20,"kw":["skalb","indaplov","saldytuv","orkait","dziovykl","kaitlent","kavos"],"brands":{"Beko":"chk","Gorenje":"chk","Philips":"chk","Smeg":"chk","Liebherr":"chk","Tefal":"chk","Thermomix":"chk","Zanussi":"chk","Grundig":"chk","Indesit":"chk","Hotpoint":"chk","Electrolux":"hacs","AEG":"hacs","Candy":"hacs","Hoover":"hacs","Haier":"hacs","Hisense":"hacs","Dyson":"hacs","De'Longhi":"hacs","Samsung":"off","LG":"off","Bosch":"off","Siemens":"off","Neff":"off","Gaggenau":"off","Miele":"off","Xiaomi":"off","Whirlpool":"off","Bauknecht":"off","Home Connect":"off","Teka":"chk"},"note":"Dažniausiai integruojama per gamintojo debesį. Valdymo galimybės priklauso nuo modelio.","def":"chk","sub":["Šaldytuvas","Indaplovė","Skalbimo mašina","Džiovyklė","Orkaitė","Kaitlentė","Gartraukis","Kavos aparatas","Mikrobangų krosnelė"]},{"id":"mow","name":"Robotinė vejapjovė","ic":"sensor","p1":50,"p2":30,"kw":["vejapjov","zoliapjov","mower","vejos"],"brands":{"Stihl":"chk","Robomow":"chk","Yarbo":"chk","Einhell":"chk","Ambrogio":"chk","Kress":"chk","Gardena":"hacs","Mammotion":"hacs","Luba":"hacs","Segway":"hacs","Navimow":"hacs","Worx":"hacs","Landroid":"hacs","Bosch":"hacs","Indego":"hacs","Dreame":"hacs","Husqvarna":"off","Ecovacs":"off","Yard Force":"chk"},"note":"Būsena, baterija ir pjovimo grafikas. Pvz., lyjant pjovimą galima sustabdyti automatiškai.","def":"chk","sub":["Robotinė vejapjovė"]},{"id":"media","name":"TV ir garso sistema","ic":"tv","p1":25,"p2":15,"kw":["televiz","tv","garso","sonos","kolonel","soundbar","resyver"],"brands":{"TCL":"chk","Harman Kardon":"chk","JBL":"chk","Grundig":"chk","Sharp":"chk","Thomson":"chk","Philips":"hacs","Bose":"hacs","Hisense":"hacs","Samsung":"off","LG":"off","Sony":"off","Sonos":"off","Bang & Olufsen":"off","Yamaha":"off","Denon":"off","Marantz":"off","Apple TV":"off","Chromecast":"off","Android TV":"off","Roku":"off","Spotify":"off","Panasonic":"off","Xiaomi":"off","Onkyo":"off","Pioneer":"off","WiiM":"off","Heos":"off","Plex":"off","Kodi":"off"},"note":"Įjungimas, garsas, šaltiniai ir scenarijai, pvz., „Kino vakaras“.","def":"off","sub":["Televizorius","Kolonėlė / garso sistema","Multimedijos grotuvas","Resyveris"]},{"id":"lock","name":"Spyna / durų skambutis","ic":"lock","p1":45,"p2":25,"kw":["spyn","skambut","domofon","durys"],"brands":{"Bold":"chk","Igloohome":"chk","Somfy":"chk","Abus":"chk","Fermax":"chk","Bticino":"chk","Urmet":"chk","Assa Abloy":"chk","Gerda":"chk","Akuvox":"hacs","Ezviz":"hacs","TTLock":"hacs","2N":"hacs","Hikvision":"hacs","Dahua":"hacs","Comelit":"hacs","Nuki":"off","Yale":"off","Ring":"off","Aqara":"off","Doorbird":"off","August":"off","Danalock":"off","SwitchBot":"off","Tedee":"off","Loqed":"off"},"note":"Pirmenybė modeliams su vietiniu API. Spynoms taikome papildomas saugumo taisykles.","def":"chk","sub":["Išmanioji spyna","Durų skambutis","Domofonas"]},{"id":"sauna","name":"Pirtis / saunos krosnelė","ic":"thermo","p1":60,"p2":35,"def":"chk","kw":["sauna","pirt","krosnel"],"brands":{"Huum":"off","Harvia":"hacs","Tylö":"chk","Helo":"chk","Saunum":"chk","EOS":"chk","Narvi":"chk","Sentiotec":"chk","Shelly":"off"},"note":"Įkaitinimas iš anksto, temperatūra ir laikas. Senesnėms krosnelėms – per galios relę.","sub":["Elektrinė krosnelė","Infraraudonųjų spindulių kabina","Garinė pirtis"]},{"id":"water","name":"Vandens nuotėkio apsauga","ic":"drop","p1":40,"p2":20,"def":"chk","kw":["nuotek","vozt","vandens uzdar","uzsaugos vozt"],"brands":{"Shelly":"off","Aqara":"off","Sonoff":"off","Zigbee":"off","Moes":"hacs","Tuya":"hacs","Grohe":"hacs","Neptun":"chk","Hydra":"chk"},"note":"Nuotėkio jutikliai ir vožtuvas, kuris automatiškai užsuka vandenį ir praneša į telefoną.","sub":["Nuotėkio jutiklis","Uždarymo vožtuvas","Vandens skaitiklis"]},{"id":"vehicle","name":"Automobiliai","ic":"car","p1":65,"p2":30,"kw":["automobilio busena","automobilis","automobilio","passat","id.3","id3","vehicle","transporto priemone","masinos duomenys"],"brands":{"Volkswagen":"chk","Škoda":"chk","Audi":"chk","Cupra":"chk","Tesla":"chk","BMW":"chk","Mercedes-Benz":"chk","Hyundai":"chk","Kia":"chk","Volvo":"chk","Renault":"chk","Nissan":"chk","Toyota":"chk","Peugeot":"chk","Opel":"chk","Ford":"chk","Porsche":"chk","Polestar":"chk","SEAT":"chk","MINI":"chk","Citroën":"chk","Dacia":"chk","MG":"chk"},"note":"Baterijos būseną, ridą, įkrovimą ar salono šildymą galima rodyti ir valdyti, jei konkretus automobilis ir paskyra leidžia gauti šiuos duomenis. Galimybės priklauso nuo modelio ir paslaugų.","def":"chk","sub":["Automobilio būsena ir baterija","Salono klimato valdymas","Įkrovimo planavimas","Važiavimo statistika"]},{"id":"irrigation","name":"Laistymo sistema","ic":"drop","p1":70,"p2":35,"kw":["laistym","irrigation","hidrawise","hydrawise","laistymo valdikl","purkstuv","vejos laistymas","laistymo kompiuteris"],"brands":{"Hunter":"hacs","Rain Bird":"hacs","Gardena":"hacs","Orbit":"hacs","Rachio":"hacs","OpenSprinkler":"hacs","LinkTap":"chk","Shelly":"chk","Sonoff":"chk","Tuya":"chk","Aqara":"chk","Husqvarna":"chk","Claber":"chk","Toro":"chk","Netro":"chk","Irritrol":"chk"},"note":"Galima planuoti zonas pagal lietų, dirvožemio drėgmę ir grafiką. Interneto poreikis priklauso nuo valdiklio ir integracijos.","def":"chk","sub":["Laistymo valdiklis","Laistymo zona / vožtuvas","Dirvožemio drėgmės jutiklis","Lietaus jutiklis","Laistymo siurblio automatika"]},{"id":"garden","name":"Šiltnamis ir baseinas","ic":"sensor","p1":65,"p2":30,"kw":["siltnam","basein","pool","filtravimo siurblys","šiltnam","vandens temperatura baseine","sodo automatika"],"brands":{"Shelly":"chk","Sonoff":"chk","Tuya":"chk","Aqara":"chk","Gardena":"chk","Hunter":"chk","Rain Bird":"chk","Hayward":"chk","Pentair":"chk","Zodiac":"chk","Bestway":"chk","Intex":"chk","Fibaro":"chk","BWT":"chk"},"note":"Automatinis laistymas, vėdinimas, temperatūros stebėjimas, siurbliai ir baseino filtravimas – pagal turimos įrangos valdymo galimybes.","def":"chk","sub":["Šiltnamio temperatūra ir drėgmė","Šiltnamio vėdinimas","Baseino filtravimo siurblys","Baseino temperatūra","Baseino šildymo valdymas"]}];
const CMP={off:['b-off','Labai didelė tikimybė','Tikėtina, kad suderinama'],hacs:['b-hacs','Didelė tikimybė','Tikėtina, kad suderinama'],loc:['b-loc','Didelė tikimybė','Tikėtina, kad suderinama'],chk:['b-chk','Vertinama individualiai','Patikrinsime konkretų modelį']};

const BASE_SETUP_PRICE=149; // nuo: pradinis HA paruošimas, nepriklausomai nuo serverio pasirinkimo
const OPTS={
 server:{type:'radio',items:[
  {id:'own',t:'Jau turiu Home Assistant',d:'Turimo serverio patikrinimas ir Home Assistant konfigūravimas – paslauga nuo 149 €.',p:0,grp:'Jau turiu sistemą'},
  {id:'green',t:'Home Assistant Green · Standartinis',d:'Pakanka įprastoms namų automatizacijoms. Serverio kaina neįtraukta, paruošimas nuo 149 €.',p:0,grp:'Standartiniams namams',tag:'Rekomenduojamas'},
  {id:'rpi4',t:'Raspberry Pi 5 (4 GB) · Bazinis',d:'Paprastam valdymui rekomenduojamas SSD. Serverio kaina neįtraukta, paruošimas nuo 149 €.',p:0},
  {id:'rpi8',t:'Raspberry Pi 5 (8 GB) + SSD · Išplėstas',d:'Daugiau atminties ir SSD istorijai bei papildiniams. Serverio kaina neįtraukta, paruošimas nuo 149 €.',p:0,grp:'Išplėstai sistemai'},
  {id:'mini',t:'Mini PC · Galingas',d:'Didesnei apkrovai ir papildiniams. Serverio kaina neįtraukta, vietinio DI diegimas vertinamas papildomai.',p:0,grp:'Sudėtingiems projektams',tag:'Didžiausia galia'}],def:'green'},
 zb:{type:'check',items:[
  {id:'zbt',t:'Zigbee / Thread adapteris',d:'Įrenginį įsigyjate atskirai. Adapterio prijungimo darbų apimtis įvertinama individualiai.',p:0,q:'Darbai individualiai'}],def:[]},
 dash:{type:'radio',items:[
  {id:'std',t:'Standartinis skydelis',d:'Tvarkingas, telefonui pritaikytas',p:0},
  {id:'ind',t:'Individualus skydelis',d:'Gražus dizainas pagal jūsų namus',p:150},
  {id:'wall',t:'Premium skydelis',d:'Animuotas dizainas su tikroviškais įrenginių vaizdais, tinka ir sieninei planšetei',p:290}],def:'std'},
 remote:{type:'radio',items:[{id:'none',t:'Nereikia',d:'Valdymas tik namų tinkle',p:0},{id:'pn',t:'Nuotolinė prieiga per ProtingesniNamai',d:'Saugus šifruotas ryšys iš bet kur, be atvirų prievadų. Įrengimas įskaičiuotas',p:5,m:1},{id:'nabu',t:'Home Assistant Cloud (Nabu Casa)',d:'Oficiali HA paslauga, palaiko ir Google / Alexa balsą. Prenumerata 7,50 €/mėn. mokama Nabu Casa',p:29}],def:'none'},
 tab:{type:'radio',items:[{"id":"none","t":"Nereikia","d":"Valdymas telefonu ir kompiuteriu","p":0,"img":"<svg viewBox=\"0 0 120 80\" class=\"dimg\"><circle cx=\"60\" cy=\"40\" r=\"22\" fill=\"none\" stroke=\"rgba(255,255,255,.5)\" stroke-width=\"2\"/><path d=\"M45 55l30-30\" stroke=\"rgba(255,255,255,.5)\" stroke-width=\"2\"/></svg>","grp":"Be papildomo ekrano"},{"id":"nsp","t":"Sonoff NSPanel Pro 86","d":"86 tipo mažas sieninis jutiklinis ekranas. Integravimas ir montavimo darbai nuo 99 €. Ekranas ir montavimo medžiagos į darbų kainą neįtraukti. Premium vaizdas – demonstracinė vizualizacija.","p":99,"img":"<img class=\"pn-panel-premium-photo\" src=\"assets/panels/sonoff-nspanel-pro-premium.webp\" loading=\"lazy\" decoding=\"async\" alt=\"\" width=\"820\" height=\"820\">","grp":"Sonoff sieniniai ekranai"},{"id":"nsp120","t":"Sonoff NSPanel Pro 120","d":"Didesnis vertikalus NSPanel Pro variantas. Darbai nuo 99 €; dėl Premium skydelio rodymo tikrinama programinė įranga.","p":99,"img":"<img class=\"pn-panel-premium-photo\" src=\"assets/panels/sonoff-nspanel-pro-premium.webp\" loading=\"lazy\" decoding=\"async\" alt=\"\" width=\"820\" height=\"820\">"},{"id":"nspg2","t":"Sonoff NSPanel Pro Gen2 (86)","d":"Naujesnė 86 tipo versija su dviejų kanalų relių valdymu. Integravimo būdas ir Premium skydelio rodymas vertinamas pagal modelį.","p":99,"img":"<img class=\"pn-panel-premium-photo\" src=\"assets/panels/sonoff-nspanel-pro-premium.webp\" loading=\"lazy\" decoding=\"async\" alt=\"\" width=\"820\" height=\"820\">"},{"id":"shx2","t":"Shelly Wall Display X2i (6,95″)","d":"6,95 col. valdymo ekranas. Integravimo ir montavimo darbai nuo 99 €. Ekranas ir montavimo medžiagos į darbų kainą neįtraukti. Premium vaizdas – demonstracinė vizualizacija.","p":99,"img":"<img class=\"pn-panel-premium-photo\" src=\"assets/panels/shelly-wall-display-premium.webp\" loading=\"lazy\" decoding=\"async\" alt=\"\" width=\"820\" height=\"820\">","grp":"Shelly sieniniai ekranai"},{"id":"shxl","t":"Shelly Wall Display XL (10,1″)","d":"10,1 col. sieninis valdymo ekranas. Home Assistant sąsaja ir atvaizdavimas tikslinami pagal programinės įrangos galimybes. Darbai nuo 99 €.","p":99,"img":"<img class=\"pn-panel-premium-photo\" src=\"assets/panels/shelly-wall-display-premium.webp\" loading=\"lazy\" decoding=\"async\" alt=\"\" width=\"820\" height=\"820\">"},{"id":"sam","t":"Samsung Galaxy Tab A9+","d":"Samsung planšetės HA skydelio, kiosk režimo ir montavimo darbai nuo 99 €. Įranga neįtraukta.","p":99,"img":"<img class=\"pn-panel-premium-photo\" src=\"assets/panels/samsung-tab-premium.webp\" loading=\"lazy\" decoding=\"async\" alt=\"\" width=\"820\" height=\"820\">","grp":"Planšetės ir sieniniai laikikliai"},{"id":"ipad","t":"Apple iPad","d":"iPad skydelio konfigūravimo ir kiosk režimo paruošimo darbai nuo 99 €. Įranga ir laikiklis neįtraukti.","p":99,"img":"<img class=\"pn-panel-premium-photo\" src=\"assets/panels/ipad-premium.webp\" loading=\"lazy\" decoding=\"async\" alt=\"\" width=\"820\" height=\"820\">"},{"id":"displine","t":"iPad su Displine tipo laikikliu","d":"Sieninio laikiklio ir planšetės konfigūravimo bei montavimo darbai nuo 99 €. Pats laikiklis, iPad ir medžiagos neįtraukti.","p":99,"img":"<img class=\"pn-panel-premium-photo\" src=\"assets/panels/displine-wall-mount-premium.webp\" loading=\"lazy\" decoding=\"async\" alt=\"\" width=\"820\" height=\"820\">"},{"id":"own","t":"Turiu savo planšetę","d":"Jau turimos planšetės skydelio paruošimas nuo 99 €. Iliustracijoje parodytas pavyzdinis modelis.","p":99,"img":"<img class=\"pn-panel-premium-photo\" src=\"assets/panels/samsung-tab-premium.webp\" loading=\"lazy\" decoding=\"async\" alt=\"\" width=\"820\" height=\"820\">"}],def:'none'},
 voice:{type:'check',items:[
  {id:'phone',t:'Balsu per telefoną ir laikrodį',d:'HA programėlė (Assist). Lietuviškai – per HA Cloud arba DI asistentą',p:49},
  {id:'hav',t:'Home Assistant Voice kolonėlė',d:'Turimos kolonėlės konfigūravimas; įrenginio įsigijimo kaina neįtraukta. Darbai įvertinami individualiai.',p:0,q:'Darbai individualiai'},
  {id:'ai',t:'DI asistentas (ChatGPT / Gemini)',d:'Supranta laisvą kalbą lietuviškai, pvz., „Kodėl svetainėje šalta?“. DI paslauga ~1–3 €/mėn. moka klientas',p:79},
  {id:'ga',t:'Google Home / Amazon Alexa',d:'Esamoms kolonėlėms. Komandos angliškai, reikia HA Cloud',p:49},
  {id:'local',t:'Visiškai vietinis atpažinimas',d:'Be debesies, viskas namų serveryje. Reikia Mini PC, lietuvių kalbos tikslumas ribotas',p:99}],def:[]},
 auto:{type:'check',items:[
  {id:'base',t:'Bazinės automatizacijos',d:'Iki 5 scenarijų: apšvietimas, pranešimai',p:80},
  {id:'adv',t:'Išplėstinės automatizacijos',d:'Iki 15 scenarijų: klimatas, buvimas namie',p:190},
  {id:'energy',t:'Energijos optimizavimas',d:'Saulės prognozė, biržos kaina, baterija, EV',p:250}],def:[]},
 care:{type:'radio',items:[
  {id:'none',t:'Be priežiūros',d:'Pagalba pagal atskirą užsakymą',p:0,m:1},
  {id:'b',t:'Bazinė',d:'Atnaujinimai ir atsarginės kopijos',p:9,m:1},
  {id:'s',t:'Standartinė',d:'+ stebėsena ir 1 val. pakeitimų per mėn.',p:19,m:1},
  {id:'p',t:'Premium',d:'+ prioritetinė pagalba, 3 val. pakeitimų',p:39,m:1}],def:'b'}
};

/* ===================== ATPAŽINIMAS ===================== */
const norm=s=>' '+s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/\s+/g,' ').trim()+' ';
const BRANDS=(()=>{const m=new Map();CATS.forEach(c=>Object.keys(c.brands).forEach(b=>{const k=norm(b).trim();if(!m.has(k))m.set(k,{name:b,cats:[]});m.get(k).cats.push(c.id)}));return m})();
function recognize(raw){
  const t=norm(raw);let cat=null,best=0,brand=null,bl=0;
  CATS.forEach(c=>c.kw.forEach(k=>{const kk=norm(k).trim();if(t.includes(kk)&&kk.length>best){best=kk.length;cat=c}}));
  BRANDS.forEach((v,k)=>{const re=new RegExp('(^|[^a-z0-9])'+k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'([^a-z0-9]|$)');if(re.test(t)&&k.length>bl){bl=k.length;brand=v}});
  if(/automobilis|automobilio|elektromobilis|elektromobilio|passat|id\.?3/.test(t)&&!/ikrovik|ikrovimo stotel|krovimo stotel|wallbox/.test(t))cat=CATS.find(c=>c.id==='vehicle')||cat;
  const fromKw=!!cat;let multi=null;
  if(!cat&&brand){if(brand.cats.length>1)multi=brand.cats;else cat=CATS.find(c=>c.id===brand.cats[0])}
  let bn=brand?brand.name:null;
  if(!bn){const w=raw.trim().split(/\s+/)[0];if(w&&/^[A-ZĄČĘĖĮŠŲŪŽ]/.test(w)&&!(cat&&norm(w).trim()&&cat.kw.some(k=>norm(k).includes(norm(w).trim()))))bn=w}
  return {brand:bn,cat:cat?cat.id:null,multi,fromKw};
}
/* ===================== MODELIAI (populiariausi) =====================
   [modelis / serija, lygis (off|hacs|loc|chk), pastaba]                */
const MODELS={
 "vehicle|Volkswagen":[["ID.3 / ID.4 / ID.5","chk",""],["Passat GTE / Golf GTE","chk",""]],
 "vehicle|Škoda":[["Enyaq / Elroq","chk",""]],
 "vehicle|Tesla":[["Model 3 / Model Y","chk",""]],
 "vehicle|Hyundai":[["Ioniq 5 / Ioniq 6 / Kona Electric","chk",""]],
 "vehicle|Kia":[["EV3 / EV6 / EV9 / Niro EV","chk",""]],
 "irrigation|Hunter":[["Hydrawise HC / Pro-HC","chk",""],["X2 + WAND","chk",""],["HPC / HCC / Pro-C su valdymo moduliu","chk",""]],
 "irrigation|Rain Bird":[["ESP-TM2 + LNK2","chk",""],["ESP-ME3 + LNK WiFi","chk",""]],
 "irrigation|Gardena":[["Smart Water Control","chk",""],["Smart Irrigation Control","chk",""]],
 "irrigation|OpenSprinkler":[["OpenSprinkler AC / DC","chk",""]],
 "mow|Husqvarna":[["Automower 305 / 310 / 315","chk",""],["Automower 405X / 415X / 430X / 450X","chk",""],["Automower 310E NERA / 410XE NERA","chk",""],["Automower 430X NERA / 450X NERA","chk",""]],
 "mow|Mammotion":[["LUBA mini AWD 800 / 1500","chk",""],["LUBA mini 2 AWD 1000 / 1500 / 1500H","chk",""],["LUBA 2 AWD 3000 / 5000","chk",""],["LUBA 3 AWD 1500 / 3000 / 5000","chk",""],["LUBA 4 AWD 3000 / 5000 / 10000","chk",""],["YUKA mini 2 1000","chk",""],["YUKA / YUKA mini","chk",""]],
 "mow|Luba":[["LUBA mini AWD 800 / 1500","chk",""],["LUBA mini 2 AWD 1000 / 1500 / 1500H","chk",""],["LUBA 2 AWD 3000 / 5000","chk",""],["LUBA 3 AWD 1500 / 3000 / 5000","chk",""],["LUBA 4 AWD 3000 / 5000","chk",""],["YUKA mini 2","chk",""]],
 "mow|Segway":[["Navimow i105E / i108E / i110","chk",""],["Navimow i208 LiDAR / i2 serija","chk",""],["Navimow H serija","chk",""],["Navimow X3 / X4 serija","chk",""]],
 "mow|Navimow":[["Navimow i105E / i108E","chk",""],["Navimow i208 LiDAR / i2 serija","chk",""],["Navimow H serija","chk",""],["Navimow X serija","chk",""]],
 "mow|Worx":[["Landroid M / L","chk",""],["Landroid Vision","chk",""],["Landroid Vision Cloud","chk",""]],
 "mow|Gardena":[["SILENO minimo","chk",""],["SILENO city / life su Smart Gateway","chk",""],["smart SILENO free / sense","chk",""]],
 "mow|Bosch":[["Indego S+ / M+ / XS+ (connect)","hacs",""],["Indego be „+“","chk","Neturi interneto ryšio"]],
 "hp|Daikin":[["Altherma 3 su Onecta (WLAN)","off",""],["Altherma su BRP069A6x moduliu","off",""],["Altherma be interneto modulio","loc","Per ESPHome adapterį (ESPAltherma)"]],
 "hp|Midea":[["M-Thermal Arctic / monoblokas su Wi-Fi","hacs","Per Midea AC LAN integraciją"],["M-Thermal per Modbus","loc","Per RS485 Modbus"],["Kitas Midea modelis","chk",""]],
 "hp|Nibe":[["S serija (S1155, S1255, S2125 + VVM S)","off","Per myUplink"],["F serija su myUplink","off",""],["F serija be interneto","loc","Per Modbus 40 priedą"]],
 "hp|Panasonic":[["Aquarea su CZ-TAW1","hacs",""],["Aquarea su HeishaMon","loc","Vietinis ryšys, be debesies"],["Aquarea be modulio","chk","Reikia CZ-TAW1 arba HeishaMon"]],
 "hp|Mitsubishi":[["Ecodan su MELCloud Wi-Fi","off",""],["Ecodan per CN105 (ESPHome)","loc",""],["Ecodan be modulio","chk","Reikia Wi-Fi adapterio"]],
 "hp|Viessmann":[["Vitocal su Vitoconnect / TCU","off","Per ViCare"],["Vitodens su Vitoconnect","off","Per ViCare"],["Vitocal be interneto modulio","chk","Reikia Vitoconnect"]],
 "hp|Vaillant":[["aroTHERM su myVAILLANT connect","hacs",""],["aroTHERM su VR 920 / 921","hacs",""],["Be interneto modulio","loc","Per eBUS adapterį"]],
 "hp|Samsung":[["EHS Mono / Split su MIM-B19N (Modbus)","loc",""],["EHS su Wi-Fi (SmartThings)","hacs",""],["Be modulio","chk","Reikia Modbus arba Wi-Fi modulio"]],
 "hp|LG":[["Therma V per Modbus","loc",""],["Therma V su ThinQ Wi-Fi","off",""],["Be modulio","chk",""]],
 "hp|Bosch":[["Compress 6000 / 7000 su K30 / K40","hacs",""],["Be interneto modulio","chk",""]],
 "hp|Thermia":[["Calibra / Atlas su Online","hacs",""],["Be Online modulio","chk",""]],
 "hp|Alpha Innotec":[["Su Luxtronik 2.0 / 2.1 valdikliu","hacs","Vietinis ryšys"]],
 "ac|Daikin":[["Su Onecta Wi-Fi moduliu (BRP069C)","off",""],["Su BRP069A / BRP069B moduliu","off","Vietinis ryšys"],["Be Wi-Fi modulio","chk","IR valdymas arba modulis"]],
 "ac|Midea":[["Su Wi-Fi moduliu (SK-105 / OSK105)","hacs","Per Midea AC LAN"],["Be Wi-Fi modulio","chk","IR valdymas arba modulis"]],
 "ac|Kaisai":[["Su Wi-Fi moduliu","hacs","Midea platforma"],["Be Wi-Fi modulio","chk",""]],
 "ac|Comfee":[["Su Wi-Fi moduliu","hacs","Midea platforma"],["Be Wi-Fi modulio","chk",""]],
 "ac|Samsung":[["WindFree / su Wi-Fi (SmartThings)","off",""],["Be Wi-Fi","chk",""]],
 "ac|LG":[["Su ThinQ Wi-Fi","off",""],["Be Wi-Fi","chk",""]],
 "ac|Mitsubishi":[["MSZ su MELCloud (MAC-567IF)","off",""],["MSZ per CN105 (ESPHome)","loc",""],["Be Wi-Fi","chk",""]],
 "ac|Gree":[["Su Wi-Fi (Gree+ programėlė)","off",""],["Be Wi-Fi","chk",""]],
 "ac|Cooper&Hunter":[["Su Wi-Fi (Gree+ / Ewpe)","off",""],["Be Wi-Fi","chk",""]],
 "ac|Panasonic":[["Etherea su Comfort Cloud","hacs",""],["Be Wi-Fi","chk",""]],
 "ac|Toshiba":[["Seiya / Shorai su Wi-Fi","off",""],["Be Wi-Fi","chk",""]],
 "ac|Haier":[["Su hOn Wi-Fi","hacs",""],["Be Wi-Fi","chk",""]],
 "rec|Komfovent":[["C6 / C6M / C8 valdiklis","loc","Modbus TCP"],["C4 / C5 valdiklis","loc","Modbus RS485"],["Senesnis valdiklis","chk",""]],
 "rec|Salda":[["MCB valdiklis","loc","Modbus"],["Smarty","loc","Modbus"],["Senesnis valdiklis","chk",""]],
 "rec|Amalva":[["MCB valdiklis","loc","Modbus"],["Senesnis valdiklis","chk",""]],
 "rec|Systemair":[["SAVE serija","loc","Modbus / IAM modulis"],["Prior / senesni","chk",""]],
 "rec|Zehnder":[["ComfoAir Q su ComfoConnect LAN C","hacs",""],["ComfoAir E / ComfoD","chk",""]],
 "rec|Oxygen":[["Su Modbus valdikliu","loc","Patikrinsime valdiklio tipą"],["Senesnis valdiklis","chk",""]],
 "rec|Domekt":[["C6 / C6M valdiklis","loc","Modbus TCP"],["C4 / C5 valdiklis","loc","Modbus RS485"]],
 "rec|Brink":[["Flair su Modbus","loc",""],["Renovent","chk",""]],
 "rec|Flexit":[["Nordic S3 / S4","off",""],["Senesni (CI66)","loc","Modbus"]],
 "inv|Solis":[["S6 hibridiniai (S6-EH1P, S6-EH3P)","loc","Modbus – galima valdyti krovimą"],["RHI / RAI hibridiniai","loc","Modbus"],["Tinkliniai S5 / S6-GR","loc","Modbus"],["Tik per SolisCloud","hacs","Duomenys kas 5 min."]],
 "inv|Huawei":[["SUN2000 su SDongle","loc","Modbus TCP"],["SUN2000 su Wi-Fi","loc","Ribotas ryšys"],["Tik per FusionSolar","chk",""]],
 "inv|Deye":[["SUN-xK-SG hibridiniai","loc","Modbus / Solarman"],["Tinkliniai","loc",""]],
 "inv|Growatt":[["SPH / MOD / MIN per vietinį Modbus","loc",""],["Per debesį (ShineWiFi)","hacs",""]],
 "inv|Fronius":[["GEN24 / Symo / Primo","off","Vietinis ryšys"]],
 "inv|SMA":[["Sunny Boy / Tripower / Sunny Island","off",""]],
 "inv|Sungrow":[["SH hibridiniai","loc","Modbus"],["SG tinkliniai","loc","Modbus"]],
 "inv|GoodWe":[["ET / EH / BT / ES","off","Vietinis ryšys"]],
 "inv|SolarEdge":[["Su Modbus TCP","loc",""],["Per debesį","off",""]],
 "inv|Fox ESS":[["H1 / H3 / KH","loc","Modbus"]],
 "inv|Victron":[["Su GX įrenginiu (Cerbo, Venus)","off",""]],
 "ev|Easee":[["Home / Charge / One","hacs",""]],
 "ev|Zaptec":[["Go / Go 2 / Pro","hacs",""]],
 "ev|Wallbox":[["Pulsar Plus / Pulsar Max","chk",""],["Commander 2 / Copper SB","chk",""]],
 "ev|TeltoCharge":[["TeltoCharge (OCPP)","hacs","Per OCPP integraciją"]],
 "ev|go-e":[["Charger Gemini / HOMEfix / HOME+","off",""]],
 "ev|Tesla":[["Wall Connector Gen 3","off",""],["Wall Connector Gen 2","chk","Neturi Wi-Fi"]],
 "ev|Alfen":[["Eve Single / Double Pro-line","loc","Modbus"]],
 "ev|ABB":[["Terra AC su Modbus","loc",""]],
 "sec|Paradox":[["SP / MG / EVO su IP150","hacs","Per PAI"],["Be IP150 modulio","chk","Reikia IP150 arba serijinio adapterio"]],
 "sec|Ajax":[["Hub 2 / Hub 2 Plus / Hub Hybrid","hacs",""]],
 "sec|Satel":[["Integra su ETHM-1","off",""],["Versa / Perfecta","chk",""]],
 "sec|Trikdis":[["FLEXi SP3 / SP231 su Protegus","chk","Patikrinsime ryšio galimybes"],["Kiti Trikdis moduliai","chk",""]],
 "sec|Eldes":[["ESIM364 / Pitbull","chk",""]],
 "sec|Risco":[["LightSYS / ProSYS su Cloud","off",""]],
 "sec|DSC":[["PowerSeries su Envisalink","off",""],["PowerSeries Neo","chk",""]],
 "sec|Jablotron":[["JA-100 serija","hacs",""],["JA-80 serija","chk",""]],
 "cam|Hikvision":[["IP kameros (DS-2CD)","loc","RTSP / ONVIF"],["NVR (DS-76xx / 77xx)","loc",""],["Tik Hik-Connect debesis","chk",""]],
 "cam|Dahua":[["IP kameros ir NVR","loc","RTSP / ONVIF"]],
 "cam|Reolink":[["RLC 5MP / 8MP / 12MP IP","chk",""],["Duo / E1 serija","chk",""],["Argus su Home Hub","chk",""]],
 "cam|Tapo":[["C200 / C210 / C220","chk",""],["C310 / C320WS / C325WB","chk",""],["C500 / C520WS","chk",""]],
 "cam|Xiaomi":[["Mi Home kameros","chk","Dažnai reikia papildomos programinės įrangos"]],
 "air|Xiaomi":[["Smart Humidifier 2","chk",""],["Smart Evaporative Humidifier 3 Lite","chk",""],["Smart Air Purifier 4 / 4 Pro","chk",""]],
 "air|Philips":[["AC serija (2000i, 3000i)","hacs",""],["Be Wi-Fi","chk",""]],
 "air|Dyson":[["Pure Cool / Hot+Cool / Purifier","hacs",""]],
 "air|Levoit":[["Core 200S / 300S / 400S / 600S","off","Per VeSync"],["Be Wi-Fi","chk",""]],
 "heat|Danfoss":[["Ally (Zigbee)","off",""],["Eco (Bluetooth)","hacs",""],["Icon2","chk",""]],
 "heat|Tado":[["V3+ / Tado X","off",""]],
 "heat|Netatmo":[["Smart Thermostat / Smart Radiator Valves","off",""]],
 "heat|Salus":[["iT600 sistema","hacs",""],["Zigbee termostatai","off",""]],
 "lock|Nuki":[["Smart Lock 3 / 4 / Pro / Ultra","off",""]],
 "lock|Yale":[["Linus / Linus L2","off",""]],
 "lock|TTLock":[["Su gateway (G2 / G3)","hacs",""],["Be gateway","chk","Bluetooth per ESPHome"]],
 "cover|Somfy":[["io su TaHoma","off",""],["RTS su TaHoma","off",""],["Be TaHoma","chk",""]],
 "cover|Ryterna":[["Per Shelly / relės modulį","off","Prie esamos automatikos"],["Gamintojo modulis","chk",""]],
 "cover|Came":[["Per Shelly / relės modulį","off",""],["Gamintojo modulis","chk",""]],
 "cover|Nice":[["Su IT4WIFI moduliu","hacs",""],["Per Shelly / relės modulį","off",""]],
 "app|Samsung":[["SmartThings – skalbyklė / džiovyklė","chk",""],["SmartThings – šaldytuvas Family Hub / Bespoke","chk",""],["SmartThings – indaplovė","chk",""],["SmartThings – orkaitė","chk",""]],
 "app|LG":[["ThinQ – skalbyklė / džiovyklė","chk",""],["ThinQ – šaldytuvas","chk",""],["ThinQ – indaplovė","chk",""],["ThinQ – orkaitė","chk",""]],
 "app|AEG":[["Connected – skalbyklė / džiovyklė","chk",""],["Connected – indaplovė / orkaitė","chk",""]],
 "app|Electrolux":[["Connected – skalbyklė / džiovyklė","chk",""],["Connected – indaplovė / orkaitė","chk",""]],
 "app|Bosch":[["Home Connect – Series 4 / 6 / 8","chk",""],["Home Connect – skalbyklė / džiovyklė","chk",""],["Home Connect – indaplovė","chk",""],["Home Connect – orkaitė","chk",""]],
 "app|Siemens":[["Home Connect – iQ300 / iQ500 / iQ700","chk",""],["Home Connect – indaplovė","chk",""]],
 "app|Miele":[["Miele@home – skalbyklė / džiovyklė","chk",""],["Miele@home – indaplovė / orkaitė","chk",""]],
 "vac|Dreame":[["L10s / L20 Ultra","chk",""],["L30 / L40 Ultra","chk",""],["X40 Ultra / X50 Ultra","chk",""],["Z10 / D serija","chk",""]],
 "vac|Roborock":[["S7 / S7 MaxV / S8","chk",""],["S8 Pro Ultra / S8 MaxV Ultra","chk",""],["Q Revo / Qrevo MaxV / Qrevo Curv","chk",""],["Saros 10 / Saros 10R","chk",""]],
 "vac|iRobot":[["Roomba i3 / i5 / i7","chk",""],["Roomba j7 / j9","chk",""],["Roomba Combo / Max","chk",""]],
 "meter|Shelly":[["Pro 3EM / 3EM / EM","off",""]],
 "meter|ESO":[["ESO išmanusis skaitiklis su P1 / HAN","chk","Priklauso nuo skaitiklio tipo"]],
 "hp|Plum":[["Su ecoNET 300","hacs",""]],
 "hp|ecoMAX":[["Su ecoNET 300","hacs",""]],
 "mow|Dreame":[["A1 / A1 Pro","chk",""],["A2","chk",""]],
 "vac|Xiaomi":[["Mi Robot Vacuum Mop","chk",""],["Xiaomi Robot Vacuum X10 / X20","chk",""],["Xiaomi Robot Vacuum S10 / S20","chk",""]],
 "app|Beko":[["HomeWhiz – skalbyklė / džiovyklė","chk",""],["HomeWhiz – indaplovė","chk",""]],
 "app|Haier":[["hOn – skalbyklė / džiovyklė","chk",""],["hOn – šaldytuvas / orkaitė","chk",""]],
 "app|Hisense":[["ConnectLife – šaldytuvas","chk",""],["ConnectLife – skalbyklė / indaplovė","chk",""]],
 "sens|Aqara":[["W100 (TH-S04D) – temperatūra ir drėgmė","chk",""],["T1 (TH-S02D) – temperatūra ir drėgmė","chk",""],["FP2 – buvimo jutiklis","chk",""],["FP300 – buvimo jutiklis","chk",""],["T1 (WL-S02D) – vandens nuotėkis","chk",""],["T1 (DW-S03D) – durys / langas","chk",""]],
 "sens|Sonoff":[["SNZB-02D – temperatūra ir drėgmė","chk",""],["SNZB-02M – temperatūra, drėgmė ir slėgis","chk",""],["SNZB-05P – vandens nuotėkis","chk",""],["SNZB-04P – durų jutiklis","chk",""],["MS01 – dirvožemio drėgmė","chk",""]],
 "sens|Shelly":[["BLU Door/Window","chk",""],["Flood S Gen4","chk",""],["BLU H&T","chk",""]],
 "light|Sonoff":[["MINIR4 – relė","chk",""],["MINIR4M – Matter relė","chk",""],["ZBMINIR2 – Zigbee relė","chk",""],["DUALR3 – dviejų kanalų relė","chk",""],["4CH PRO R3","chk",""]],
 "light|Shelly":[["Shelly 1 Gen3","chk",""],["Shelly 1 Mini Gen3","chk",""],["Shelly 1L Gen3","chk",""],["Shelly 2PM Gen3 / Gen4","chk",""],["Shelly Dimmer Gen3","chk",""]],
 "light|Aqara":[["T1 Relay SSM-U01","chk",""],["T2 2 kanalų relė","chk",""],["Display Switch V1","chk",""]],
 "ev|Teltonika":[["TeltoCharge / TeltoCharge Lite","chk",""]]
};
const modelsOf=it=>it.cat&&it.brand?MODELS[it.cat+'|'+it.brand]:null;
function catChoices(it){
  const b=it.brand?BRANDS.get(norm(it.brand).trim()):null;
  if(b){if(b.cats.length<2&&it.cat)return null;return CATS.filter(c=>b.cats.includes(c.id))}
  return it.cat?null:CATS;
}
const LOCAL={"hp": {"Midea": "L", "Kaisai": "L", "Samsung": "L", "Alpha Innotec": "L", "Novelan": "L", "Daikin": "C", "Nibe": "C", "Viessmann": "C", "Mitsubishi": "C", "Ariston": "C", "Wolf": "C", "CTC": "C", "Panasonic": "C", "Vaillant": "C", "Bosch": "C", "Buderus": "C", "Thermia": "C", "Remeha": "C", "De Dietrich": "C", "Hitachi": "C", "Saunier Duval": "C", "Protherm": "C", "Junkers": "C", "LG": "M", "Plum": "L", "ecoMAX": "L", "Baxi": "C", "IVT": "C", "Kalvis": "U"}, "ac": {"Midea": "L", "Kaisai": "L", "Comfee": "L", "Gree": "L", "Tosot": "L", "Cooper&Hunter": "L", "Sinclair": "L", "Gree Versati": "L", "Samsung": "C", "LG": "C", "Toshiba": "C", "Fujitsu": "C", "Sensibo": "C", "Panasonic": "C", "Haier": "C", "Hisense": "C", "Electrolux": "C", "AUX": "C", "TCL": "C", "Hitachi": "C", "Bosch": "C", "Toshiba Seiya": "C", "Daikin": "M", "Mitsubishi": "M"}, "rec": {"Flexit": "L", "Duco": "L", "Zehnder": "L", "Vents": "L", "Itho": "L", "Blauberg": "L", "Helios": "L", "Dantherm": "C", "Domekt": "L", "Thessla Green": "L", "Atrea": "L"}, "heat": {"Danfoss": "L", "Shelly": "L", "Aqara": "L", "Sonoff": "L", "Plugwise": "L", "Fibaro": "L", "Eurotronic": "L", "Bosch": "L", "Salus": "L", "Moes": "L", "Heatmiser": "L", "Zemismart": "L", "Netatmo": "C", "Nest": "C", "Honeywell": "C", "Viessmann": "C", "Tuya": "C", "Hive": "C", "Meross": "C", "Ezviz": "C", "Tado": "M", "Ecobee": "M"}, "dhw": {"Shelly": "L", "Midea": "L", "Stiebel Eltron": "L", "Ariston": "C", "Electrolux": "C", "Gorenje Smart": "C", "Thermex": "C"}, "inv": {"Fronius": "L", "SMA": "L", "GoodWe": "L", "Victron": "L", "Enphase": "L", "SolaX": "L", "Kostal": "L", "APsystems": "L", "Zeversolar": "L", "Tesla": "L", "Solarman": "L", "Anker": "C", "EcoFlow": "C", "Zendure": "C", "Sunsynk Cloud": "C", "SolarEdge": "M", "Growatt": "M", "Hoymiles": "M"}, "bat": {"Tesla": "L", "SolaX": "L", "Sonnen": "L", "Victron": "L", "GoodWe": "L", "SMA": "L", "Enphase": "L", "Kostal": "L", "E3DC": "L", "Varta": "L", "Alpha ESS": "C", "Growatt": "C", "EcoFlow": "C", "Anker": "C", "Zendure": "C", "Senec": "C", "SolarEdge": "M"}, "ev": {"go-e": "L", "Tesla": "L", "Keba": "L", "OpenEVSE": "L", "Peblar": "L", "OCPP": "L", "TeltoCharge": "L", "Teltonika": "L", "Fronius": "L", "Wattpilot": "L", "Elli": "L", "Autel": "L", "Garo": "L", "Delta": "L", "EVBox": "L", "Alfen": "L", "Wallbox": "C", "Ohme": "C", "Smappee": "C", "Pulsar": "C", "Zaptec": "C", "Easee": "C", "Myenergi": "C", "Zappi": "C", "Hypervolt": "C", "Charge Amps": "C", "Elinta": "L"}, "sec": {"Satel": "L", "DSC": "L", "Bosch": "L", "Paradox": "L", "Texecom": "L", "Galaxy": "L", "Visonic": "L", "Pyronix": "L", "Honeywell": "C", "Yale": "C", "Verisure": "C", "Ring": "C", "SimpliSafe": "C", "Ajax": "C", "Jablotron": "C", "Risco": "M"}, "cam": {"Reolink": "L", "Ubiquiti": "L", "UniFi": "L", "Tapo": "L", "TP-Link": "L", "Axis": "L", "Foscam": "L", "Amcrest": "L", "Synology": "L", "Doorbird": "L", "Frigate": "L", "Ring": "C", "Blink": "C", "Nest": "C", "Netatmo": "C", "Arlo": "C", "Wyze": "C", "Tuya": "C", "Ezviz": "M", "Eufy": "M", "Yi": "M"}, "light": {"Philips Hue": "L", "Philips": "L", "IKEA": "L", "Tradfri": "L", "Shelly": "L", "Sonoff": "L", "Aqara": "L", "Yeelight": "L", "WiZ": "L", "Nanoleaf": "L", "LIFX": "L", "Innr": "L", "Ledvance": "L", "Osram": "L", "Paulmann": "L", "Gledopto": "L", "Lutron": "L", "KNX": "L", "Fibaro": "L", "Livarno": "L", "Lidl": "L", "Zigbee": "L", "Z-Wave": "L", "Matter": "L", "ESPHome": "L", "Moes": "L", "Zemismart": "L", "Loxone": "L", "Tuya": "C", "Meross": "C", "Smart Life": "C", "Govee": "M", "Xiaomi": "M"}, "air": {"Xiaomi": "L", "Smartmi": "L", "IKEA": "L", "Philips Air": "L", "Philips": "L", "Dyson": "L", "Levoit": "C", "Winix": "C", "Blueair": "C", "Coway": "C", "Electrolux": "C", "Duux": "C", "Meaco": "C"}, "cover": {"Somfy": "L", "Shelly": "L", "Velux": "L", "Aqara": "L", "IKEA": "L", "Motionblinds": "L", "Overkiz": "L", "Sonoff": "L", "Nice": "L", "Moes": "L", "Zemismart": "L", "Rademacher": "L", "Dooya": "L", "Hormann": "C", "Tuya": "C"}, "sens": {"Aqara": "L", "Xiaomi": "L", "Shelly": "L", "Sonoff": "L", "IKEA": "L", "Fibaro": "L", "Govee": "L", "SwitchBot": "L", "Ruuvi": "L", "Eve": "L", "Philips": "L", "Frient": "L", "Develco": "L", "Heiman": "L", "Bosch": "L", "Zooz": "L", "Aeotec": "L", "ThirdReality": "L", "Qingping": "L", "Moes": "L", "Tuya": "C", "Netatmo": "C", "Airthings": "M"}, "meter": {"Shelly": "L", "Sonoff": "L", "Fronius": "L", "Victron": "L", "SMA": "L", "Iammeter": "L", "DSMR": "L", "Sense": "C", "Smappee": "C", "Efergy": "C", "Growatt": "C", "Tibber": "M", "Emporia": "M"}, "app": {"Dyson": "L", "Samsung": "C", "LG": "C", "Bosch": "C", "Siemens": "C", "Neff": "C", "Gaggenau": "C", "Miele": "C", "Whirlpool": "C", "Bauknecht": "C", "Home Connect": "C", "Electrolux": "C", "AEG": "C", "Candy": "C", "Hoover": "C", "Haier": "C", "Hisense": "C", "De'Longhi": "C", "Xiaomi": "M"}, "mow": {"Husqvarna": "C", "Ecovacs": "C", "Gardena": "C", "Segway": "C", "Navimow": "C", "Worx": "C", "Landroid": "C", "Bosch": "C", "Indego": "C", "Dreame": "C", "Mammotion": "M", "Luba": "M"}, "media": {"Samsung": "L", "LG": "L", "Sony": "L", "Sonos": "L", "Bang & Olufsen": "L", "Yamaha": "L", "Denon": "L", "Marantz": "L", "Apple TV": "L", "Chromecast": "L", "Android TV": "L", "Roku": "L", "Panasonic": "L", "Xiaomi": "L", "Onkyo": "L", "Pioneer": "L", "WiiM": "L", "Heos": "L", "Plex": "L", "Kodi": "L", "Philips": "L", "Bose": "L", "Hisense": "L", "Spotify": "C"}, "lock": {"Nuki": "L", "Aqara": "L", "Doorbird": "L", "Danalock": "L", "SwitchBot": "L", "Tedee": "L", "Loqed": "L", "Akuvox": "L", "2N": "L", "Hikvision": "L", "Dahua": "L", "Comelit": "L", "Ring": "C", "August": "C", "Ezviz": "C", "TTLock": "C", "Yale": "M"}, "vac": {"Roborock": "M", "iRobot": "L", "Ecovacs": "C", "Xiaomi": "M", "Samsung": "C", "Shark": "C", "Neato": "C", "Dreame": "C", "Eufy": "C", "Narwal": "C", "Viomi": "C", "Dyson": "L", "Mova": "C"}, "sauna": {"Huum": "C", "Harvia": "C", "Shelly": "L"}, "water": {"Shelly": "L", "Aqara": "L", "Sonoff": "L", "Zigbee": "L", "Moes": "L", "Tuya": "C", "Grohe": "C"}};
const LOCT={L:['lc-l','Gali veikti lokaliai','Yra vietinio valdymo galimybė. Patvirtinsime pagal modelį ir nustatymus'],C:['lc-m','Vietinis veikimas nepatvirtintas','Gali reikėti interneto. Vietinį valdymą patikrinsime pagal modelį'],M:['lc-m','Priklauso nuo modelio','Kai kurie modeliai veikia vietoje, kitiems reikalingas internetas'],U:['lc-m','Reikia patikrinti modelį','Tikslinsime, ar gali veikti be interneto']};
function localOf(it){
  const c=CATS.find(x=>x.id===it.cat);if(!c||!it.brand)return null;
  const ml=modelsOf(it);
  if(ml&&it.model>=0&&ml[it.model]){const m=ml[it.model],t=(m[0]+' '+m[2]).toLowerCase();
    if(/modbus|esphome|heishamon|ocpp|rtsp|onvif|vietin|lan c|luxtronik|cn105|ebus|gx |p1|han|it4wifi|tahoma|zigbee|bluetooth|midea ac lan|gree\+|ewpe/.test(t)||m[1]==='loc')return 'L';
    if(/debes|cloud|onecta|melcloud|myuplink|vicare|vitoconnect|smartthings|thinq|home connect|hon|my aeg|my electrolux|vesync|comfort cloud|myvaillant|vr 92|k30|online|automower connect|protegus|hik-connect|mi home|fusionsolar|shinewifi|miele|gateway|programėl/.test(t))return 'C';}
  const l=(LOCAL[c.id]||{})[it.brand];if(l)return l;
  if(c.brands[it.brand]==='loc')return 'L';
  return 'U';
}
function localOfB(cat,b){return localOf({cat,brand:b,model:null})}
function compatOf(it){const c=CATS.find(x=>x.id===it.cat);if(!c)return 'chk';const ml=modelsOf(it);if(ml&&it.model!=null){if(it.model===-2)return 'chk';if(ml[it.model])return ml[it.model][1]}if(it.brand&&c.brands[it.brand])return c.brands[it.brand];return it.brand?'chk':c.def}

/* ===================== BŪSENA ===================== */
let items=[],uid=0;
const sel={server:OPTS.server.def,remote:'none',voice:[],zb:[],dash:OPTS.dash.def,tab:'none',auto:[...OPTS.auto.def],care:OPTS.care.def};

let pending=[];
function subOf(cat,raw){const c=CATS.find(x=>x.id===cat);if(!c||!c.sub)return null;const t=norm(raw);return c.sub.find(x=>{const w=norm(x).trim().split(/[ /(]/)[0];return w.length>3&&t.includes(w.slice(0,Math.min(6,w.length)))})||null}
const itName=it=>{const c=CATS.find(x=>x.id===it.cat);return it.sub||(c?c.name:'')};
function pushItem(raw,brand,cat,model,sub,sup){
  const m=model==null?null:model;sub=sub||subOf(cat,raw);sup=sup!==false;
  const ex=items.find(i=>i.cat===cat&&(i.brand||'')===(brand||'')&&(i.model==null?null:i.model)===m&&(i.sub||null)===(sub||null)&&(i.sup!==false)===sup);
  if(ex)ex.qty++;else items.push({id:++uid,raw,brand,cat,qty:1,model:m,sub,sup});
}
function addRaw(str){
  str.split(/[,;\n]+/).map(s=>s.trim()).filter(Boolean).forEach(raw=>{
    const r=recognize(raw);
    if(r.cat)pushItem(raw,r.brand,r.cat);
    else pending.push({id:++uid,raw,brand:r.brand,cats:r.multi||CATS.map(c=>c.id)});
  });
  renderPending();renderItems();
}
function renderPending(){
  const box=$('#pending');
  box.innerHTML=pending.map(p=>`<div class="pend" data-pid="${p.id}">
    <div class="pend-h"><b>${p.brand?esc(p.brand):'„'+esc(p.raw)+'“'} – koks tai prietaisas?</b><button class="rm" data-pact="x" aria-label="Atšaukti">${ic('x')}</button></div>
    <div class="pend-o">${p.cats.map(id=>{const c=CATS.find(x=>x.id===id);return `<button type="button" class="pend-b" data-pact="${id}">${ic(c.ic)}${c.name}</button>`}).join('')}</div></div>`).join('');
}
$('#pending').addEventListener('click',e=>{
  const b=e.target.closest('[data-pact]');if(!b)return;
  const el=b.closest('.pend'),p=pending.find(x=>x.id==el.dataset.pid);
  pending=pending.filter(x=>x!==p);
  if(b.dataset.pact!=='x')pushItem(p.raw,p.brand,b.dataset.pact);
  renderPending();renderItems();
});

const SUBP={"Šilumos siurblys oras-vanduo":[null,0,120,70],"Geoterminis šilumos siurblys":[null,0,120,70],"Dujinis katilas":[null,0,90,50],"Granulinis katilas":[null,0,90,50],"Kieto kuro katilas":[null,0,90,50],"Elektrinis katilas":[null,0,70,40],"Sieninis kondicionierius":[null,0,60,35],"Multi-split sistema":[null,0,90,40],"Kanalinis / kasetinis":[null,0,90,50],"Mobilus kondicionierius":[null,0,40,25],"Rekuperatorius":[null,0,110,65],"Ištraukiamasis ventiliatorius":[null,30,25,15],"Kanalinis šildytuvas / aušintuvas":[null,0,80,50],"Radiatoriaus termostatinė galvutė":[null,10,15,8],"Grindinio šildymo valdiklis":[null,60,50,30],"Kambario termostatas":[null,30,25,15],"Elektrinis radiatorius / konvektorius":[null,15,20,10],"Elektrinis boileris":[null,40,30,20],"Šilumos siurblio boileris":[null,0,60,40],"Momentinis vandens šildytuvas":[null,40,30,20],"Hibridinis inverteris":[null,40,110,60],"Tinklinis inverteris":[null,40,80,50],"Mikroinverteriai":[null,0,80,40],"Balkono elektrinė":[null,0,50,30],"Namų baterija":[null,0,90,50],"Nešiojama elektrinė":[null,0,40,25],"Sieninis įkroviklis":[null,250,110,60],"Nešiojamas įkroviklis":[null,0,60,40],"Automobilis (būsena, šildymas, užraktas)":[null,0,60,40],"Signalizacijos centralė":[null,40,100,60],"Sirena":[null,30,20,10],"Gaisro / dūmų jutikliai":[null,15,20,10],"Klaviatūra / pultelis":[null,30,15,10],"Lauko kamera":[null,80,40,20],"Vidaus kamera":[null,15,30,15],"Įrašymo įrenginys (NVR)":[null,60,60,30],"Durų skambutis su kamera":[null,60,45,25],"Lemputė":[null,3,15,6],"LED juosta":[null,30,20,10],"Sieninis jungiklis":[null,20,15,8],"Relė / dimeris po jungikliu":[null,20,15,8],"Lauko apšvietimas":[null,30,20,10],"Kištukinis lizdas":[null,0,10,5],"Drėkintuvas":[null,0,30,15],"Oro valytuvas":[null,0,30,15],"Sausintuvas":[null,0,30,15],"Ventiliatorius":[null,0,25,12],"Žaliuzės":[null,100,40,25],"Roletai":[null,40,30,20],"Užuolaidos":[null,150,50,30],"Markizė":[null,40,30,20],"Kiemo vartai":[null,40,40,25],"Garažo vartai":[null,40,40,25],"Temperatūros ir drėgmės jutiklis":[null,5,20,10],"Judesio / buvimo jutiklis":[null,5,20,10],"Durų ir langų jutiklis":[null,5,20,10],"Vandens nuotėkio jutiklis":[null,5,20,10],"Dūmų jutiklis":[null,10,20,10],"CO₂ / oro kokybės jutiklis":[null,5,25,12],"Šviesos jutiklis":[null,5,20,10],"Vibracijos jutiklis":[null,5,20,10],"Viso namo skaitiklis":[null,60,30,20],"Grandinės / prietaiso matavimas":[null,25,15,8],"ESO skaitiklio nuskaitymas":[null,10,40,20],"Robotas siurblys":[null,0,40,25],"Siurbiantis ir plaunantis robotas":[null,0,40,25],"Langų valymo robotas":[null,0,30,20],"Šaldytuvas":[null,0,35,20],"Indaplovė":[null,0,35,20],"Skalbimo mašina":[null,0,35,20],"Džiovyklė":[null,0,35,20],"Orkaitė":[null,0,35,20],"Kaitlentė":[null,0,35,20],"Gartraukis":[null,0,35,20],"Kavos aparatas":[null,0,30,15],"Mikrobangų krosnelė":[null,0,25,15],"Robotinė vejapjovė":[null,0,50,30],"Laistymo valdiklis":[null,0,70,35],"Televizorius":[null,0,25,15],"Kolonėlė / garso sistema":[null,0,25,15],"Multimedijos grotuvas":[null,0,20,10],"Resyveris":[null,0,25,15],"Išmanioji spyna":[null,80,45,25],"Durų skambutis":[null,60,45,25],"Domofonas":[null,0,60,40],"Elektrinė krosnelė":[null,60,60,35],"Infraraudonųjų spindulių kabina":[null,40,40,25],"Garinė pirtis":[null,0,60,35],"Nuotėkio jutiklis":[null,5,20,10],"Uždarymo vožtuvas":[null,80,30,20],"Vandens skaitiklis":[null,30,30,20],"Automobilio būsena ir baterija":[null,0,65,30],"Salono klimato valdymas":[null,0,60,30],"Įkrovimo planavimas":[null,0,75,35],"Važiavimo statistika":[null,0,50,25],"Laistymo zona / vožtuvas":[null,0,35,20],"Dirvožemio drėgmės jutiklis":[null,0,25,15],"Lietaus jutiklis":[null,0,25,15],"Laistymo siurblio automatika":[null,0,70,35],"Šiltnamio temperatūra ir drėgmė":[null,0,35,20],"Šiltnamio vėdinimas":[null,0,65,30],"Baseino filtravimo siurblys":[null,0,65,30],"Baseino temperatūra":[null,0,35,20],"Baseino šildymo valdymas":[null,0,75,35]};
function parts(it){
  const c=CATS.find(x=>x.id===it.cat),sp=it.sub&&SUBP[it.sub];
  if(!sp)return {inst:0,int:c.p1,int2:c.p2,hasInst:false,sup:false};
  const hasInst=sp[1]>0,sup=hasInst&&it.sup!==false;
  return {inst:sup?sp[1]:0,int:sp[2],int2:sp[3],hasInst,sup};
}

function pricing(){
  const seen={};let gross=0,disc=0,instS=0,intS=0;
  const lines=items.map(it=>{
    const c=CATS.find(x=>x.id===it.cat);if(!c)return {it,c:null};
    const pt=parts(it),k=c.id+'|'+(it.sub||'');
    const first=seen[k]?0:1;seen[k]=1;
    const d=(it.qty-first)*Math.max(0,pt.int-pt.int2);
    const unit=pt.inst+pt.int;
    const original=it.qty*unit;
    instS+=it.qty*pt.inst;intS+=it.qty*pt.int;gross+=original;disc+=d;
    return {it,c,unit,original,disc:d,total:original-d,pt};
  });
  let extra=0,month=0;const ex=[];
  ['remote','dash','tab','care'].forEach(g=>{const o=OPTS[g].items.find(x=>x.id===sel[g]);if(o&&o.p){if(o.m){month+=o.p;ex.push([g==='care'?o.t+' priežiūra':o.t,o.p,1])}else{extra+=o.p;ex.push([o.t,o.p])}}});
  sel.voice.forEach(id=>{const o=OPTS.voice.items.find(x=>x.id===id);if(o&&o.p){extra+=o.p;ex.push(['Balsas: '+o.t,o.p])}});
  sel.zb.forEach(id=>{const o=OPTS.zb.items.find(x=>x.id===id);if(o&&o.p){extra+=o.p;ex.push([o.t,o.p])}});
  sel.auto.forEach(id=>{const o=OPTS.auto.items.find(x=>x.id===id);if(o&&o.p){extra+=o.p;ex.push([o.t,o.p])}});
  extra+=BASE_SETUP_PRICE;ex.unshift(['Bazinis Home Assistant paruošimas',BASE_SETUP_PRICE]);
  return {lines,instS,intS,disc,extra,ex,month,originalTotal:gross+extra,total:gross+extra-disc};
}

/* ===================== ATVAIZDAVIMAS ===================== */
const catOptions=cur=>'<option value="">Pasirinkite kategoriją…</option>'+CATS.map(c=>`<option value="${c.id}" ${c.id===cur?'selected':''}>${c.name}</option>`).join('');
function renderItems(){
  const P=pricing();const box=$('#items');
  if(!items.length){box.innerHTML='<div class="empty">Kol kas įrenginių nėra. Įrašykite įrenginį arba spauskite pavyzdį viršuje.</div>';renderSum(P);return}
  box.innerHTML=P.lines.map(({it,c,unit,disc,total})=>{
    const cm=CMP[compatOf(it)];
    return `<div class="item" data-id="${it.id}">
      <div class="item-top">
        <div class="ico">${deviceSketch(it.sub||"",c?c.id:"sensor")}</div>
        <div class="item-main">
          <div class="item-name">${it.brand?brandLogo(it.brand)+' · ':''}${c?esc(itName(it)):'Neatpažinta kategorija'}</div>${c&&it.sub?`<div class="item-sub">${c.name}</div>`:''}
          <div class="item-sub">Įvesta: „${esc(it.raw)}“</div>
        </div>
        <button class="rm" data-act="rm" aria-label="Pašalinti">${ic('x')}</button>
      </div>
      <div class="item-mid">
        ${c&&!it.brand?`<div class="item-sel" style="margin:0;width:100%"><label class="small">Pasirinkite gamintoją – tada parodysime prijungimo tikimybę</label><select class="field catsel" data-act="brand"><option value="">Gamintojas…</option>${Object.keys(c.brands).sort((a,b)=>a.localeCompare(b)).map(b=>`<option>${esc(b)}</option>`).join('')}<option value="Kitas gamintojas">Kitas gamintojas</option></select></div>`:''}
        ${c&&it.brand?`<span class="badge ${cm[0]}">${cm[1]}</span><span class="small" style="color:var(--tx2)">${cm[2].charAt(0).toUpperCase()+cm[2].slice(1)}</span>`:''}
        ${c&&it.brand?(()=>{const lo=LOCT[localOf(it)];return `<div class="lc-row"><span class="lc ${lo[0]}">${lo[0]==='lc-l'?ic('home'):lo[0]==='lc-c'?ic('cloud'):ic('grid')}${lo[1]}</span><span class="small" style="color:var(--tx2)">${lo[2]}</span></div>`})():''}
      </div>
      ${(()=>{const ml=modelsOf(it);if(!ml)return '';const mv=it.model==null?-1:it.model;const mn=ml[mv];
        return `<div class="item-sel"><label class="small">Modelis / serija</label><select class="field catsel" data-act="model" aria-label="Modelis"><option value="-1" ${mv===-1?'selected':''}>Nežinau modelio</option>${ml.map((x,i)=>`<option value="${i}" ${mv===i?'selected':''}>${esc(x[0])} – ${CMP[x[1]][1].toLowerCase()}</option>`).join('')}<option value="-2" ${mv===-2?'selected':''}>Kitas modelis – vertinama individualiai</option></select></div>`})()}
      ${c?'<div class="note">Dėl vietinio veikimo spręsime tik patikrinę konkretų modelį.</div>':'<div class="note">Pasirinkite kategoriją, kad galėtume įvertinti suderinamumą.</div>'}
      <div class="item-bot">
        <div class="qty"><button data-act="dec" aria-label="Mažiau">−</button><span>${it.qty}</span><button data-act="inc" aria-label="Daugiau">+</button></div>
        ${c?`<div class="price-line">${it.qty} × ${eur(unit)}${disc?` · <del class="price-old">${eur(it.qty*unit)}</del> <span class="disc">nuolaida −${eur(disc)}</span>`:''}<b>${eur(total)}</b></div>`:'<div class="price-line"><b>—</b></div>'}
      </div>
      ${c?(()=>{const pt=parts(it);return `<div class="brk">${pt.sup?`<span>Montavimo darbai ${eur(pt.inst)}</span>`:''}<span>Integravimas ${eur(pt.int)}${it.qty>1?` (papildomi – ${eur(pt.int2)})`:''}</span></div>${pt.hasInst?`<label class="supt"><input type="checkbox" data-act="sup" ${pt.sup?'checked':''}> Įtraukti montavimo darbus (be įrangos kainos)</label>`:''}`})():''}
      <div style="display:none">
      </div>
    </div>`}).join('');
  applyBrandIcons(box);
  renderSum(P);
}
$('#items').addEventListener('click',e=>{
  const b=e.target.closest('[data-act]');if(!b||b.tagName==='SELECT')return;
  const it=items.find(i=>i.id==b.closest('.item').dataset.id);
  if(b.dataset.act==='rm')items=items.filter(i=>i!==it);
  if(b.dataset.act==='inc')it.qty=Math.min(99,it.qty+1);
  if(b.dataset.act==='dec'){it.qty--;if(it.qty<1)items=items.filter(i=>i!==it)}
  renderItems();
});
$('#items').addEventListener('change',e=>{
  const act=e.target.dataset.act;if(act==='sup'){const it=items.find(i=>i.id==e.target.closest('.item').dataset.id);it.sup=e.target.checked;renderItems();return}
  if(act!=='cat'&&act!=='model'&&act!=='brand')return;
  const it=items.find(i=>i.id==e.target.closest('.item').dataset.id);
  if(act==='brand'){it.brand=e.target.value||null;it.model=null}
  else if(act==='cat'){it.cat=e.target.value||null;it.model=null}
  else it.model=+e.target.value===-1?null:+e.target.value;
  renderItems();
});

/* v3.3: visible, legible device illustrations, using model-inspired SVGs rather than manufacturer photos */
const PANEL_ART={"none":"<svg viewBox=\"0 0 240 150\" aria-hidden=\"true\"><rect x=\"40\" y=\"23\" width=\"160\" height=\"106\" rx=\"17\" fill=\"#e3eaf0\" stroke=\"#a1b3c2\" stroke-width=\"4\" stroke-dasharray=\"9 6\"/><circle cx=\"120\" cy=\"75\" r=\"30\" fill=\"#f4f8fa\" stroke=\"#7792a8\" stroke-width=\"5\"/><path d=\"M103 92l34-34\" stroke=\"#516c80\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M75 112h90\" stroke=\"#bbd1d8\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>","nsp":"<svg viewBox=\"0 0 240 150\" aria-hidden=\"true\"><ellipse cx=\"122\" cy=\"137\" rx=\"61\" ry=\"8\" fill=\"#50687c\" opacity=\".12\"/><rect x=\"66\" y=\"5\" width=\"111\" height=\"136\" rx=\"16\" fill=\"#34404b\" opacity=\".16\" transform=\"translate(3 2)\"/><rect x=\"64\" y=\"5\" width=\"111\" height=\"136\" rx=\"15\" fill=\"#e4e8e9\" stroke=\"#75828b\" stroke-width=\"2\"/><rect x=\"72\" y=\"13\" width=\"95\" height=\"120\" rx=\"10\" fill=\"#111d30\"/><rect x=\"79\" y=\"20\" width=\"81\" height=\"106\" rx=\"7\" fill=\"#182d43\"/><text x=\"88\" y=\"34\" fill=\"#bcd7e2\" font-family=\"Arial,sans-serif\" font-size=\"9\">21:08</text><circle cx=\"148\" cy=\"29\" r=\"5\" fill=\"#f3bd63\"/><text x=\"119\" y=\"48\" text-anchor=\"middle\" fill=\"#f2f8f8\" font-family=\"Arial,sans-serif\" font-weight=\"bold\" font-size=\"12\">22.5°</text><rect x=\"85\" y=\"55\" width=\"32\" height=\"25\" rx=\"6\" fill=\"#1b786d\"/><rect x=\"122\" y=\"55\" width=\"32\" height=\"25\" rx=\"6\" fill=\"#345f86\"/><path d=\"M101 61v7m-5-4a7 7 0 1 0 10 0\" stroke=\"#bff5db\" stroke-width=\"1.7\" fill=\"none\"/><path d=\"M138 61l-5 9h10z\" fill=\"#dcecff\"/><rect x=\"85\" y=\"85\" width=\"32\" height=\"26\" rx=\"6\" fill=\"#795a8f\"/><rect x=\"122\" y=\"85\" width=\"32\" height=\"26\" rx=\"6\" fill=\"#8b663c\"/><path d=\"M101 91v13m-5-6h10\" stroke=\"#f5e5ff\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"138\" cy=\"98\" r=\"5\" fill=\"#ffdda3\"/><text x=\"120\" y=\"124\" text-anchor=\"middle\" fill=\"#dfe9eb\" font-family=\"Arial,sans-serif\" font-size=\"6.7\">SONOFF NSPanel Pro</text></svg>","shx2":"<svg viewBox=\"0 0 240 150\" aria-hidden=\"true\"><ellipse cx=\"120\" cy=\"125\" rx=\"99\" ry=\"10\" fill=\"#516b80\" opacity=\".14\"/><rect x=\"17\" y=\"22\" width=\"208\" height=\"108\" rx=\"17\" fill=\"#232b34\" stroke=\"#929da7\" stroke-width=\"5\"/><rect x=\"26\" y=\"30\" width=\"190\" height=\"90\" rx=\"10\" fill=\"#122638\"/><text x=\"41\" y=\"46\" fill=\"#cce6ee\" font-size=\"12\" font-family=\"Arial,sans-serif\">21:08</text><text x=\"178\" y=\"46\" fill=\"#f5e7bb\" font-size=\"11\" font-family=\"Arial,sans-serif\">22.5°</text><rect x=\"38\" y=\"55\" width=\"76\" height=\"52\" rx=\"8\" fill=\"#2b6d72\"/><rect x=\"121\" y=\"55\" width=\"81\" height=\"52\" rx=\"8\" fill=\"#355579\"/><circle cx=\"76\" cy=\"73\" r=\"10\" fill=\"#8df3d6\"/><path d=\"M73 72l4 4 6-9\" fill=\"none\" stroke=\"#1a6456\" stroke-width=\"3\"/><rect x=\"135\" y=\"69\" width=\"49\" height=\"5\" rx=\"2\" fill=\"#9ecfe8\"/><rect x=\"135\" y=\"81\" width=\"30\" height=\"4\" rx=\"2\" fill=\"#709db1\"/><text x=\"75\" y=\"97\" text-anchor=\"middle\" fill=\"#e0f5f1\" font-family=\"Arial,sans-serif\" font-size=\"9\">LIGHTS</text><text x=\"163\" y=\"97\" text-anchor=\"middle\" fill=\"#e1f0f8\" font-family=\"Arial,sans-serif\" font-size=\"9\">ROOM</text></svg>","sam":"<svg viewBox=\"0 0 240 150\" aria-hidden=\"true\"><ellipse cx=\"120\" cy=\"131\" rx=\"105\" ry=\"8\" fill=\"#526d81\" opacity=\".14\"/><rect x=\"11\" y=\"26\" width=\"220\" height=\"111\" rx=\"15\" fill=\"#111821\" stroke=\"#5d7183\" stroke-width=\"3\"/><rect x=\"20\" y=\"34\" width=\"202\" height=\"95\" rx=\"8\" fill=\"#112a42\"/><circle cx=\"16\" cy=\"81\" r=\"2.7\" fill=\"#49687c\"/><path d=\"M20 46h202\" stroke=\"#234761\" stroke-width=\"1\"/><text x=\"30\" y=\"43\" fill=\"#dbeefa\" font-family=\"Arial,sans-serif\" font-size=\"8\">Namai</text><text x=\"196\" y=\"43\" fill=\"#9eddd6\" font-family=\"Arial,sans-serif\" font-size=\"8\">21:08</text><rect x=\"27\" y=\"54\" width=\"83\" height=\"65\" rx=\"7\" fill=\"#1b435a\"/><path d=\"M41 86l26-18 29 18v24H41z\" fill=\"#608b92\"/><path d=\"M37 87l30-23 34 23\" stroke=\"#a9dce8\" stroke-width=\"3\" fill=\"none\"/><rect x=\"54\" y=\"91\" width=\"18\" height=\"19\" fill=\"#d1eaf0\"/><circle cx=\"83\" cy=\"92\" r=\"5\" fill=\"#ffd978\"/><rect x=\"118\" y=\"54\" width=\"43\" height=\"29\" rx=\"6\" fill=\"#155f6d\"/><text x=\"126\" y=\"67\" fill=\"#b4e9e8\" font-family=\"Arial,sans-serif\" font-size=\"8\">☀ PV</text><text x=\"124\" y=\"76\" fill=\"#fff\" font-family=\"Arial,sans-serif\" font-size=\"10\">6.8 kW</text><rect x=\"168\" y=\"54\" width=\"45\" height=\"29\" rx=\"6\" fill=\"#345573\"/><text x=\"174\" y=\"67\" fill=\"#b8d6eb\" font-family=\"Arial,sans-serif\" font-size=\"8\">BAT</text><text x=\"176\" y=\"77\" fill=\"#fff\" font-family=\"Arial,sans-serif\" font-size=\"11\">82%</text><rect x=\"118\" y=\"90\" width=\"95\" height=\"29\" rx=\"6\" fill=\"#1e3b56\"/><path d=\"M127 109l12-10 11 7 12-11 10 8 13-8 17 7\" fill=\"none\" stroke=\"#8bdfca\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><path d=\"M127 113h77\" stroke=\"#426681\" stroke-width=\"1.4\"/></svg>","own":"<svg viewBox=\"0 0 240 150\" aria-hidden=\"true\"><ellipse cx=\"118\" cy=\"130\" rx=\"94\" ry=\"8\" fill=\"#516c84\" opacity=\".13\"/><rect x=\"27\" y=\"25\" width=\"186\" height=\"104\" rx=\"14\" fill=\"#d3dce3\" stroke=\"#7c92a3\" stroke-width=\"4\"/><rect x=\"36\" y=\"34\" width=\"168\" height=\"86\" rx=\"7\" fill=\"#172c44\"/><rect x=\"49\" y=\"47\" width=\"68\" height=\"57\" rx=\"7\" fill=\"#285e73\"/><rect x=\"124\" y=\"47\" width=\"67\" height=\"25\" rx=\"6\" fill=\"#347e72\"/><rect x=\"124\" y=\"79\" width=\"67\" height=\"25\" rx=\"6\" fill=\"#385784\"/><path d=\"M65 80l15-18 15 18v16H65z\" fill=\"#9bc2ce\"/><path d=\"M61 80l19-22 19 22\" stroke=\"#d4e9f0\" stroke-width=\"3\" fill=\"none\"/><circle cx=\"157\" cy=\"59\" r=\"7\" fill=\"#9ce6c7\"/><path d=\"M148 91h20\" stroke=\"#bad9f2\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"120\" cy=\"127\" r=\"2\" fill=\"#9aadb9\"/></svg>"};
OPTS.tab.items.forEach(x=>{if(!x.img&&PANEL_ART[x.id])x.img=PANEL_ART[x.id]});

function renderOpts(){
  Object.entries(OPTS).forEach(([g,o])=>{
    $('#o-'+g).innerHTML=o.items.map(x=>{
      const on=o.type==='radio'?sel[g]===x.id:sel[g].includes(x.id);
      return `${(g==='server'||g==='tab')&&x.grp?`<div class="server-group"><span>${x.grp}</span></div>`:''}<label class="opt ${on?'sel':''} ${x.img?'opt-im':''}"><input type="${o.type==='radio'?'radio':'checkbox'}" name="${g}" value="${x.id}" ${on?'checked':''}>${x.img?`<div class="opt-img">${x.img}</div>`:''}
        <div class="opt-copy"><div class="ot">${x.t}${g==='server'&&x.tag?` <span class="server-chip">${x.tag}</span>`:''}</div><div class="od">${x.d}</div></div>
        <div class="op">${g==='server'?'Paruošimas nuo '+eur(BASE_SETUP_PRICE):x.q?x.q:x.p?(x.m?'nuo '+x.p+' €/mėn.':'nuo '+eur(x.p)):'0 €'}${g==='dash'?`<button type="button" class="pv-btn ${typeof pvOpen!=='undefined'&&pvOpen&&tier===PVT[x.id]?'on':''}" data-pv="${x.id}">${ic('eye')}Pavyzdys</button>`:''}</div></label>`}).join('');
  });
}
document.querySelectorAll('.opts').forEach(el=>el.addEventListener('change',e=>{
  const g=e.target.name;
  if(OPTS[g].type==='radio')sel[g]=e.target.value;
  else sel[g]=[...document.querySelectorAll(`input[name=${g}]:checked`)].map(i=>i.value);
  renderOpts();renderSum(pricing());
  if(g==='dash'&&typeof pvOpen!=='undefined'&&pvOpen)openPreview(PVT[sel.dash]);
}));

function renderSum(P){
  try{accSum(P)}catch(_){}
  try{const n=items.reduce((a,i)=>a+i.qty,0);$('#tbSum').textContent='nuo '+eur(P.total);$('#tbM').textContent=P.month?'+ '+P.month+' €/mėn.':'';$('#tbN').textContent=n?n+' įreng.':''}catch(_){}
  const devLines=P.lines.filter(l=>l.c);
  $('#summary').innerHTML=`<h3>Jūsų sąmata</h3>
   <div class="slines">${devLines.length?devLines.map(l=>`<div class="sline"><span>${l.it.qty} × ${esc(l.it.brand?l.it.brand+' ':'')}${esc(itName(l.it).toLowerCase())}</span><span class="sline-prices">${l.disc?`<del>${eur(l.original)}</del>`:''}<b>nuo ${eur(l.total)}</b></span></div>`).join(''):'<div class="small">Įrenginiai dar nepridėti</div>'}</div>
   <div class="sdiv"></div>
   ${P.instS?`<div class="srow"><span>Montavimo darbai</span><b>${eur(P.instS)}</b></div>`:''}<div class="srow"><span>Integravimo darbai</span><b>${eur(P.intS)}</b></div>
   ${P.disc?`<div class="srow d"><span>Kiekio nuolaida</span><b>−${eur(P.disc)}</b></div>`:''}
   ${P.ex.filter(e=>!e[2]).map(e=>`<div class="srow"><span>${e[0]}</span><b>${e[3]||'nuo '+eur(e[1])}</b></div>`).join('')}
   <div class="sdiv"></div>
    <div class="stotal"><span>Preliminariai nuo</span><span class="stotal-prices">${P.disc?`<del>${eur(P.originalTotal)}</del>`:''}<b>${eur(P.total)}</b></span></div>
   ${P.ex.filter(e=>e[2]).map(e=>`<div class="smonth"><span>${e[0]}</span><b>${e[1]} €/mėn.</b></div>`).join('')}${P.ex.filter(e=>e[2]).length>1?`<div class="smonth" style="font-weight:800"><span>Iš viso kas mėnesį</span><b>${P.month} €/mėn.</b></div>`:''}
   <button class="btn btn-p" id="toOrder">Pateikti užklausą</button>
    <p class="disclaimer"><strong>Įrangos, serverio, prietaisų, laikiklių ir medžiagų kainos neįtrauktos.</strong> Nurodyta tik preliminari darbų sąmata „nuo“. Bazinis paruošimas nuo 149 € skaičiuojamas ir turint savo serverį. Nestandartiniai papildomi darbai, neįkainoti pasirinkimai, atvykimas ir migracija įvertinami individualiai.</p>`;
  $('#toOrder').onclick=()=>{$('#cMsg').value=estimateText(P);location.hash='kontaktai';setTimeout(()=>$('#cName').focus(),50)};
}
function estimateText(P){
  const selectedServer=OPTS.server.items.find(x=>x.id===sel.server);
  const L=['Preliminari darbų sąmata (be įrangos kainų):',`Serveris (įrangos kaina neįtraukta): ${selectedServer?selectedServer.t:'Nepasirinktas'}`];
  P.lines.forEach(l=>{if(l.c){const ml=modelsOf(l.it),mm=l.it.model===-2?'kitas modelis':(ml?.[l.it.model]?.[0]||'');L.push(`• ${l.it.qty} × ${l.it.brand?l.it.brand+' ':''}${itName(l.it)}${mm?' ('+mm+')':''} – nuo ${eur(l.total)} · ${CMP[compatOf(l.it)][1].toLowerCase()}`)}else L.push(`• ${l.it.qty} × „${l.it.raw}“ – kategorija nenurodyta`)});
  if(P.disc)L.push(`Kiekio nuolaida: −${eur(P.disc)} (suma prieš nuolaidą ${eur(P.originalTotal)}, po nuolaidos ${eur(P.total)})`);
  P.ex.forEach(e=>L.push(`• ${e[0]} – ${e[3]?'kaina derinama':e[2]?'nuo '+e[1]+' €/mėn.':'nuo '+eur(e[1])}`));
  L.push(`Tik darbų kaina nuo: ${eur(P.total)}${P.month?` + nuo ${P.month} €/mėn.`:''}`);
  if(sel.zb.length||sel.voice.includes('hav'))L.push('Papildomi Zigbee arba balso kolonėlės paruošimo darbai vertinami individualiai.');
  L.push('Įrangos kainos neskaičiuojamos.','','Papildoma informacija:');
  return L.join('\n');
}

function renderCompat(){
 $('#compat').innerHTML=CATS.map(c=>`<div class="crow"><div><b>${c.name}</b><div class="small">nuo ${eur(c.p1)} · papildomas ${eur(c.p2)}</div></div><div><span class="badge ${CMP[c.def][0]}">${CMP[c.def][1]}</span></div><div class="muted">Dažniau sutinkami Lietuvoje: ${(LT_MAIN_BRANDS[c.id]||[]).map(esc).join(', ')}.<div class="small">Kitus gamintojus rasite kainų skaičiuoklėje. Lokalumas priklauso nuo modelio.</div></div></div>`).join('');
}

/* ===================== PRADŽIA / PASLAUGOS ===================== */
const BEN=[['cpu','Veikia vietoje','Home Assistant veikia jūsų namuose – be prenumeratų ir priklausomybės nuo debesų.'],
 ['euro','Mažesnės sąskaitos','Šildymas, baterija ir EV krovimas prisitaiko prie biržos kainos ir saulės prognozės.'],
 ['grid','Vienas skydelis','Visi gamintojai vienoje vietoje: telefone, kompiuteryje ar planšetėje ant sienos.'],
 ['shield','Aiški kaina','Sąmata iš anksto. Mokate tik už tai, kas tikrai integruota.']];
($('#benefits') || {innerHTML:''}).innerHTML=BEN.map(b=>`<div class="card"><div class="ico">${ic(b[0])}</div><h3>${b[1]}</h3><p>${b[2]}</p></div>`).join('');
const SVC=[
 ['cpu','Home Assistant diegimas','Serverio parinkimas, įrengimas, konfigūravimas ir priežiūra.',['Paruoštas serveris arba esamo konfigūravimas','Atsarginės kopijos ir atnaujinimai','Saugus nuotolinis priėjimas']],
 ['thermo','Šildymas ir klimatas','Šilumos siurbliai, kondicionieriai, rekuperatoriai ir termostatai.',['Daikin, Nibe, Panasonic, Viessmann ir kt.','Zonų valdymas pagal buvimą namie','Šildymas pigiausiomis valandomis']],
 ['shield','Apsauga ir kameros','Signalizacijos, kameros, spynos ir durų skambučiai.',['Trikdis, Paradox, Ajax, Satel','RTSP/ONVIF kamerų vaizdas skydelyje','Pranešimai apie įvykius telefone']],
 ['light','Apšvietimas ir įrenginiai','Šviestuvai, jungikliai, žaliuzės, vartai ir buitinė technika.',['Zigbee, Matter, Wi-Fi, Shelly','Scenarijai: „Išvykstu“, „Naktis“, „Kinas“','Žaliuzės pagal saulę ir temperatūrą']],
 ['sun','Inverteriai ir baterijos','Solis, Huawei, Deye, Growatt, Fronius ir kitų integracija.',['Vietinis Modbus ryšys, duomenys realiu laiku','Baterijos krovimo režimų valdymas','Gamybos ir suvartojimo statistika']],
 ['chart','Saulės prognozė ir optimizavimas','Baterija kraunama ir iškraunama pagal prognozę ir biržos kainą.',['Saulės gamybos prognozė rytdienai','Nord Pool valandinės kainos','Pigios nakties energijos kaupimas']],
 ['car','Elektromobilio įkrovimas','Krovimas iš saulės pertekliaus arba pigiausiomis valandomis.',['Easee, Zaptec, Wallbox, go-e ir kt.','Srovės reguliavimas pagal perteklių','Apsauga nuo įvado perkrovos']],
 ['grid','Individualūs skydeliai','Valdymo skydelis pagal jūsų namus ir įpročius.',['Pritaikyta telefonui ir planšetei','Atskiri vaizdai šeimos nariams','Sieninė planšetė prie įėjimo']],
 ['bolt','Automatizacijos','Scenarijai, kurie veikia patys, be jūsų įsikišimo.',['Buvimo namie atpažinimas','Pranešimai apie nuotėkius ir gedimus','Energijos taupymo taisyklės']]];
$('#services').innerHTML=SVC.map(s=>`<div class="card svc"><div class="ico">${ic(s[0])}</div><h3>${s[1]}</h3><p>${s[2]}</p><ul>${s[3].map(l=>`<li>${ic('check')}<span>${l}</span></li>`).join('')}</ul></div>`).join('');
let openCat=null,justAdded='',selB=null,selQty=1,selSub=null;

const LVLG=[['off','Labai didelė tikimybė','#1f9d63'],['mid','Didelė tikimybė','#2f5aa6'],['chk','Vertinama individualiai','#b7791f']];
/* v3.4: shortlist selected from Lithuanian online retail assortment; NOT an official sales ranking */
const LT_MAIN_BRANDS={"hp":["Daikin","Panasonic","Midea","Mitsubishi","Samsung","Nibe","Bosch","Vaillant","Viessmann","Gree","Buderus"],"ac":["Daikin","Mitsubishi","Midea","Samsung","LG","Gree","Panasonic","Toshiba","Haier","Hisense","Kaisai"],"rec":["Komfovent","Salda","Zehnder","Systemair","Brink","Mitsubishi Electric","Blauberg","Flexit"],"heat":["Salus","Danfoss","Honeywell","Aqara","Sonoff","Shelly","Tuya","Tado","Netatmo"],"dhw":["Ariston","Gorenje","Atlantic","Bosch","Thermor","Electrolux","Drazice"],"inv":["Solis","Huawei","Sungrow","GoodWe","Fronius","Deye","Sofar","Fox ESS","SolarEdge","Growatt","SMA","SolaX","Victron"],"bat":["Dyness","Pylontech","BYD","Huawei","Deye","Sungrow","Fox ESS","GoodWe","SolaX","Victron","EcoFlow"],"ev":["Teltonika","TeltoCharge","Wallbox","ABB","Zaptec","Easee","go-e","Tesla","Huawei","Zappi","Fronius"],"sec":["Ajax","Eldes","Paradox","Trikdis","Hikvision AX","Satel","DSC","Texecom","Bosch","Dahua Airshield"],"cam":["Hikvision","Dahua","Reolink","Tapo","Ezviz","Imou","UniFi","Ubiquiti","Aqara","Xiaomi","Eufy"],"light":["Sonoff","Aqara","Shelly","Philips Hue","IKEA","Xiaomi","Tuya","Govee","Yeelight","Schneider","Legrand","Moes"],"air":["Xiaomi","Philips","Dyson","Levoit","Sharp","Smartmi","Electrolux","Boneco","Stadler Form","Winix"],"cover":["Somfy","Nice","Shelly","Aqara","Velux","IKEA","Sonoff","Tuya","Hormann"],"sens":["Aqara","Sonoff","Xiaomi","Shelly","Tuya","IKEA","Fibaro","Netatmo","Govee"],"meter":["Shelly","Eastron","Carlo Gavazzi","Solis","Huawei","Chint","Sonoff","Elgama","Iskra"],"vac":["Roborock","Dreame","Xiaomi","iRobot","Ecovacs","Samsung","Eufy","Mova"],"app":["Bosch","Samsung","LG","AEG","Electrolux","Siemens","Miele","Whirlpool","Haier","Hisense","Gorenje","Beko"],"mow":["Husqvarna","Gardena","Worx","Segway","Navimow","Mammotion","Dreame","Stihl"],"media":["Samsung","LG","Sony","Philips","TCL","Sonos","Yamaha","JBL"],"lock":["Nuki","Yale","Aqara","Tedee","Hikvision","Dahua","Doorbird","SwitchBot","Ring"],"sauna":["Huum","Harvia","Saunum","Helo","Tylö"],"water":["Aqara","Shelly","Sonoff","Grohe","Tuya","Moes"],"vehicle":["Volkswagen","Škoda","Tesla","Audi","BMW","Hyundai","Kia","Volvo","Mercedes-Benz","Cupra","Renault","Toyota"],"irrigation":["Hunter","Rain Bird","Gardena","Orbit","Rachio","OpenSprinkler","Shelly","Tuya"],"garden":["Shelly","Sonoff","Aqara","Gardena","Hayward","Pentair","Tuya"]};
const LT_POPULAR_CATEGORIES={"climate":["hp","ac","rec","heat","air"],"energy":["inv","bat","meter"],"security":["sec","cam","lock","water"],"light":["light","sens","cover"],"home":["vac","app","media"],"transport":["vehicle","ev"],"garden":["irrigation","mow","garden"]};
/* v4.15: visi gamintojų logotipai iš data/brand-logo-map.json, su atsarginiu simboliu. */
const BRAND_ICON_SOURCES=Object.create(null);
function brandLogo(name){
  if(!name)return '';
  const safeName=String(name).trim();
  const words=safeName.split(/[\s\-\/]+/).filter(Boolean);
  const initials=(words.length>1?words.slice(0,2).map(w=>w[0]).join(''):words[0].slice(0,2)).toLocaleUpperCase('lt-LT');
  const hues=[193,217,251,166,279,32,335];
  const hue=hues[Array.from(safeName).reduce((v,c)=>v+c.charCodeAt(0),0)%hues.length];
  return '<span class="brandmark"><span class="pn-brand-art" data-brand="'+esc(safeName)+'" style="--pn-brand-hue:'+hue+'"><span class="brand-initial" aria-hidden="true">'+esc(initials)+'</span></span><span class="brand-name">'+esc(safeName)+'</span></span>';
}
function safeBrandIconUrl(info){
  if(!info||typeof info.url!=='string')return '';
  // Vietiniai originalių logotipų failai: saugus, aiškiai apribotas kelias.
  if(info.type==='local_asset'&&/^assets\/brands\/[a-z0-9._-]+\.(?:svg|png|webp)$/.test(info.url))return info.url;
  try{
    const u=new URL(info.url);
    if(u.protocol!=='https:')return '';
    if(info.type==='simple_icons'&&u.hostname==='cdn.jsdelivr.net'&&/^\/npm\/simple-icons@v16\/icons\/[a-z0-9_-]+\.svg$/.test(u.pathname))return u.href;
    if((info.type==='verified_official_domain_favicon'||info.type==='suggested_domain_favicon')&&u.hostname==='www.google.com'&&u.pathname==='/s2/favicons'&&u.searchParams.has('domain'))return u.href;
  }catch(_){ }
  return '';
}
let brandMapRequest;
function applyBrandIcons(root=document){
  if (!root.querySelector('.pn-brand-art[data-brand]')) return;
  if (!brandMapRequest) {
    brandMapRequest = loadBrandIconMap();
    return;
  }
  root.querySelectorAll('.pn-brand-art[data-brand]').forEach(art=>{
    const src=BRAND_ICON_SOURCES[art.dataset.brand];
    if(!src||art.dataset.brandIconSrc===src)return;
    art.dataset.brandIconSrc=src;
    const fallback=art.querySelector('.brand-initial');
    if(!fallback)return;
    const img=document.createElement('img');
    img.loading='lazy';img.decoding='async';img.referrerPolicy='no-referrer';img.alt='';
    img.addEventListener('load',()=>{if(img.isConnected&&img.naturalWidth>0){fallback.hidden=true;art.classList.add('has-logo')}});
    img.addEventListener('error',()=>{img.remove();fallback.hidden=false;art.classList.remove('has-logo')});
    img.src=src;
    art.appendChild(img);
  });
}
function loadBrandIconMap(){
  return fetch('data/brand-logo-map.json?v=4.17')
    .then(response=>{if(!response.ok)throw Error('HTTP '+response.status);return response.json()})
    .then(data=>{
      if(!data||!data.brands||typeof data.brands!=='object')throw Error('Netinkamas logotipų formatas');
      for(const [name,info] of Object.entries(data.brands)){
        const src=safeBrandIconUrl(info);
        if(src)BRAND_ICON_SOURCES[name]=src;
      }
      applyBrandIcons(document);
    })
    .catch(err=>{
      brandMapRequest = null;
      console.warn('Gamintojų logotipai nepasiekiami – naudojami inicialai.',err);
    });
}
const DEVICE_GROUPS=[{"id":"climate","name":"Šildymas, vėdinimas ir klimatas","emoji":"🌡️","desc":"Šildymas, vėdinimas, kondicionavimas ir oro kokybė","cats":["hp","heat","dhw","ac","rec","air","sauna"]},{"id":"energy","name":"Saulės energija ir elektra","emoji":"☀️","desc":"Inverteriai, baterijos ir elektros apskaita","cats":["inv","bat","meter"]},{"id":"security","name":"Apsauga ir saugumas","emoji":"🛡️","desc":"Signalizacijos, kameros, spynos ir nuotėkiai","cats":["sec","cam","lock","water"]},{"id":"light","name":"Apšvietimas ir valdymas","emoji":"💡","desc":"Apšvietimas, užuolaidos, vartai ir jutikliai","cats":["light","cover","sens"]},{"id":"transport","name":"Automobiliai ir įkrovimas","emoji":"🚗","desc":"Automobilių duomenys ir elektromobilių įkrovimas","cats":["vehicle","ev"]},{"id":"garden","name":"Sodas ir laistymas","emoji":"🌱","desc":"Laistymas, šiltnamiai, baseinai ir vejapjovės","cats":["irrigation","garden","mow"]},{"id":"home","name":"Buitis ir laisvalaikis","emoji":"🏠","desc":"Buitiniai prietaisai, robotai, TV ir garsas","cats":["app","vac","media"]}];
let openDeviceGroup=null,deviceCategoryQuery='',expandedOtherBrands=new Set(),expandedOtherCategories=new Set();
function brandChoices(c,names,compact){
 return names.map(b=>`<button type="button" class="brand-choice ${compact?'brand-choice-alt':''}" data-b="${esc(b)}">${brandLogo(b)}</button>`).join('');
}

/* v3.8: custom inline device illustrations, no external image dependencies */
const DEVICE_SKETCHES={

 co2:'<rect x="24" y="17" width="72" height="93" rx="12" fill="#f5fbfd" stroke="#456c84" stroke-width="5"/><rect x="32" y="28" width="56" height="58" rx="5" fill="#bddce9"/><text x="60" y="54" text-anchor="middle" font-size="11" fill="#2d6584" font-weight="800">CO₂</text><text x="60" y="73" text-anchor="middle" font-size="21" fill="#2e536b" font-weight="900">620</text><text x="60" y="83" text-anchor="middle" font-size="8" fill="#2d6584">ppm</text><circle cx="60" cy="98" r="4" fill="#2ca59d"/>',
 router:'<rect x="17" y="61" width="86" height="39" rx="8" fill="#25384b" stroke="#55758a" stroke-width="4"/><path d="M31 62l-6-43M48 60V12M73 60V12M89 62l7-43" fill="none" stroke="#39576e" stroke-width="7" stroke-linecap="round"/><circle cx="33" cy="82" r="3" fill="#51d2ac"/><circle cx="46" cy="82" r="3" fill="#51d2ac"/><circle cx="59" cy="82" r="3" fill="#8ca9b3"/><path d="M26 103v7M93 103v7" stroke="#476b7e" stroke-width="5"/>',
 zigbee:'<rect x="25" y="54" width="72" height="27" rx="7" fill="#273d54" stroke="#4b7b93" stroke-width="4"/><rect x="12" y="59" width="15" height="16" rx="3" fill="#c6d7e5"/><path d="M91 53L103 15" stroke="#3b5970" stroke-width="7" stroke-linecap="round"/><circle cx="65" cy="67" r="4" fill="#36cdb9"/><path d="M46 64h14M46 72h10" stroke="#7dabb9" stroke-width="3" stroke-linecap="round"/>',
 blind:'<rect x="18" y="17" width="84" height="94" rx="6" fill="#f1f8fa" stroke="#547b8d" stroke-width="5"/><path d="M29 35h62M29 48h62M29 61h62M29 74h62M29 87h62" stroke="#99bcc8" stroke-width="7"/><path d="M87 22v77" stroke="#3c6e85" stroke-width="4"/><circle cx="87" cy="103" r="5" fill="#34a6a0"/><path d="M30 27h62" stroke="#316487" stroke-width="7"/>',
 relay:'<rect x="25" y="26" width="72" height="69" rx="10" fill="#f5f9fc" stroke="#517a8b" stroke-width="5"/><rect x="32" y="34" width="58" height="34" rx="6" fill="#a5d9df"/><path d="M41 55h40M42 45h17" stroke="#4e8397" stroke-width="4" stroke-linecap="round"/><rect x="32" y="79" width="58" height="13" rx="3" fill="#57959f"/><circle cx="41" cy="85" r="3" fill="#1f4d63"/><circle cx="54" cy="85" r="3" fill="#1f4d63"/><circle cx="67" cy="85" r="3" fill="#1f4d63"/><circle cx="80" cy="85" r="3" fill="#1f4d63"/>',
 leak:'<rect x="25" y="30" width="69" height="57" rx="15" fill="#f1fafa" stroke="#46758b" stroke-width="5"/><path d="M60 43q-19 23-12 34 13 19 24 0 8-12-12-34Z" fill="#8cd6e6" stroke="#427d91" stroke-width="3"/><path d="M46 92v12M74 92v12" stroke="#4d8da2" stroke-width="5" stroke-linecap="round"/><path d="M38 110h45" stroke="#68b9c9" stroke-width="5" stroke-linecap="round"/>',
 smoke:'<ellipse cx="60" cy="60" rx="44" ry="26" fill="#f4fafb" stroke="#5b8495" stroke-width="5"/><ellipse cx="60" cy="52" rx="30" ry="16" fill="#e2eef1" stroke="#9ebdc8" stroke-width="4"/><circle cx="60" cy="52" r="6" fill="#3fa59f"/><path d="M29 73q31 13 62 0" stroke="#b3d1d9" fill="none" stroke-width="4"/>',
 presence:'<circle cx="60" cy="62" r="34" fill="#eef8fa" stroke="#537c8e" stroke-width="5"/><circle cx="60" cy="62" r="12" fill="#99d9da"/><path d="M34 46q26-31 52 0M28 37q32-46 64 0M34 79q26 31 52 0" fill="none" stroke="#5eb5c3" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="62" r="5" fill="#287c88"/>',
 fridge:'<rect x="33" y="15" width="54" height="94" rx="8" fill="#f5fbfc" stroke="#406c84" stroke-width="5"/><path d="M34 57h52" stroke="#729db2" stroke-width="4"/><path d="M43 36v15M43 66v20" stroke="#406c84" stroke-width="5" stroke-linecap="round"/><rect x="42" y="18" width="35" height="7" rx="3" fill="#c5e4ed"/>',
 washer:'<rect x="25" y="18" width="70" height="91" rx="9" fill="#eff8fa" stroke="#436e88" stroke-width="5"/><path d="M27 38h65" stroke="#5b879b" stroke-width="4"/><circle cx="60" cy="76" r="25" fill="#afdae9" stroke="#477991" stroke-width="5"/><path d="M44 77q16-15 32 0t-32 8" fill="none" stroke="#e5faff" stroke-width="4"/><circle cx="41" cy="29" r="4" fill="#1d9b91"/>',
 dishwasher:'<rect x="27" y="17" width="66" height="93" rx="9" fill="#eff7f8" stroke="#436e88" stroke-width="5"/><path d="M28 41h64" stroke="#436e88" stroke-width="4"/><path d="M41 62h38M41 75h38M43 88h34" stroke="#77b7c6" stroke-width="4" stroke-linecap="round"/><circle cx="41" cy="30" r="4" fill="#10a99b"/><path d="M61 51q-11 11 0 20" fill="none" stroke="#81c8d6" stroke-width="3"/>',
 oven:'<rect x="25" y="20" width="70" height="88" rx="7" fill="#eaf4f7" stroke="#416b85" stroke-width="5"/><rect x="36" y="43" width="48" height="51" rx="3" fill="#426982"/><path d="M43 61h34M43 76h34" stroke="#8bc2d2" stroke-width="4"/><circle cx="40" cy="32" r="4" fill="#1c9f92"/><circle cx="54" cy="32" r="4" fill="#a4bfc7"/>',
 charger:'<rect x="34" y="17" width="51" height="77" rx="11" fill="#e7f6f5" stroke="#356b81" stroke-width="5"/><rect x="46" y="28" width="27" height="15" rx="3" fill="#1b7f8e"/><path d="M62 48L52 63h10l-4 15 14-20H62l6-10" fill="#31cdb1" stroke="#208f8b" stroke-width="1.8"/><path d="M85 63q19 0 15 23t-18 8" stroke="#31576d" fill="none" stroke-width="6" stroke-linecap="round"/><path d="M81 90v12" stroke="#30556a" stroke-width="7" stroke-linecap="round"/>',
 car:'<path d="M15 79l13-22q5-11 18-11h29q13 0 20 13l11 20v21H14V80Z" fill="#d1eaf2" stroke="#406f85" stroke-width="5" stroke-linejoin="round"/><path d="M36 59h49l9 17H26Z" fill="#6c9eb4"/><circle cx="34" cy="100" r="10" fill="#2c4459" stroke="#7fa9ba" stroke-width="3"/><circle cx="87" cy="100" r="10" fill="#2c4459" stroke="#7fa9ba" stroke-width="3"/><path d="M20 79h14M89 79h13" stroke="#fff0ba" stroke-width="5"/>',
 solar:'<path d="M16 56L61 26l44 30" stroke="#49697a" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M29 60h63v47H29z" fill="#d7e9e6" stroke="#456b7f" stroke-width="4"/><path d="M29 57l33-22 31 22Z" fill="#315875"/><path d="M35 51l23-14 26 14M46 44l13 13M66 40l-3 16" stroke="#83c7db" stroke-width="2.7"/><rect x="53" y="78" width="16" height="29" fill="#6d9ca9"/>',
 battery:'<rect x="34" y="21" width="52" height="85" rx="8" fill="#e8f5f1" stroke="#406f82" stroke-width="5"/><rect x="49" y="13" width="22" height="9" rx="3" fill="#587c8c"/><rect x="42" y="52" width="36" height="45" rx="4" fill="#a3e8c2"/><path d="M62 36l-9 21h10l-6 22 15-26H61l8-17" fill="#188e7b"/><rect x="43" y="25" width="33" height="6" rx="2" fill="#b4d7d4"/>',
 irrigation:'<path d="M59 100V77M32 102h55" stroke="#4d7389" stroke-width="7" stroke-linecap="round"/><path d="M44 77h30v-9H44z" fill="#5c869a"/><path d="M57 66q-29-22-39-42M60 65q1-34 0-45M63 66q29-22 39-42" stroke="#66b9d4" stroke-width="4" stroke-linecap="round" fill="none" stroke-dasharray="5 6"/><circle cx="19" cy="26" r="5" fill="#63c5da"/><circle cx="60" cy="21" r="5" fill="#63c5da"/><circle cx="100" cy="26" r="5" fill="#63c5da"/><path d="M12 106q17-14 33 0t33 0 29 0" stroke="#4ea47b" fill="none" stroke-width="4"/>',
 mower:'<path d="M21 68q3-17 24-20l33 1q17 2 21 20l-6 24H27z" fill="#dcece9" stroke="#426f83" stroke-width="5"/><rect x="45" y="55" width="29" height="20" rx="5" fill="#347f81"/><path d="M49 62h21M49 67h21" stroke="#b1f2d4" stroke-width="2"/><circle cx="33" cy="98" r="9" fill="#304c5f"/><circle cx="87" cy="98" r="9" fill="#304c5f"/><path d="M36 45q23-16 47 1" stroke="#6bb69c" stroke-width="4" fill="none"/>',
 greenhouse:'<path d="M18 57l40-34 43 34v49H18z" fill="#d8f1e8" stroke="#4b7889" stroke-width="5" stroke-linejoin="round"/><path d="M58 24v82M20 57h80M39 40v66M79 40v66" stroke="#73a9b5" stroke-width="3" fill="none"/><path d="M35 99q-7-17 8-26M58 104q-13-20 6-35M78 100q-4-14 9-26" stroke="#3a9f6e" stroke-width="5" fill="none"/><circle cx="46" cy="30" r="7" fill="#ffdc82"/>',
 camera:'<path d="M22 41h67q9 0 9 9v30q0 9-9 9H21q-8 0-8-9V50q0-9 9-9z" fill="#e3f3f4" stroke="#476f86" stroke-width="5"/><circle cx="57" cy="65" r="21" fill="#6aa9c5" stroke="#2f6783" stroke-width="5"/><circle cx="57" cy="65" r="9" fill="#183c62"/><path d="M92 45l15-13v64L92 84" fill="#b9d9e3" stroke="#476f86" stroke-width="4"/>',
 humidifier:'<rect x="37" y="38" width="47" height="71" rx="15" fill="#eff8f9" stroke="#4a7386" stroke-width="5"/><path d="M47 49h26" stroke="#b4d7df" stroke-width="4"/><path d="M46 84q14 12 29 0" fill="none" stroke="#64c2d5" stroke-width="4"/><path d="M52 27q-7-11 3-19M69 26q-8-12 2-19" stroke="#91c6dc" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="60" cy="99" r="4" fill="#1fa58b"/>',
 vacuum:'<circle cx="60" cy="65" r="40" fill="#e2edf0" stroke="#486f84" stroke-width="5"/><circle cx="60" cy="65" r="18" fill="#b4d8df" stroke="#5e99ab" stroke-width="4"/><circle cx="60" cy="65" r="5" fill="#206f83"/><path d="M37 90q23 15 46 0" stroke="#439882" stroke-width="4" fill="none"/><circle cx="60" cy="26" r="5" fill="#4ea58e"/>',
 light:'<path d="M60 19c-25 0-34 26-19 44l7 10h24l7-10c15-18 6-44-19-44z" fill="#ffe8a8" stroke="#c59e49" stroke-width="5"/><path d="M49 79h22M50 89h20M54 98h12" stroke="#597386" stroke-width="6" stroke-linecap="round"/><path d="M60 9v-5M28 21l-7-5M92 21l7-5" stroke="#e9b951" stroke-width="4" stroke-linecap="round"/>',
 heat:'<rect x="20" y="30" width="80" height="74" rx="9" fill="#edf5f7" stroke="#476f82" stroke-width="5"/><circle cx="60" cy="69" r="26" fill="#bddbe6" stroke="#729db1" stroke-width="3"/><path d="M60 46v46M37 69h46M44 53l33 32M77 53L44 85" stroke="#6597a8" stroke-width="3"/><circle cx="89" cy="42" r="4" fill="#1bb69e"/>',
 door:'<path d="M31 15h61v91H31z" fill="#e8f5f1" stroke="#4d7386" stroke-width="5"/><path d="M45 29h32v76H45z" fill="#afcfd6" stroke="#5f98ab" stroke-width="3"/><circle cx="73" cy="69" r="4" fill="#4c7c89"/><path d="M20 109h81" stroke="#4f7885" stroke-width="5"/>',
 tv:'<rect x="13" y="21" width="95" height="69" rx="7" fill="#23374b" stroke="#4d7182" stroke-width="5"/><path d="M25 74l21-23 18 12 16-26 19 37" fill="none" stroke="#72c5c6" stroke-width="4"/><path d="M59 90v15M42 107h35" stroke="#536d7d" stroke-width="5" stroke-linecap="round"/>',
 sensor:'<rect x="30" y="25" width="60" height="76" rx="15" fill="#ecf7f5" stroke="#4b7688" stroke-width="5"/><circle cx="60" cy="60" r="17" fill="#c3e9e4" stroke="#599b9f" stroke-width="4"/><path d="M46 60h28M60 46v28" stroke="#389f96" stroke-width="3"/><circle cx="60" cy="89" r="4" fill="#5ba5ad"/>'
};

/* v4.14 – fotorealistiški prietaisų atvaizdai; vienas suspaustas WebP failas visoms kategorijoms. */
const DEVICE_PHOTOS={"hp":[0,0],"heat":[1,0],"dhw":[2,0],"ac":[3,0],"rec":[4,0],"air":[0,1],"sauna":[1,1],"inv":[2,1],"bat":[3,1],"meter":[4,1],"sec":[0,2],"cam":[1,2],"lock":[2,2],"water":[3,2],"light":[4,2],"cover":[0,3],"sens":[1,3],"vehicle":[2,3],"ev":[3,3],"irrigation":[4,3],"garden":[0,4],"mow":[1,4],"app":[2,4],"vac":[3,4],"media":[4,4]};
function realisticDevicePhoto(cat){
  const p=DEVICE_PHOTOS[cat];
  return p?'<span class="pn-device-photo" style="background-position:'+p[0]*25+'% '+p[1]*25+'%" aria-hidden="true"></span>':'';
}
function deviceSketch(kind,cat){
  if(DEVICE_PHOTOS[cat])return realisticDevicePhoto(cat);
 const t=String(kind||'').toLocaleLowerCase('lt-LT');
 let key=cat;
 if(/šaldytuv|saldytuv|fridge/.test(t))key='fridge';
 else if(/skalbykl|skalbimo/.test(t))key='washer';
 else if(/džiovykl|dziovykl/.test(t))key='washer';
 else if(/indaplov/.test(t))key='dishwasher';
 else if(/orkait|kaitlent|mikrobang/.test(t))key='oven';
 else if(/siurblys robot|robota[s]? siurb|siurbiantis/.test(t))key='vacuum';
 else if(/vejos|vejapjov|mower/.test(t))key='mower';
 else if(/automobilio|krovimo stotel|įkrovikl|ikrovikl/.test(t))key=cat==='vehicle'?'car':'charger';
 else if(/laistym|drėgmės jutiklis|dregmes jutiklis/.test(t)&&cat==='irrigation')key='irrigation';
 const remap={app:'fridge',ev:'charger',vehicle:'car',hp:'heat',ac:'heat',rec:'heat',heat:'heat',dhw:'heat',inv:'solar',bat:'battery',meter:'battery',cam:'camera',sec:'door',light:'light',sens:'sensor',water:'sensor',mow:'mower',irrigation:'irrigation',garden:'greenhouse',air:'humidifier',vac:'vacuum',media:'tv',cover:'door',lock:'door',sauna:'heat'};
 const src=DEVICE_SKETCHES[key]||DEVICE_SKETCHES[remap[key]]||DEVICE_SKETCHES.sensor;
 return '<svg class="pn-device-svg" viewBox="0 0 120 120" aria-hidden="true" focusable="false"><rect x="2" y="2" width="116" height="116" rx="18" fill="#e2f1f1"/>'+src+'</svg>';
}

function renderCgrid(){
 let html='',needle=deviceCategoryQuery.trim().toLocaleLowerCase('lt-LT');
 DEVICE_GROUPS.forEach(gr=>{
   const all=gr.cats.map(id=>CATS.find(c=>c.id===id)).filter(Boolean);
   const list=all.filter(c=>!needle||[c.name,...(c.sub||[]),...(c.kw||[]),...Object.keys(c.brands||{})].join(' ').toLocaleLowerCase('lt-LT').includes(needle));
   if(!list.length)return;
   const expanded=!!needle||openDeviceGroup===gr.id;
   html+=`<div class="device-family ${expanded?'expanded':''}">
    <button type="button" class="device-family-toggle" data-device-group="${gr.id}" aria-expanded="${expanded?'true':'false'}"><span class="device-family-icon">${deviceSketch("",gr.cats[0])}</span><span class="device-family-label"><strong>${gr.name}</strong><small>${gr.desc}</small></span><span class="device-family-count">${list.length} kategor.</span><span class="device-family-arrow" aria-hidden="true">${expanded?'⌃':'⌄'}</span></button>`;
   if(expanded){
    html+='<div class="device-family-grid">';
    const popular=list.filter(c=>LT_POPULAR_CATEGORIES[gr.id].includes(c.id)),otherCats=list.filter(c=>!LT_POPULAR_CATEGORIES[gr.id].includes(c.id));
    const showOtherCats=true;
    [...popular,...(showOtherCats?otherCats:[])].forEach(c=>{
      html+=`<button type="button" class="cbtn ${openCat===c.id?'on':''}" data-cat="${c.id}">${deviceSketch("",c.id)}<span>${c.name}</span></button>`;
      if(openCat!==c.id)return;
      const known=Object.keys(c.brands),preferred=(LT_MAIN_BRANDS[c.id]||[]).filter(b=>known.includes(b));
      const other=known.filter(b=>!preferred.includes(b)).sort((a,b)=>a.localeCompare(b,'lt'));
      const showOther=expandedOtherBrands.has(c.id)||!!(needle&&other.some(b=>b.toLocaleLowerCase('lt-LT').includes(needle)));
      html+=`<div class="cpan device-brand-panel">
        <div class="cpan-h"><b>${c.name}</b><small>Pasirinkite turimą gamintoją</small></div>
        ${c.sub&&c.sub.length?`<div class="cstep">Prietaiso tipas</div><div class="cg-b">${c.sub.map(x=>`<button type="button" class="bchip sub ${selSub===x?'sel':''}" data-sub="${esc(x)}">${selSub===x?'✓ ':''}${esc(x)}</button>`).join('')}</div>`:''}
        <div class="cstep">Dažniau sutinkami Lietuvoje</div><div class="brand-main-grid">${brandChoices(c,preferred,false)}</div>
        ${other.length?`<button type="button" class="more-brands-button" data-more-brands="${c.id}" aria-expanded="${showOther?'true':'false'}">${showOther?'− Suskleisti':'＋ Kiti gamintojai'} <small>(${other.length})</small></button>`:''}
        ${showOther?`<div class="brand-other-grid">${brandChoices(c,other,true)}</div>`:''}
        <button type="button" class="brand-manual" data-b="__other">Nerandu gamintojo – įrašyti kitą</button>
        <p class="device-brand-note">Ar prietaisas veiks lokaliai, patikrinsime pagal konkretų modelį.</p>
       </div>`;
    });
    if(otherCats.length&&!needle)html+=`<button type="button" class="more-cats-button" data-more-cats="${gr.id}" aria-expanded="${showOtherCats?'true':'false'}">${showOtherCats?'− Suskleisti':'＋ Kitos prietaisų kategorijos'} (${otherCats.length})</button>`;
    html+='</div>';
   }
   html+='</div>';
 });
 if(!html)html='<div class="device-empty">Neradome tokios kategorijos. Prietaisą galite įrašyti aukščiau.</div>';
 $('#cgrid').innerHTML=html;
 applyBrandIcons($('#cgrid'));
}
document.querySelectorAll('[data-dev-quick]').forEach(button=>button.addEventListener('click',()=>{
 const id=button.dataset.devQuick;
 const group=DEVICE_GROUPS.find(g=>g.cats.includes(id));
 if(!group)return;
 deviceCategoryQuery='';$('#deviceCategorySearch').value='';
 openDeviceGroup=group.id;
 expandedOtherCategories.add(group.id);
 openCat=id;selSub=null;selB=null;
 renderCgrid();
 $('#cgrid').scrollIntoView({behavior:'smooth',block:'start'});
}));

$('#cgrid').addEventListener('click',e=>{
  const moreBrands=e.target.closest('[data-more-brands]');
  if(moreBrands){const k=moreBrands.dataset.moreBrands;expandedOtherBrands.has(k)?expandedOtherBrands.delete(k):expandedOtherBrands.add(k);renderCgrid();return}
  const moreCats=e.target.closest('[data-more-cats]');
  if(moreCats){const k=moreCats.dataset.moreCats;expandedOtherCategories.has(k)?expandedOtherCategories.delete(k):expandedOtherCategories.add(k);renderCgrid();return}
  const groupButton=e.target.closest('[data-device-group]');
  if(groupButton){
    const gid=groupButton.dataset.deviceGroup;
    openDeviceGroup=openDeviceGroup===gid?null:gid;
    openCat=null;selSub=null;selB=null;renderCgrid();return;
  }
  const sb=e.target.closest('[data-sub]');if(sb){selSub=selSub===sb.dataset.sub?null:sb.dataset.sub;renderCgrid();return}
  const cb=e.target.closest('[data-cat]');if(cb){openCat=openCat===cb.dataset.cat?null:cb.dataset.cat;justAdded='';selB=null;selSub=null;renderCgrid();return}
  const q=e.target.closest('[data-q]');if(q){selQty=Math.max(1,Math.min(99,selQty+(q.dataset.q==='+'?1:-1)));renderCgrid();return}
  const c=CATS.find(x=>x.id===openCat);
  if(e.target.closest('[data-addb]')&&selB){for(let i=0;i<selQty;i++)pushItem(selB+' '+c.name.toLowerCase(),selB,c.id);justAdded=c.id+'|'+selB;selB=null;selQty=1;renderCgrid();renderItems();return}
  const bb=e.target.closest('[data-b]');if(!bb)return;
  const b=bb.dataset.b==='__other'?'Kitas gamintojas':bb.dataset.b;
  openBM(c.id,b);
});
renderCgrid();
$('#deviceCategorySearch').addEventListener('input',e=>{
  deviceCategoryQuery=e.target.value||'';
  openCat=null;selB=null;selSub=null;
  renderCgrid();
});

/* ===================== PRIDĖJIMO LANGAS ===================== */
let BM=null;
document.body.insertAdjacentHTML('beforeend','<div class="mdl" id="bmodal" role="dialog" aria-modal="true"><div class="mdl-box" id="bmBox"></div></div>');
function openBM(cat,brand){BM={cat,brand,sup:true,model:null,qty:1,sub:selSub||(CATS.find(x=>x.id===cat).sub||[])[0]||null};renderBM();$('#bmodal').classList.add('on');document.body.classList.add('noscroll')}
function closeBM(){$('#bmodal').classList.remove('on');document.body.classList.remove('noscroll');BM=null}
function renderBM(){
  const c=CATS.find(x=>x.id===BM.cat),it={cat:BM.cat,brand:BM.brand,model:BM.model};
  const cm=CMP[compatOf(it)],lo=LOCT[localOf(it)],ml=modelsOf(it),mn=ml&&BM.model>=0?ml[BM.model]:null;
  $('#bmBox').innerHTML=`<button class="mdl-x" data-bm="x" aria-label="Uždaryti">${ic('x')}</button>
   <div class="bm-h"><div class="bm-ico">${deviceSketch(BM.sub||"",c.id)}</div><div><small>${esc(BM.sub||c.name)}</small><h3>${brandLogo(BM.brand)}</h3></div></div>
   ${c.sub&&c.sub.length?`<label class="bm-l" style="margin-top:4px">Prietaisas</label><select class="field" data-bm="sub">${c.sub.map(x=>`<option ${BM.sub===x?'selected':''}>${esc(x)}</option>`).join('')}</select>`:''}
   <div class="bm-st"><span class="badge ${cm[0]}">${cm[1]}</span><span class="small">${cm[2].charAt(0).toUpperCase()+cm[2].slice(1)}</span></div>
   <div class="bm-st"><span class="lc ${lo[0]}">${lo[0]==='lc-l'?ic('home'):lo[0]==='lc-c'?ic('cloud'):ic('grid')}${lo[1]}</span><span class="small">${lo[2]}</span></div>
   ${ml?`<label class="bm-l">Modelis / serija</label><select class="field" data-bm="model"><option value="-1">Nežinau modelio</option>${ml.map((x,i)=>`<option value="${i}" ${BM.model===i?'selected':''}>${esc(x[0])} – ${CMP[x[1]][1].toLowerCase()}</option>`).join('')}<option value="-2" ${BM.model===-2?'selected':''}>Kitas modelis – vertinama individualiai</option></select>`:''}
   <p class="bm-note">Suderinamumo tikimybė ir vietinis veikimas tikslinami pagal pasirinktą modelį.</p>
    ${(()=>{const pt=parts({cat:BM.cat,sub:BM.sub,sup:BM.sup});return `<div class="bm-brk">${pt.hasInst?`<label class="bm-sup"><input type="checkbox" data-bm="sup" ${pt.sup?'checked':''}> Įtraukti montavimo darbus (be įrangos kainos)</label>`:'<div class="small" style="color:#6b7a90;margin-bottom:6px">Skaičiuojamas tik integravimas į sistemą.</div>'}
     ${pt.sup?`<div class="bm-r"><span>Montavimo darbai</span><b>${eur(pt.inst)}</b></div>`:''}<div class="bm-r"><span>Integravimas į sistemą${BM.cat==='cover'?' ir kalibravimas':''}</span><b>${eur(pt.int)}</b></div></div>
    <div class="bm-f"><div class="bm-pr"><small>Už vienetą · tik darbai</small><b>${eur(pt.inst+pt.int)}</b><span>kiekvieno papildomo integravimas – ${eur(pt.int2)}</span></div>`})()}
    <div class="bm-a"><div class="cq"><button type="button" data-bm="-" aria-label="Mažiau">−</button><span>${BM.qty}</span><button type="button" data-bm="+" aria-label="Daugiau">+</button></div><button type="button" class="addb" data-bm="add">+ Pridėti</button></div></div>`;
  applyBrandIcons($('#bmBox'));
}
$('#bmodal').addEventListener('click',e=>{
  if(e.target.id==='bmodal'){closeBM();return}
  const b=e.target.closest('[data-bm]');if(!b||b.tagName==='SELECT')return;
  const a=b.dataset.bm;
  if(a==='x'){closeBM();return}
  if(a==='+'||a==='-'){BM.qty=Math.max(1,Math.min(99,BM.qty+(a==='+'?1:-1)));renderBM();return}
  if(a==='add'){const c=CATS.find(x=>x.id===BM.cat);for(let i=0;i<BM.qty;i++)pushItem(BM.brand+' '+(BM.sub||c.name).toLowerCase(),BM.brand,BM.cat,BM.model,BM.sub,BM.sup);justAdded=BM.cat+'|'+BM.brand;closeBM();renderCgrid();renderItems();toast('Pridėta į sąmatą ✓');}
});
$('#bmodal').addEventListener('change',e=>{if(e.target.dataset.bm==='sup'){BM.sup=e.target.checked;renderBM();return}if(e.target.dataset.bm==='model'){const v=+e.target.value;BM.model=v===-1?null:v;renderBM()}if(e.target.dataset.bm==='sub'){BM.sub=e.target.value;renderBM()}});
addEventListener('keydown',e=>{if(e.key==='Escape'){if(BM)closeBM();if(typeof pvOpen!=='undefined'&&pvOpen)closePreview()}});
function toast(t){let el=$('#toast');if(!el){document.body.insertAdjacentHTML('beforeend','<div id="toast"></div>');el=$('#toast')}el.textContent=t;el.classList.add('on');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('on'),1800)}
$('#addForm').addEventListener('submit',e=>{e.preventDefault();const v=$('#devIn').value;if(v.trim()){addRaw(v);$('#devIn').value=''}});

/* ===================== SKYDELIŲ PAVYZDŽIAI (DEMO) ===================== */
Object.assign(IC,{
 fan:'<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 4-7 2 0 2 3 0 5M14 12c4 0 7 1 7 4 0 2-3 2-5 0M12 14c0 4-1 7-4 7-2 0-2-3 0-5M10 12c-4 0-7-1-7-4 0-2 3-2 5 0"/>',
 curtain:'<path d="M3 3h18M5 3v18M19 3v18M5 3c2 5 2 12 0 18M19 3c-2 5-2 12 0 18"/>',
 robot:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="9" r="2.5"/><path d="M7 16h10"/>',
 moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
 out:'<path d="M14 4h5v16h-5M10 8l-4 4 4 4M6 12h10"/>',
 inh:'<path d="M3 11l9-7 9 7v9H3z"/><path d="M9 20v-6h6v6"/>',
 case:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
 grid2:'<path d="M12 2v6M8 8h8l-1 6H9zM10 14v8M14 14v8M5 22h14"/>'
});
const D={
 lights:{virtuve:{n:'Virtuvė',on:true,br:80},svetaine:{n:'Svetainė',on:false,br:60},kiemas:{n:'Kiemas',on:false,br:100}},
 heat:{t:21.5,mode:'auto'}, rec:{mode:'auto'}, ac:{mode:'off',t:23}, alarm:'off',
 cover:60, vac:'dock', hum:{on:true,target:45,cur:38}, ev:{mode:'solar'}, bat:{soc:82,mode:'auto'}, pv:6.8
};
const DOPT={
 heat:[['auto','Automatinis','Pagal grafiką ir lauko temperatūrą'],['comfort','Komfortas','Pastovi nustatyta temperatūra'],['eco','Eco','−2 °C, kai brangi elektra ar nieko nėra namie'],['off','Išjungta','Šildymas sustabdytas (apsauga nuo užšalimo lieka)']],
 rec:[['auto','Automatinis','Srautas pagal CO₂ ir drėgmę'],['normal','Normalus','Pastovus vidutinis srautas'],['boost','Intensyvus','Greitas išvėdinimas po dušo ar svečių'],['eco','Ekonominis','Minimalus srautas, mažiausios sąnaudos'],['away','Išvykus','Minimalus srautas, be šildymo']],
 ac:[['off','Išjungtas','Kondicionierius nedirba'],['cool','Vėsinimas','Vėsina iki nustatytos temperatūros'],['heat','Šildymas','Papildomas šildymas oras-oras'],['dry','Sausinimas','Mažina drėgmę neatvėsindamas'],['fan','Ventiliacija','Tik maišo orą']],
 alarm:[['off','Išjungta','Apsauga nesaugo, judėti galima laisvai'],['home','Namie','Saugomos durys ir langai, judesio jutikliai viduje išjungti'],['away','Išvykus','Saugomas visas namas, pranešimai į telefoną']],
 ev:[['solar','Saulės perteklius','Krauna tik iš pertekliaus, srovė 6–16 A'],['cheap','Pigiausios valandos','Krauna naktį pagal biržos kainą'],['fast','Greitas krovimas','Iškart 11 kW, nepriklausomai nuo kainos'],['off','Sustabdyta','Įkroviklis nekrauna']],
 bat:[['auto','Automatinis','Saulė → namai → baterija, vakare naudoja sukauptą'],['charge','Krauti pigiai','Naktį pasikrauna iš tinklo pigiausiomis valandomis'],['hold','Išlaikyti įkrovą','Neiškrauna – energija taupoma vakarui']],
 cover:[['100','Atidaryti','Užuolaidos visiškai atitrauktos'],['50','Pusiau','Pritraukta iki pusės'],['0','Uždaryti','Visiškai užtrauktos']],
 vac:[['clean','Valyti visus kambarius','Siurbia ir plauna pagal žemėlapį'],['kitchen','Valyti virtuvę','Tik pasirinkta zona'],['dock','Grįžti į stotelę','Nutraukia valymą ir kraunasi']],
 hum:[['on','Įjungtas','Palaiko nustatytą drėgmę'],['off','Išjungtas','Drėkintuvas nedirba']]
};
const DEV=['lights','heat','rec','ac','alarm','ev','bat','cover','vac','hum'];
const DNAME={lights:'Apšvietimas',heat:'Šildymas',rec:'Rekuperatorius',ac:'Kondicionierius',alarm:'Apsauga',ev:'Elektromobilis',bat:'Baterija',cover:'Užuolaidos',vac:'Robotas siurblys',hum:'Drėkintuvas'};
const DIC={lights:'light',heat:'thermo',rec:'fan',ac:'snow',alarm:'shield',ev:'car',bat:'battery',cover:'curtain',vac:'robot',hum:'drop'};
const DH={lights:45,heat:18,rec:185,ac:205,alarm:0,ev:150,bat:130,cover:265,vac:285,hum:210};
const f1=n=>(Math.round(n*10)/10).toFixed(1).replace('.',',');
const optT=(d,v)=>(DOPT[d].find(o=>o[0]===v)||['', ''])[1];
const curOpt=d=>({cam:D.cam,mower:D.mower,heat:D.heat.mode,rec:D.rec.mode,ac:D.ac.mode,alarm:D.alarm,ev:D.ev.mode,bat:D.bat.mode,cover:String(D.cover),vac:D.vac==='cleaning'?'clean':D.vac==='kitchen'?'kitchen':'dock',hum:D.hum.on?'on':'off'})[d];

function energy(){
  const nl=Object.values(D.lights).filter(l=>l.on).length;
  let load=0.55+nl*0.04+({auto:1.2,comfort:1.5,eco:0.7,off:0}[D.heat.mode])+(D.ac.mode==='off'?0:D.ac.mode==='fan'?0.05:0.8)+({auto:.09,normal:.08,boost:.2,eco:.04,away:.04}[D.rec.mode])+(D.vac!=='dock'?0.05:0)+(D.hum.on?0.03:0);
  const pv=D.pv,sur=pv-load;
  let ev=0;if(D.ev.mode==='fast')ev=11;else if(D.ev.mode==='solar'&&sur>1.4)ev=Math.min(11,sur);
  let rem=sur-ev,bat=0;
  if(rem>0&&D.bat.soc<100)bat=Math.min(5,rem);
  else if(rem<0&&D.bat.mode!=='hold'&&D.bat.soc>10)bat=-Math.min(5,-rem);
  const grid=-(rem-bat);
  return {pv,load,ev,bat,grid};
}
function stat(d){
  const E=energy();
  switch(d){
   case 'lights':{const on=Object.values(D.lights).filter(l=>l.on);return {on:on.length>0,v:on.length+'/3',l:on.length?'Įjungta: '+on.map(l=>l.n.toLowerCase()).join(', '):'Visos išjungtos'}}
   case 'heat':return {on:D.heat.mode!=='off',v:f1(D.heat.t)+'°',l:optT('heat',D.heat.mode)+' · viduje 21,2°'};
   case 'rec':{const sp={auto:2,normal:2,boost:4,eco:1,away:1}[D.rec.mode];return {on:true,v:sp+'/4',l:optT('rec',D.rec.mode)+' · CO₂ 640 ppm'}}
   case 'ac':return {on:D.ac.mode!=='off',v:D.ac.mode==='off'?'Išj.':D.ac.t+'°',l:optT('ac',D.ac.mode)+' · svetainė'};
   case 'alarm':return {on:D.alarm!=='off',v:'',l:D.alarm==='off'?'Išjungta':'Įjungta: '+optT('alarm',D.alarm).toLowerCase()};
   case 'ev':return {on:E.ev>0,v:f1(E.ev)+' kW',l:E.ev>0?optT('ev',D.ev.mode):D.ev.mode==='cheap'?'Laukia 02:00 kainos':D.ev.mode==='off'?'Sustabdyta':'Laukia pertekliaus'};
   case 'bat':return {on:true,v:Math.round(D.bat.soc)+'%',l:E.bat>0.05?'Kraunasi '+f1(E.bat)+' kW':E.bat<-0.05?'Atiduoda '+f1(-E.bat)+' kW':optT('bat',D.bat.mode)};
   case 'cover':return {on:D.cover>0,v:D.cover+'%',l:D.cover===0?'Uždarytos':D.cover===100?'Atidarytos':'Pravertos · svetainė'};
   case 'vac':return {on:D.vac!=='dock',v:'',l:D.vac==='cleaning'?'Valo visą namą':D.vac==='kitchen'?'Valo virtuvę':'Stotelėje · 100 %'};
   case 'hum':return {on:D.hum.on,v:D.hum.cur+'%',l:D.hum.on?'Tikslas '+D.hum.target+'%':'Išjungtas'};
  }
}

/* --- paspaudimų paaiškinimai --- */
let dlog=[{t:'Paspauskite bet kurį elementą',d:'Čia matysite, ką tas veiksmas darytų tikroje sistemoje.'}];
function say(t,d){dlog.unshift({t,d});dlog=dlog.slice(0,5);renderLog()}
function renderLog(){$('#demoLogList').innerHTML=dlog.map(x=>`<li><b>${esc(x.t)}</b>${esc(x.d)}</li>`).join('')}
const WHY={
 heat:{auto:'HA perduoda režimą šilumos siurbliui – temperatūra keičiama pagal grafiką, lauko orą ir elektros kainą.',comfort:'Šilumos siurblys palaiko pastovią temperatūrą visą parą.',eco:'Temperatūra sumažinama 2 °C – taupoma, kai elektra brangi ar namuose nieko nėra.',off:'Šildymas sustabdomas, bet apsauga nuo užšalimo lieka įjungta.'},
 rec:{auto:'Rekuperatorius pats keičia srautą pagal CO₂ ir drėgmės jutiklius.',normal:'Nustatomas pastovus vidutinis oro srautas.',boost:'Maksimalus srautas 30 min., paskui grįžta į ankstesnį režimą.',eco:'Minimalus srautas – mažiausios elektros sąnaudos.',away:'Minimalus srautas ir išjungtas šildytuvas, kol nieko nėra namie.'},
 ac:{off:'Kondicionierius išjungiamas.',cool:'Įjungiamas vėsinimas – HA gali jį išjungti, jei atidarytas langas.',heat:'Kondicionierius šildo – naudinga pavasarį ir rudenį, kai šilumos siurblys dar nereikalingas.',dry:'Sausinimas mažina drėgmę nekeisdamas temperatūros.',fan:'Tik ventiliatorius – oro maišymas.'},
 alarm:{off:'Apsauga išjungiama. Realiai HA siunčia komandą apsaugos centralei (pvz., Paradox ar Trikdis).',home:'Saugomos durys ir langai, o judėti namuose galima – tinka nakčiai.',away:'Saugomas visas namas. Suveikus jutikliui – pranešimas į telefoną ir kamerų įrašas.'},
 ev:{solar:'Automobilis kraunamas tik saulės pertekliumi: srovė kas kelias sekundes keičiama 6–16 A ribose.',cheap:'Krovimas atidedamas iki pigiausių nakties valandų pagal Nord Pool kainas.',fast:'Krauna iškart maksimalia 11 kW galia – kai automobilio reikia skubiai.',off:'Krovimas sustabdomas.'},
 bat:{auto:'Inverteris pirmiausia maitina namus iš saulės, perteklių kaupia baterijoje, vakare ją naudoja.',charge:'Naktį baterija pasikrauna iš tinklo pigiausiomis valandomis – vakare nereikia pirkti brangios elektros.',hold:'Baterija neiškraunama – energija paliekama brangiam vakaro laikui.'},
 cover:{'100':'Užuolaidų variklis atitraukia užuolaidas.','50':'Užuolaidos pritraukiamos iki pusės.','0':'Užuolaidos užtraukiamos.'},
 vac:{clean:'Robotas pradeda siurbti ir plauti visus kambarius pagal žemėlapį.',kitchen:'Robotas valo tik virtuvės zoną.',dock:'Robotas grįžta į stotelę ir kraunasi.'},
 hum:{on:'Drėkintuvas įjungtas ir palaiko nustatytą drėgmę.',off:'Drėkintuvas išjungtas.'}
};
function setOpt(d,v){
  ({cam:()=>D.cam=v,mower:()=>D.mower=v,heat:()=>D.heat.mode=v,rec:()=>D.rec.mode=v,ac:()=>D.ac.mode=v,alarm:()=>D.alarm=v,ev:()=>D.ev.mode=v,bat:()=>D.bat.mode=v,cover:()=>D.cover=+v,
    vac:()=>D.vac=v==='clean'?'cleaning':v==='kitchen'?'kitchen':'dock',hum:()=>D.hum.on=v==='on'})[d]();
  say(DNAME[d]+': '+optT(d,v).toLowerCase(),WHY[d][v]);
}
function scene(s){
  if(s==='away'){Object.values(D.lights).forEach(l=>l.on=false);D.alarm='away';D.heat.mode='eco';D.rec.mode='away';D.ac.mode='off';D.vac='cleaning';
    say('Scenarijus „Išvykstu“','Vienu paspaudimu: išjungiamos visos šviesos ir kondicionierius, įjungiama apsauga, šildymas pereina į Eco, rekuperatorius – į „Išvykus“, robotas pradeda valyti.')}
  if(s==='home'){if(D.people)D.people.jonas='home';D.alarm='off';D.heat.mode='auto';D.rec.mode='auto';D.lights.virtuve.on=true;D.vac='dock';
    say('Scenarijus „Grįžau“','Apsauga išjungiama, šildymas ir vėdinimas grįžta į automatinį režimą, įsijungia virtuvės šviesa, robotas grįžta į stotelę. Gali įsijungti ir automatiškai, kai telefonas priartėja prie namų.')}
  if(s==='night'){Object.values(D.lights).forEach(l=>l.on=false);D.alarm='home';D.cover=0;D.heat.mode='eco';
    say('Scenarijus „Naktis“','Išjungiamos šviesos, užtraukiamos užuolaidos, apsauga – „Namie“ režimu, šildymas – Eco iki ryto.')}
}

/* --- valdymo turinys (bendras visiems lygiams, išvaizda skiriasi CSS) --- */
function body(d){
  let h='';
  if(d==='lights'){
    h+=Object.entries(D.lights).map(([k,l])=>`<div class="lrow"><span>${l.n}</span>${l.on?`<input type="range" min="5" max="100" value="${l.br}" data-r="br:${k}" aria-label="Ryškumas">`:''}<button class="tgl ${l.on?'on':''}" data-a="light:${k}" aria-label="${l.n}"></button></div>`).join('');
    h+=`<div class="pl" style="margin-top:10px"><div class="po" data-a="allon"><b>Įjungti visas</b><small>Visos šviesos 80 %</small></div><div class="po" data-a="alloff"><b>Išjungti visas</b><small>Vienu paspaudimu visame name</small></div></div>`;
    return h;
  }
  if(d==='heat')h+=`<div class="ctl"><button data-a="tmp:heat:-">−</button><b>${f1(D.heat.t)}°</b><button data-a="tmp:heat:+">+</button></div>`;
  if(d==='ac'&&D.ac.mode!=='off')h+=`<div class="ctl"><button data-a="tmp:ac:-">−</button><b>${D.ac.t}°</b><button data-a="tmp:ac:+">+</button></div>`;
  if(d==='hum'&&D.hum.on)h+=`<div class="ctl"><button data-a="tmp:hum:-">−</button><b>${D.hum.target}%</b><button data-a="tmp:hum:+">+</button></div>`;
  if(d==='cover')h+=`<div class="sub">Tiksli padėtis: ${D.cover}%</div><input type="range" min="0" max="100" step="5" value="${D.cover}" data-r="cov">`;
  if(d==='bat'||d==='ev'){const E=energy();h+=`<div class="sub">Dabar: saulė ${f1(E.pv)} kW · namai ${f1(E.load)} kW · ${E.grid>=0?'perkama '+f1(E.grid):'parduodama '+f1(-E.grid)} kW</div>`}
  h+=`<div class="sub">Pasirinkite režimą</div><div class="pl">`+DOPT[d].map(o=>`<div class="po ${curOpt(d)===o[0]?'on':''}" data-a="opt:${d}:${o[0]}"><b>${o[1]}</b><small>${o[2]}</small></div>`).join('')+'</div>';
  return h;
}

/* --- 1 lygis: standartinis --- */
let open=null,tier=1;
function T1(){
  const E=energy(),row=(d,extra='')=>{const s=stat(d);return `<div class="row ${s.on?'on':''}" data-a="open:${d}">${ic(DIC[d])}<span class="n">${DNAME[d]}</span>${extra||`<span class="s">${s.v?s.v+' · ':''}${esc(s.l.split(' · ')[0])}</span>`}</div>`};
  let h=`<div class="t1"><div class="top">${ic('grid')}Namai</div><div class="body">
  <div class="hc"><h4>Energija</h4>
   <div class="row">${ic('sun')}<span class="n">Saulės gamyba</span><span class="s">${f1(E.pv)} kW</span></div>
   <div class="row">${ic('home')}<span class="n">Namų suvartojimas</span><span class="s">${f1(E.load)} kW</span></div>
   <div class="row">${ic('bolt')}<span class="n">Tinklas</span><span class="s">${E.grid>=0?'+':''}${f1(E.grid)} kW</span></div>
   ${row('bat')}${row('ev')}</div>
  <div class="hc"><h4>Apšvietimas</h4>${Object.entries(D.lights).map(([k,l])=>`<div class="row ${l.on?'on':''}" data-a="light:${k}">${ic('light')}<span class="n">${l.n}</span><span class="tg ${l.on?'on':''}"></span></div>`).join('')}</div>
  <div class="hc"><h4>Klimatas</h4>${row('heat')}${row('rec')}${row('ac')}${row('hum')}</div>
  <div class="hc"><h4>Apsauga</h4>${row('alarm')}<div class="btns">${DOPT.alarm.map(o=>`<button class="hb ${D.alarm===o[0]?'on':''}" data-a="opt:alarm:${o[0]}">${o[1]}</button>`).join('')}</div></div>
  <div class="hc"><h4>Kita</h4>${row('cover')}${row('vac')}</div>
  </div>`;
  if(open&&open!=='lights'){const s=stat(open);h+=`<div class="mdl" data-a="close"><div class="dlg" data-stop="1"><div class="dlg-h"><b>${DNAME[open]}</b><button class="x" data-a="close" aria-label="Uždaryti">${ic('x')}</button></div><div class="st">${s.v?s.v+' · ':''}${esc(s.l)}</div>${body(open)}</div></div>`}
  return h+'</div>';
}
/* --- 2 lygis: individualus --- */
function T2(){
  const E=energy(),s=d=>stat(d);
  let tiles='';
  DEV.forEach(d=>{const st=s(d);tiles+=`<div class="tl ${st.on?'on':''} ${open===d?'sel':''}" style="--h:${DH[d]}" data-a="open:${d}"><div class="ic2">${ic(DIC[d])}</div><div style="min-width:0"><b>${DNAME[d]}</b><small>${st.v?st.v+' · ':''}${esc(st.l)}</small></div></div>`;
    if(open===d)tiles+=`<div class="pn"><div class="pn-h">${DNAME[d]}<button class="x" data-a="close" aria-label="Uždaryti">${ic('x')}</button></div>${body(d)}</div>`});
  return `<div class="t2">
   <div class="hd"><div><h4>Laba diena, Jonai</h4><p>Antradienis · 13:40</p></div><div class="av">J</div></div>
   <div class="chips"><span class="chip2" style="--c:#f2a33a">${ic('sun')}4° debesuota</span><span class="chip2" data-a="open:alarm" style="--c:${D.alarm==='off'?'#34a37a':'#e5484d'}">${ic('shield')}${D.alarm==='off'?'Apsauga išjungta':'Apsauga įjungta'}</span><span class="chip2" style="--c:#4a72b8">${ic('bolt')}${E.grid>=0?'Perkama '+f1(E.grid):'Parduodama '+f1(-E.grid)} kW</span></div>
   <div class="sh">Scenarijai</div>
   <div class="scn"><button data-a="scene:home">${ic('inh')}Grįžau</button><button data-a="scene:away">${ic('out')}Išvykstu</button><button data-a="scene:night">${ic('moon')}Naktis</button></div>
   <div class="sh">Energija</div>
   <div class="ec"><div class="es">
     <div>${ic('sun').replace('class="i"','class="i" style="color:#f2a33a"')}<b>${f1(E.pv)}</b>Saulė kW</div>
     <div>${ic('home').replace('class="i"','class="i" style="color:#4a72b8"')}<b>${f1(E.load)}</b>Namai kW</div>
     <div>${ic('car').replace('class="i"','class="i" style="color:#34a37a"')}<b>${f1(E.ev)}</b>EV kW</div>
     <div>${ic('bolt').replace('class="i"','class="i" style="color:#8a6bd1"')}<b>${f1(Math.abs(E.grid))}</b>${E.grid>=0?'Pirkta':'Parduota'} kW</div></div>
     <div class="bb"><i style="width:${D.bat.soc}%"></i></div>
     <div class="en"><span>Baterija ${Math.round(D.bat.soc)} %</span><span>${s('bat').l}</span></div></div>
   <div class="sh">Įrenginiai</div>
   <div class="tg2">${tiles}</div></div>`;
}
function flowSVG(){
  const E=energy(),cls=(v,rev)=>v>0.05?(rev?'fa rv':'fa'):'fa off';
  const node=(x,y,icn,val,lab,col)=>`<g class="nd"><circle class="bg" cx="${x}" cy="${y}" r="22"/><g transform="translate(${x-10},${y-16}) scale(.84)" style="color:${col}"><svg class="i" viewBox="0 0 24 24" width="24" height="24" style="stroke:${col}">${IC[icn]}</svg></g><text x="${x}" y="${y+12}">${val}</text><text class="l" x="${x}" y="${y+34}">${lab}</text></g>`;
  return `<svg viewBox="0 0 260 250">
   <path class="fl fb" d="M130 50V98"/><path class="fl ${cls(E.pv)}" stroke="#ffd166" d="M130 50V98"/>
   <path class="fl fb" d="M52 120H108"/><path class="fl ${cls(Math.abs(E.grid),E.grid<0)}" stroke="#c4b5fd" d="M52 120H108"/>
   <path class="fl fb" d="M152 120H208"/><path class="fl ${cls(E.ev)}" stroke="#5ef0a5" d="M152 120H208"/>
   <path class="fl fb" d="M130 142V188"/><path class="fl ${cls(Math.abs(E.bat),E.bat<0)}" stroke="#7cc4ff" d="M130 142V188"/>
   ${node(130,28,'sun',f1(E.pv),'Saulė, kW','#ffd166')}
   ${node(30,120,'grid2',f1(Math.abs(E.grid)),E.grid>=0?'Perkama':'Parduodama','#c4b5fd')}
   ${node(130,120,'home',f1(E.load),'Namai, kW','#fff')}
   ${node(230,120,'car',f1(E.ev),'EV, kW','#5ef0a5')}
   ${node(130,210,'battery',Math.round(D.bat.soc)+'%',E.bat>0.05?'Kraunasi':E.bat<-0.05?'Atiduoda':'Baterija','#7cc4ff')}
  </svg>`;
}
/* ---------- 3 lygis: PREMIUM (fotorealistinės iliustracijos) ---------- */
Object.assign(D,{cam:'on',mower:'winter',people:{jonas:'work',ruta:'road'},
 autos:[['Baterija iš pigios nakties elektros','Jei rytoj maža saulės prognozė',1],['EV krovimas iš saulės pertekliaus','Nuo 1,4 kW pertekliaus, 6–16 A',1],['Šildymas pigiomis valandomis','+1 °C, kai kaina žemiau vidurkio',1],['Rekuperatoriaus intensyvus režimas','Kai CO₂ viršija 1000 ppm',1],['Užuolaidos pagal saulę','Vasarą uždaro pietinę pusę po 12:00',0],['Apsauga, kai visi išvyksta','Pagal telefonų buvimo vietą',1]]});
Object.assign(DOPT,{
 cam:[['on','Įjungta','Įrašo judesį ir siunčia pranešimus'],['off','Privatumo režimas','Kamera nusisuka ir neįrašo']],
 mower:[['mow','Pjauti','Pjauna pagal žemėlapį ir grafiką'],['dock','Grįžti į stotelę','Nutraukia darbą ir kraunasi'],['winter','Žiemos režimas','Sustabdyta iki pavasario']]});
Object.assign(DNAME,{sys:'Sistema',weather:'Orai',cam:'Kamera',mower:'Vejapjovė',people:'Kas namie'});
Object.assign(WHY,{cam:{on:'Kamera įjungta: judesio įvykiai įrašomi ir siunčiami į telefoną.',off:'Privatumo režimas – kamera nusisuka ir nieko neįrašo, kai esate namie.'},
 mower:{mow:'Vejapjovė pradeda pjauti pagal žemėlapį; lyjant HA gali ją sustabdyti automatiškai.',dock:'Vejapjovė grįžta į stotelę ir kraunasi.',winter:'Vejapjovė išjungta iki pavasario.'}});
const T3N={ev:'Automobiliai',bat:'Elektrinė',ac:'Kondicionieriai'};
const nm3=d=>T3N[d]||DNAME[d];
let t3tab='home';
const PPL={jonas:{n:'Jonas'},ruta:{n:'Rūta'}};
const PST={home:['Namie','#7ee08a'],work:['Darbe','#7cc4ff'],road:['Kelyje','#ffd166']};

const DEFS=`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<linearGradient id="pW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#eef1f5"/><stop offset="1" stop-color="#c3cad4"/></linearGradient>
<linearGradient id="pWs" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e2e6ec"/><stop offset="1" stop-color="#a9b2be"/></linearGradient>
<linearGradient id="pD" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2a2e35"/><stop offset=".45" stop-color="#5b616b"/><stop offset="1" stop-color="#16181c"/></linearGradient>
<linearGradient id="pGl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#55657d"/><stop offset=".5" stop-color="#1b222d"/><stop offset="1" stop-color="#090c11"/></linearGradient>
<linearGradient id="pBlk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6a707a"/><stop offset=".3" stop-color="#2a2d33"/><stop offset="1" stop-color="#08090b"/></linearGradient>
<linearGradient id="pSil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="#d6dbe2"/><stop offset="1" stop-color="#858e9b"/></linearGradient>
<linearGradient id="pWin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8fa3bf"/><stop offset=".45" stop-color="#2b3443"/><stop offset="1" stop-color="#0d1118"/></linearGradient>
<radialGradient id="pRim" cx=".45" cy=".4"><stop offset="0" stop-color="#f3f5f8"/><stop offset=".55" stop-color="#a3abb6"/><stop offset="1" stop-color="#4a515b"/></radialGradient>
<radialGradient id="pSph" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#e6e9ee"/><stop offset="1" stop-color="#9ea7b3"/></radialGradient>
<radialGradient id="pLens" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#7591c6"/><stop offset=".3" stop-color="#1a2233"/><stop offset="1" stop-color="#030508"/></radialGradient>
<radialGradient id="pGlow"><stop offset="0" stop-color="#fff1c4" stop-opacity=".95"/><stop offset=".35" stop-color="#ffc857" stop-opacity=".45"/><stop offset="1" stop-color="#ffb02e" stop-opacity="0"/></radialGradient>
<linearGradient id="pCu" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#eab07a"/><stop offset=".5" stop-color="#b8682f"/><stop offset="1" stop-color="#7d421b"/></linearGradient>
<linearGradient id="pFab" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="9" y2="0" spreadMethod="repeat"><stop offset="0" stop-color="#efe4d2"/><stop offset=".5" stop-color="#bfa98c"/><stop offset="1" stop-color="#efe4d2"/></linearGradient>
<linearGradient id="pSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fbbe6"/><stop offset=".58" stop-color="#d3e5f4"/><stop offset=".6" stop-color="#7fae6a"/><stop offset="1" stop-color="#3f6c33"/></linearGradient>
<radialGradient id="pGrass" cy=".3"><stop offset="0" stop-color="#7fbf5a"/><stop offset="1" stop-color="#3b6a2a" stop-opacity="0"/></radialGradient>
<linearGradient id="pCloud" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6f8fb"/><stop offset=".6" stop-color="#c9d1dc"/><stop offset="1" stop-color="#8d98a8"/></linearGradient>
<linearGradient id="pRed" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d63a4c"/><stop offset="1" stop-color="#4a0d16"/></linearGradient>
<linearGradient id="pGrn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#25a86b"/><stop offset="1" stop-color="#0b3a25"/></linearGradient>
<filter id="pSh" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3"/></filter>
</defs></svg>`;
const sh=(cx,cy,rx,ry)=>`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#000" opacity=".5" filter="url(#pSh)"/>`;
const hi=(d)=>`<path d="${d}" stroke="#fff" stroke-width="1.2" opacity=".55" fill="none" stroke-linecap="round"/>`;
function car(paint,wagon){
  const body=wagon?'M2 18.5C2 15.6 3.4 13.7 7 13l8.5-7C17 4.7 18.8 4 21 4h29c2.3 0 3.6.8 4.6 2.6L57 12c1.6.7 2 2.3 2 4v3c0 1-.8 1.6-1.8 1.6H3.6C2.7 20.6 2 19.8 2 18.5z'
   :'M2 18.5C2 15.5 3.5 13.6 7 13l9-7.2C17.6 4.6 19.6 4 22 4h17c3 0 4.8.9 6.6 3.2L50 12.6c4.4.6 8 2 8 5.2V19c0 1-.8 1.6-1.8 1.6H3.6C2.7 20.6 2 19.8 2 18.5z';
  const win=wagon?'<path d="M16.7 12.4l6-6.1c.5-.5 1.2-.8 2-.8h6.4v6.9z"/><path d="M32.6 5.5h9.4v6.9h-9.4z"/><path d="M43.4 5.5h6.3c1.6 0 2.6.6 3.4 2l2.1 4.9H43.4z"/>'
   :'<path d="M17.5 12.4l6.2-6.2c.6-.5 1.3-.8 2.1-.8h5.7v7z"/><path d="M33.6 5.4h5.1c2 0 3.2.6 4.4 2.1l3.5 4.9H33.6z"/>';
  const w1=14,w2=wagon?47:46;
  const wheel=x=>`<circle cx="${x}" cy="20" r="6.2" fill="#0b0c0e"/><circle cx="${x}" cy="20.4" r="5" fill="#15171b"/><circle cx="${x}" cy="20.4" r="3.3" fill="url(#pRim)"/><circle cx="${x}" cy="20.4" r="1" fill="#3a4049"/>`;
  return `<path d="${body}" fill="url(#${paint})"/><g fill="url(#pWin)">${win}</g>${hi(wagon?'M9 13.2l9-7.6c1.5-1 3-1.3 4.6-1.3H50':'M9 13.2l9-7.4c1.5-1 3-1.4 4.6-1.4H39')}
   <path d="M4 15.5h${wagon?54:53}" stroke="#fff" stroke-opacity=".22" stroke-width=".8"/><rect x="${wagon?55:54}" y="13.3" width="3.4" height="1.6" rx=".8" fill="#fff8e1"/><rect x="2.2" y="14" width="2" height="1.6" rx=".8" fill="#e5484d"/>
   <path d="M${w1-7} 20a7 7 0 0 1 14 0" fill="#0b0c0e"/><path d="M${w2-7} 20a7 7 0 0 1 14 0" fill="#0b0c0e"/>${wheel(w1)}${wheel(w2)}`;
}
function art3(d){
  const E=energy();
  switch(d){
   case 'sys':return `${sh(75,100,62,6)}
    ${[18,30,50,62].map(x=>`<rect x="${x}" y="22" width="3.2" height="40" rx="1.6" fill="url(#pD)"/>`).join('')}
    <path d="M10 62h62l-4-6H14z" fill="#3c4149"/><rect x="10" y="62" width="62" height="14" rx="3" fill="url(#pBlk)"/>${[22,28,34,40,46].map(x=>`<circle cx="${x}" cy="69" r="1.1" fill="#5ef0a5"/>`).join('')}
    <path d="M44 78l20-9 20 9-20 9z" fill="#fff"/><path d="M44 78v15l20 9V87z" fill="url(#pWs)"/><path d="M84 78v15l-20 9V87z" fill="#bcc4cf"/><circle cx="76" cy="90" r="1.6" fill="#5ec8ff"/>
    <rect x="92" y="28" width="46" height="52" rx="7" fill="url(#pW)" stroke="#c5ccd6"/><rect x="96.5" y="32.5" width="37" height="38" rx="3" fill="url(#pGl)"/><text x="115" y="51" fill="#fff" font-size="10" font-weight="700" text-anchor="middle" font-family="Manrope">13:40</text><rect x="102" y="56" width="10" height="7" rx="1.5" fill="#ffb347"/><rect x="114" y="56" width="14" height="7" rx="1.5" fill="#3f5370"/>${hi('M95 31h40')}`;
   case 'alarm':{const on=D.alarm!=='off';return `${sh(60,100,50,6)}
    <rect x="78" y="6" width="20" height="5" rx="2" fill="url(#pW)"/><circle cx="88" cy="21" r="11" fill="url(#pSph)"/><circle cx="86" cy="23" r="5.6" fill="url(#pLens)"/><circle cx="84.4" cy="21.4" r="1.4" fill="#fff" opacity=".85"/>
    <rect x="14" y="36" width="92" height="62" rx="8" fill="url(#pW)" stroke="#c5ccd6"/><rect x="20" y="42" width="80" height="42" rx="4" fill="url(#${on?'pRed':'pGrn'})"/>
    ${on?'<circle class="ring" cx="60" cy="62" r="15" fill="none" stroke="#fff" stroke-width="1.5"/>':''}
    <path d="M60 50l10 4v7c0 7-4.5 11-10 13-5.5-2-10-6-10-13v-7z" fill="#fff"/>${on?'<rect x="56" y="60" width="8" height="7" rx="1.2" fill="#c0283b"/><path d="M57.5 60v-2a2.5 2.5 0 0 1 5 0v2" stroke="#c0283b" stroke-width="1.6" fill="none"/>':'<path d="M55.5 62l3 3 6-6" stroke="#1f9d63" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'}
    ${[30,40,50,60,70,80,90].map(x=>`<circle cx="${x}" cy="91" r="1.6" fill="#b8c0cc"/>`).join('')}${hi('M18 39h84')}`}
   case 'ev':{const ch=E.ev>0.05;return `${sh(70,96,64,5)}
    <rect x="4" y="34" width="20" height="32" rx="5" fill="url(#pW)" stroke="#c5ccd6"/><circle class="${ch?'glow':''}" cx="14" cy="46" r="5" fill="none" stroke="${ch?'#5ef0a5':'#7cc4ff'}" stroke-width="2.2"/><rect x="10" y="56" width="8" height="2" rx="1" fill="#9aa3ae"/>
    <path d="M14 66c0 ${ch?'16 14 22 26 18':'22 6 24 8 28'}" stroke="#1d2026" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <g transform="translate(84 58) scale(1.05)">${car('pSil',true)}</g>
    <g transform="translate(26 54) scale(1.18)">${car('pBlk',false)}</g>
    ${ch?'<path class="bob" d="M58 30l-8 12h6l-3 10 10-14h-6z" fill="#5ef0a5" stroke="#137a4b" stroke-width="1"/>':''}`}
   case 'bat':{const lv=Math.round(D.bat.soc/100*64);return `${sh(75,101,66,6)}
    <rect x="12" y="18" width="48" height="60" rx="6" fill="url(#pW)" stroke="#c5ccd6"/><rect x="56" y="20" width="4" height="56" fill="#c3cad4"/><rect x="20" y="28" width="22" height="14" rx="2" fill="url(#pGl)"/><path d="M23 37h8M23 33h14" stroke="#5ef0a5" stroke-width="1.2"/><rect x="20" y="47" width="10" height="2.5" rx="1" fill="#e5484d"/><circle cx="50" cy="35" r="1.6" fill="#5ef0a5"/>
    ${[22,30,38,46].map(x=>`<rect x="${x}" y="78" width="3" height="7" rx="1" fill="#2a2e35"/>`).join('')}${hi('M16 21h40')}
    ${[0,1,2].map(i=>`<rect x="66" y="${24+i*24}" width="56" height="22" rx="4" fill="url(#pW)" stroke="#c5ccd6"/><rect x="72" y="${30+i*24}" width="14" height="3" rx="1.5" fill="#9aa3ae"/><circle cx="114" cy="${35+i*24}" r="1.6" fill="${i===0?'#5ef0a5':'#9ee6c0'}"/>`).join('')}
    <rect x="130" y="24" width="7" height="68" rx="3.5" fill="rgba(255,255,255,.15)"/><rect x="130" y="${92-lv}" width="7" height="${lv}" rx="3.5" fill="#ffd166"/>`}
   case 'cam':{const on=D.cam==='on';return `${sh(75,101,32,5)}<path d="M56 98h38l-5-11H61z" fill="url(#pW)"/><rect x="70" y="72" width="10" height="16" fill="#d9dee5"/><circle cx="75" cy="46" r="29" fill="url(#pSph)"/>
    <g style="transition:transform .6s;transform:translateY(${on?0:14}px)"><circle cx="75" cy="48" r="15" fill="#11151c"/><circle cx="75" cy="48" r="9" fill="url(#pLens)"/><circle cx="72" cy="45" r="2.2" fill="#fff" opacity=".8"/>${on?'<circle class="glow" cx="86" cy="40" r="1.6" fill="#ff5c5c"/>':''}</g>
    ${on?'':'<path d="M48 40q27-10 54 0" stroke="#c9d0da" stroke-width="1.4" fill="none"/>'}`}
   case 'weather':return `<g class="bob"><circle cx="58" cy="48" r="20" fill="url(#pCloud)"/><circle cx="84" cy="38" r="25" fill="url(#pCloud)"/><circle cx="106" cy="52" r="16" fill="url(#pCloud)"/><rect x="40" y="48" width="80" height="22" rx="11" fill="url(#pCloud)"/>${hi('M66 22c8-6 22-5 28 4')}</g>
    <g stroke="#7cc4ff" stroke-width="2.4" stroke-linecap="round">${[[56,0],[72,.4],[88,.8],[104,1.2]].map(([x,dl])=>`<path class="rain" style="animation-delay:${dl}s" d="M${x} 76l-3 8"/>`).join('')}</g>`;
   case 'heat':{const on=D.heat.mode!=='off';return `${sh(75,102,66,6)}
    <rect x="22" y="2" width="3.4" height="14" fill="url(#pCu)"/><rect x="38" y="2" width="3.4" height="14" fill="url(#pCu)"/>
    <rect x="14" y="12" width="36" height="88" rx="10" fill="url(#pW)" stroke="#cfd5de"/><rect x="44" y="16" width="5" height="80" rx="2" fill="#c9d0da"/><rect x="24" y="24" width="16" height="10" rx="2" fill="url(#pGl)"/><circle cx="32" cy="42" r="1.4" fill="${on?'#5ef0a5':'#9aa3ae'}"/>${hi('M18 18v74')}
    <rect x="56" y="44" width="78" height="56" rx="6" fill="url(#pW)" stroke="#cfd5de"/><circle cx="88" cy="72" r="21" fill="#1a1d23"/>${[17,13,9].map(r=>`<circle cx="88" cy="72" r="${r}" fill="none" stroke="#3b424d" stroke-width="1.2"/>`).join('')}
    <g class="${on?'spin2':''}" style="--du:1.4s;transform-origin:88px 72px"><path d="M88 72c-2-8 0-14 5-15 3 0 2 7-5 15zM88 72c8 1 12 5 11 10-1 2-7 0-11-10zM88 72c-5 6-11 8-14 4-1-3 5-6 14-4z" fill="#4a525e"/></g><circle cx="88" cy="72" r="2.6" fill="#8d96a3"/>
    ${[0,1,2,3,4,5,6].map(i=>`<rect x="116" y="${52+i*6}" width="12" height="2.4" rx="1" fill="#aeb6c2"/>`).join('')}${hi('M60 47h70')}`}
   case 'rec':{const du={auto:'1.6s',normal:'1.6s',boost:'.5s',eco:'3.5s',away:'3.5s'}[D.rec.mode];return `${sh(75,102,52,6)}
    ${[42,56,86,100].map(x=>`<rect x="${x}" y="4" width="11" height="44" fill="url(#pD)"/><ellipse cx="${x+5.5}" cy="4" rx="5.5" ry="2" fill="#6b7280"/>`).join('')}
    <rect x="30" y="44" width="90" height="56" rx="6" fill="url(#pW)" stroke="#cfd5de"/><rect x="116" y="46" width="4" height="52" fill="#c3cad4"/><circle cx="58" cy="72" r="14" fill="#e3e8ee" stroke="#b9c3cf"/>
    <g class="spin2" style="--du:${du};transform-origin:58px 72px"><path d="M58 72c0-8 2-12 6-12 3 0 3 5-6 12zM58 72c7 4 9 8 6 11-2 2-6-1-6-11zM58 72c-7 4-11 4-12 0-1-3 4-5 12 0z" fill="#7fb3ff" stroke="#4a86e0" stroke-width=".8"/></g>
    <rect x="84" y="58" width="22" height="10" rx="2" fill="url(#pGl)"/><circle cx="108" cy="90" r="1.8" fill="#5ef0a5"/>${hi('M34 47h80')}`}
   case 'ac':{const on=D.ac.mode!=='off',col=D.ac.mode==='heat'?'#ff9a6b':'#9fd6ff';return `${sh(75,102,56,6)}
    <rect x="14" y="6" width="112" height="26" rx="9" fill="url(#pW)" stroke="#cfd5de"/><path d="M22 27h96" stroke="#97a1ad" stroke-width="2.2" stroke-linecap="round"/><circle cx="114" cy="14" r="1.6" fill="${on?'#5ef0a5':'#aab'}"/>${hi('M22 9h88')}
    ${on?`<g stroke="${col}" stroke-width="2.4" stroke-linecap="round" opacity=".9"><path class="blow" d="M40 34v8"/><path class="blow d2" d="M70 34v8"/><path class="blow d3" d="M100 34v8"/></g>`:''}
    <rect x="36" y="50" width="74" height="50" rx="5" fill="url(#pW)" stroke="#cfd5de"/><circle cx="64" cy="75" r="19" fill="#1a1d23"/>${[15,11,7].map(r=>`<circle cx="64" cy="75" r="${r}" fill="none" stroke="#3b424d" stroke-width="1.1"/>`).join('')}
    <g class="${on?'spin2':''}" style="--du:1s;transform-origin:64px 75px"><path d="M64 75c-2-7 0-12 4-13 3 0 2 6-4 13zM64 75c7 1 10 4 9 8-1 2-6 0-9-8zM64 75c-4 5-9 7-12 3-1-3 4-5 12-3z" fill="#4a525e"/></g>
    ${[0,1,2,3,4,5].map(i=>`<rect x="90" y="${58+i*6}" width="14" height="2.2" rx="1" fill="#aeb6c2"/>`).join('')}`}
   case 'vac':{const on=D.vac!=='dock';return `${sh(80,101,62,6)}
    <path d="M58 98h64l-6-10H64z" fill="#d3d9e1"/><rect x="66" y="6" width="48" height="84" rx="11" fill="url(#pW)" stroke="#cfd5de"/><rect x="72" y="14" width="36" height="24" rx="5" fill="rgba(120,170,220,.45)" stroke="#a9b6c5"/><rect x="72" y="42" width="36" height="16" rx="4" fill="rgba(140,150,160,.35)" stroke="#b5bfca"/><circle cx="90" cy="70" r="2" fill="#5ef0a5"/>${hi('M70 10v74')}
    <g class="${on?'roam':''}"><ellipse cx="${on?34:52}" cy="96" rx="32" ry="7" fill="#000" opacity=".35" filter="url(#pSh)"/><g transform="translate(${on?-18:0} 0)"><path d="M20 88a32 9 0 0 0 64 0v4a32 9 0 0 1-64 0z" fill="#8d96a3"/><ellipse cx="52" cy="88" rx="32" ry="9" fill="url(#pW)" stroke="#c5ccd6"/><ellipse cx="52" cy="83" rx="7.5" ry="3.4" fill="url(#pW)" stroke="#aab4c0"/><circle cx="68" cy="88" r="1.3" fill="${on?'#5ef0a5':'#9aa3ae'}"/></g></g>`}
   case 'cover':{const w=Math.round(8+(100-D.cover)/100*38);return `${sh(75,102,54,5)}
    <rect x="30" y="12" width="90" height="86" rx="2" fill="url(#pSky)"/><rect x="30" y="12" width="90" height="86" rx="2" fill="none" stroke="#2a2f37" stroke-width="4"/><path d="M75 12v86M30 55h90" stroke="#2a2f37" stroke-width="2.4"/>
    <rect x="20" y="6" width="110" height="4.5" rx="2.2" fill="url(#pD)"/>
    <rect class="cur" x="24" y="10" width="${w}" height="92" fill="url(#pFab)"/><rect class="cur" x="${126-w}" y="10" width="${w}" height="92" fill="url(#pFab)"/>
    <rect class="cur" x="24" y="10" width="${w}" height="92" fill="url(#pWs)" opacity=".25"/>`}
   case 'mower':{const on=D.mower==='mow',wn=D.mower==='winter';return `<ellipse cx="75" cy="98" rx="66" ry="10" fill="url(#pGrass)"/>${sh(76,98,50,5)}
    <g class="${on?'roam':''}"><path d="M30 82c0-14 14-24 36-26h22c18 0 32 10 34 24v6H30z" fill="url(#pW)" stroke="#cfd5de"/><path d="M28 84h96v6c0 3-2 4-5 4H33c-3 0-5-1-5-4z" fill="url(#pD)"/>${hi('M44 66c8-6 18-8 30-8h14')}
    <circle cx="78" cy="62" r="4.4" fill="#e5484d" stroke="#8a1f2a"/><rect x="88" y="62" width="16" height="6" rx="2" fill="url(#pGl)"/>
    <circle cx="48" cy="90" r="13" fill="#1d2026"/><circle cx="48" cy="90" r="7" fill="url(#pRim)"/><circle cx="110" cy="93" r="7.5" fill="#1d2026"/><circle cx="110" cy="93" r="3.6" fill="url(#pRim)"/></g>
    ${wn?`<g fill="#fff">${[[30,20,0],[62,8,.8],[100,16,1.6],[124,30,.4],[84,30,1.2]].map(([x,y,dl])=>`<circle class="snow" style="animation-delay:${dl}s" cx="${x}" cy="${y}" r="2"/>`).join('')}</g>`:''}`}
   case 'lights':{const l1=D.lights.virtuve.on,l2=D.lights.svetaine.on;const lamp=(x,on,s)=>`<g transform="translate(${x} 0) scale(${s})"><path d="M0 0v26" stroke="#2a2f37" stroke-width="1.5"/>${on?`<ellipse class="glow" cx="0" cy="66" rx="40" ry="34" fill="url(#pGlow)"/>`:''}<path d="M-24 56c0-16 10-28 24-28s24 12 24 28z" fill="url(#pD)"/><ellipse cx="0" cy="56" rx="24" ry="5" fill="${on?'#ffe7a3':'#525a66'}"/>${on?'<circle cx="0" cy="58" r="5.5" fill="#fffbe8"/>':''}${hi('M-16 44c3-8 8-12 14-13')}</g>`;
    return `${lamp(48,l1,1)}${lamp(110,l2,.82)}`}
   case 'hum':{const on=D.hum.on;return `${sh(75,101,32,5)}<rect x="50" y="30" width="50" height="68" rx="14" fill="url(#pW)" stroke="#cfd5de"/><ellipse cx="75" cy="32" rx="25" ry="6" fill="#eef1f5" stroke="#cfd5de"/><ellipse cx="75" cy="32" rx="10" ry="2.6" fill="#8d96a3"/><rect x="60" y="60" width="30" height="20" rx="6" fill="rgba(130,185,240,.5)" stroke="#a9bfd6"/><path d="M60 ${80-Math.round(D.hum.cur/100*20)}h30" stroke="#5aa2e8" stroke-width="1.4"/>${hi('M54 40v50')}
    ${on?'<g stroke="rgba(255,255,255,.75)" stroke-width="3" fill="none" stroke-linecap="round"><path class="rise" d="M70 24q-4-6 0-12"/><path class="rise d2" d="M78 22q4-6 0-12"/><path class="rise d3" d="M74 18q-3-5 0-10"/></g>':''}`}
  }
  return '';
}
function avatar(k,size){
  const m=k==='jonas',id='av'+k+size,st=PST[D.people[k]];
  const hair=m?'<path d="M15.5 21c-.6-9 4-13.5 9.5-13.5S35.6 11 35 20.5c-2-3.6-5-5-9.6-5S18 17 15.5 21z" fill="#4a3020"/>':'<path d="M12.5 36c-2.5-15 1.5-28 12.5-28s15 12 12.5 28c-2.5-2-3.6-7-3.6-13-3.5 2.4-13 2.4-18 0 0 6-1 11-3.4 13z" fill="#a8482a"/>';
  const fr=m?'':'<path d="M16 20c1-7 5-10 9-10s9 3 9.6 10c-3-3-6-4.4-9.6-4.4S19 17 16 20z" fill="#b5532d"/>';
  return `<span class="av3" style="width:${size}px;height:${size}px;--bc:${st[1]}"><svg viewBox="0 0 50 50"><defs><linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${m?'#7aa7e6':'#f2b38f'}"/><stop offset="1" stop-color="${m?'#2f5aa6':'#b8634a'}"/></linearGradient><radialGradient id="${id}s" cx=".45" cy=".35"><stop offset="0" stop-color="#f7d5bd"/><stop offset="1" stop-color="#d9a283"/></radialGradient></defs>
   <rect width="50" height="50" rx="14" fill="url(#${id}b)"/>${m?'':hair}<path d="M6 50c2-10 9-14.5 19-14.5S42 40 44 50z" fill="${m?'#e9edf3':'#2d3a4f'}"/><rect x="21" y="28" width="8" height="9" rx="3" fill="#d39b7c"/><ellipse cx="25" cy="22.5" rx="9" ry="10.5" fill="url(#${id}s)"/>${m?hair:fr}
   <circle cx="21.6" cy="23" r=".95" fill="#2a2a2a"/><circle cx="28.4" cy="23" r=".95" fill="#2a2a2a"/><path d="M22 27.6q3 2 6 0" stroke="#9a5a48" stroke-width="1" fill="none" stroke-linecap="round"/></svg>
   <i class="bdg">${ic(D.people[k]==='home'?'home':D.people[k]==='work'?'case':'pin')}</i></span>`;
}
function tdef(d){
  const E=energy(),Y='#ffd166',G='#7ee08a',R='#ff7b72',B='#7cc4ff',N='rgba(255,255,255,.6)';
  switch(d){
   case 'sys':return {h:85,on:true,r:[['CPU','12','%'],['RAM','42','%']],s:'HA · Wi‑Fi · Zigbee',c:G};
   case 'alarm':{const on=D.alarm!=='off';return {h:on?0:140,on:true,r:[['Įėjimas','',''],['prieš 19 min','','']],s:on?'Apsaugota: '+optT('alarm',D.alarm).toLowerCase():'Apsauga išjungta',c:on?R:G,ppl:1}}
   case 'ev':{const ch=E.ev>0.05;return {h:160,on:ch,r:[['Hečbekas',ch?'78':'78','%'],['Universalas','45','%']],s:ch?'Kraunama '+f1(E.ev)+' kW':D.ev.mode==='cheap'?'Laukia pigios valandos':'Stotelė laisva',c:ch?G:N}}
   case 'bat':return {h:40,on:E.pv>0.1,r:[['Galia',f1(E.pv),'kW'],['Įkrova',Math.round(D.bat.soc),'%']],s:E.pv>0.1?'Gaminama':'Negaminama',c:Y};
   case 'cam':return {h:205,on:D.cam==='on',r:[[D.cam==='on'?'Įjungta':'Išjungta','',''],['judesys','14','min']],s:D.cam==='on'?'Įrašo judesį':'Privatumo režimas',c:D.cam==='on'?B:N};
   case 'weather':return {h:215,on:true,r:[['','4,0','°C'],['Jaučiasi','1','°'],['Vėjas','3–6','m/s']],s:'Debesuota · 1…6°',c:B};
   case 'heat':{const on=D.heat.mode!=='off';return {h:18,on,r:[['Vanduo','53','°C'],['Namie',f1(D.heat.t),'°C']],s:optT('heat',D.heat.mode),c:on?'#ff9f6b':N}}
   case 'rec':return {h:190,on:true,r:[['Tiekia','21,3','°C'],['CO₂','640','ppm']],s:optT('rec',D.rec.mode),c:B};
   case 'ac':{const on=D.ac.mode!=='off';return {h:205,on,r:[['Svetainė','23,7','°C'],['Lauke','4,0','°C']],s:on?optT('ac',D.ac.mode)+' · '+D.ac.t+'°':'Visi išjungti',c:on?B:N}}
   case 'vac':{const on=D.vac!=='dock';return {h:270,on,r:[['Baterija',on?'86':'100','%'],['Valė','prieš 2','d.']],s:on?(D.vac==='kitchen'?'Valo virtuvę':'Valo namus'):'Stotelėje',c:on?G:N}}
   case 'cover':return {h:30,on:D.cover>0,r:[['Svetainė',D.cover,'%'],['Miegamasis','0','%']],s:D.cover===0?'Uždarytos':D.cover===100?'Atidarytos':'Pravertos',c:N};
   case 'mower':{const on=D.mower==='mow';return {h:110,on,r:[['Baterija','92','%'],['Pjovė','spal. 28','']],s:optT('mower',D.mower),c:on?G:B}}
   case 'lights':{const n=Object.values(D.lights).filter(l=>l.on).length;return {h:45,on:n>0,r:[['Įjungta',n+'/3','']],s:n?'Šviečia: '+Object.values(D.lights).filter(l=>l.on).map(l=>l.n.toLowerCase()).join(', '):'Visos išjungtos',c:n?Y:N}}
   case 'hum':return {h:210,on:D.hum.on,r:[['Drėgmė',D.hum.cur,'%'],['Tikslas',D.hum.target,'%']],s:D.hum.on?'Drėkina':'Išjungtas',c:D.hum.on?B:N};
  }
}
const T3D=['sys','alarm','ev','bat','cam','weather','heat','rec','ac','vac','cover','mower','lights','hum'];
function body3(d){
  const row=(a,b)=>`<div class="lrow"><span>${a}</span><b>${b}</b></div>`;
  if(d==='sys')return row('Procesorius','12 %')+row('Atmintis','42 %')+row('Temperatūra','57 °C')+row('Zigbee įrenginiai','38')+row('Paskutinė atsarginė kopija','šiandien 03:00')+'<div class="sub">HA praneša, jei serveris perkaista, baigiasi vieta ar dingsta ryšys su įrenginiu.</div>';
  if(d==='weather')return row('Dabar','4,0 °C')+row('Jaučiasi','1 °C')+row('Vėjas','3–6 m/s')+row('Šiandien','1…6 °C, lietus')+row('Rytoj saulės','~9 kWh')+'<div class="sub">Prognozė naudojama šildymui ir saulės gamybai planuoti.</div>';
  if(d==='people')return Object.keys(PPL).map(k=>`<div class="lrow" data-a="person:${k}" style="cursor:pointer">${avatar(k,38)}<span>${PPL[k].n}<small style="display:block;opacity:.7;font-weight:600">${PST[D.people[k]][0]}</small></span><b style="font-size:12px;opacity:.75">keisti</b></div>`).join('')+'<div class="sub">Buvimo vieta nustatoma pagal telefoną. Kai visi išvyksta – įsijungia apsauga ir Eco šildymas.</div>';
  return body(d);
}
function T3(){
  let main='';
  if(t3tab==='home'){
    let tiles='';
    T3D.forEach(d=>{const t=tdef(d);
      tiles+=`<div class="pt ${t.on?'on':''} ${open===d?'sel':''}" style="--h:${t.h}" data-a="open:${d}"><div class="art"><svg viewBox="0 0 150 110">${art3(d)}</svg></div>
       ${t.ppl?`<div class="ppl" data-a="open:people">${avatar('jonas',46)}${avatar('ruta',46)}</div><div class="vals vl2">${t.r.map(r=>`<div>${r[0]}</div>`).join('')}</div>`
       :`<div class="vals">${t.r.map(r=>`<div>${r[0]}${r[1]!==''?`<b>${r[1]}</b><u>${r[2]}</u>`:''}</div>`).join('')}</div>`}
       <div class="nm">${nm3(d)}</div><div class="stt" style="color:${t.c}">${esc(t.s)}</div></div>`;
      if(open===d||(open==='people'&&d==='alarm'))tiles+=`<div class="pn glass" style="--h:${t.h}"><div class="pn-h">${nm3(open)}<button class="x" data-a="close" aria-label="Uždaryti">${ic('x')}</button></div>${body3(open)}</div>`;
    });
    main=`<div class="sc3"><button data-a="scene:home">${ic('inh')}Grįžau</button><button data-a="scene:away">${ic('out')}Išvykstu</button><button data-a="scene:night">${ic('moon')}Naktis</button></div><div class="pg">${tiles}</div>`;
  }else if(t3tab==='energy'){
    const k=(a,b,c)=>`<div class="glass ek"><small>${a}</small><b>${b}</b><span>${c}</span></div>`;
    main=`<div class="eg"><div class="glass ef"><h5><span>Energijos srautai</span><span>gyvai</span></h5><div id="flow3">${flowSVG()}</div></div>
     <div class="eks">${k('Pagaminta šiandien','24,6','kWh')}${k('Suvartota','18,2','kWh')}${k('Parduota','6,1','kWh')}${k('Sutaupyta','3,40','€')}${k('Kaina dabar','0,11','€/kWh')}${k('Pigiausia naktį','02–05','val.')}</div></div>`;
  }else{
    main=`<div class="al">${D.autos.map((a,i)=>`<div class="glass ar"><div><b>${a[0]}</b><small>${a[1]}</small></div><button class="tgl ${a[2]?'on':''}" data-a="auto:${i}" aria-label="${a[0]}"></button></div>`).join('')}</div>`;
  }
  const nb=(t,i,l)=>`<button class="${t3tab===t?'on':''}" data-a="tab3:${t}">${ic(i)}${l}</button>`;
  return `<div class="t3">${DEFS}${main}<nav class="nav3">${nb('home','home','Namai')}${nb('energy','bolt','Energija')}${nb('auto','grid','Automatizacijos')}</nav></div>`;
}

const TIERS={1:{f:T1,frame:'phone',name:'Standartinis',info:'Įskaičiuotas į kainą. Standartiniai Home Assistant elementai: sąrašai, jungikliai ir nustatymų langai. Valdyti galima viską, tik be individualaus dizaino.'},
 2:{f:T2,frame:'phone',name:'Individualus',info:'Skydelis pagal jūsų namus: scenarijų mygtukai, energijos kortelė, spalvotos įrenginių plytelės. Paspaudus plytelę atsiveria visi pasirinkimai su trumpais paaiškinimais.'},
 3:{f:T3,frame:'tablet',name:'Premium',info:'Tikroviški įrenginių vaizdai ir animacijos: sukasi ventiliatoriai, šviečia lempos, lyja debesis, kraunasi automobilis. Matosi, kas namie, energijos srautai ir automatizacijos. Tinka telefonui ir sieninei planšetei (planšetė – atskirai).'}};
function renderDemo(){
  const T=TIERS[tier];
  $('#demoFrame').className='frame '+T.frame;
  $('#demoStage').classList.toggle('wide',T.frame==='tablet');
  const sc=$('#demoScreen'),top=sc.scrollTop;sc.innerHTML=T.f();sc.scrollTop=top;
  document.querySelectorAll('.dtab').forEach(b=>b.classList.toggle('on',+b.dataset.tier===tier));
  $('#demoInfo').textContent=T.info;
}
function demoAct(a,el){
  const [k,x,y]=a.split(':');
  if(k==='open'){open=open===x?null:x;if(open)say((tier===3?nm3(x):DNAME[x])+': atidaryti '+(x==='people'?'buvimo vietos':'nustatymai'),tier===1?'Atsidaro standartinis nustatymų langas su visais režimais.':'Po plytele atsiveria visi pasirinkimai su paaiškinimais – nieko neįsijungia netyčia.');renderDemo();return}
  if(k==='close'){open=null;renderDemo();return}
  if(k==='tab3'){t3tab=x;open=null;say('Skirtukas „'+({home:'Namai',energy:'Energija',auto:'Automatizacijos'})[x]+'“',({home:'Visi namų įrenginiai vienoje vietoje – paspaudus plytelę atsiveria jos nustatymai.',energy:'Gyvi energijos srautai: saulė, namai, baterija, elektromobilis ir tinklas.',auto:'Automatizacijas galima įjungti ar laikinai išjungti vienu paspaudimu.'})[x]);renderDemo();$('#demoScreen').scrollTop=0;return}
  if(k==='auto'){const a=D.autos[+x];a[2]=a[2]?0:1;say(a[0]+': '+(a[2]?'įjungta':'išjungta'),a[2]?'Automatizacija vėl veiks pati: '+a[1].toLowerCase()+'.':'Automatizacija laikinai sustabdyta – nieko nebus daroma automatiškai.')}
  if(k==='person'){const o=['home','work','road'],c=D.people[x];D.people[x]=o[(o.indexOf(c)+1)%3];say(PPL[x].n+': '+PST[D.people[x]][0].toLowerCase(),'Buvimo vieta ateina iš telefono programėlės. Pagal ją HA gali įjungti apsaugą, kai visi išvyksta, ar pašildyti namus prieš grįžtant.')}
  if(k==='light'){const l=D.lights[x];l.on=!l.on;say(l.n+': šviesa '+(l.on?'įjungta':'išjungta'),'HA siunčia komandą lemputei ar jungikliui per Zigbee arba Wi-Fi – reakcija per sekundės dalį.')}
  if(k==='allon'){Object.values(D.lights).forEach(l=>{l.on=true;l.br=80});say('Visos šviesos įjungtos','Viena komanda visoms namų lemputėms – 80 % ryškumu.')}
  if(k==='alloff'){Object.values(D.lights).forEach(l=>l.on=false);say('Visos šviesos išjungtos','Patogu išeinant iš namų ar einant miegoti.')}
  if(k==='opt')setOpt(x,y);
  if(k==='scene'){scene(x);if(el)setTimeout(()=>{const b=$('#demoScreen').querySelector(`[data-a="scene:${x}"]`);b&&b.classList.add('fx')},0)}
  if(k==='tmp'){const s=y==='+'?1:-1;
    if(x==='heat'){D.heat.t=Math.min(26,Math.max(16,D.heat.t+s*0.5));say('Šildymas: '+f1(D.heat.t)+' °C','Nauja temperatūra perduodama šilumos siurbliui – jis pats pakoreguoja galią.')}
    if(x==='ac'){D.ac.t=Math.min(30,Math.max(17,D.ac.t+s));say('Kondicionierius: '+D.ac.t+' °C','Temperatūra perduodama kondicionieriui per Wi-Fi.')}
    if(x==='hum'){D.hum.target=Math.min(65,Math.max(30,D.hum.target+s*5));say('Drėgmės tikslas: '+D.hum.target+' %','Drėkintuvas dirbs, kol kambaryje bus pasiekta ši drėgmė.')}}
  renderDemo();
}
function initDemo(){
  const sc=$('#demoScreen');
  sc.addEventListener('click',e=>{
    const el=e.target.closest('[data-a]');if(!el||!sc.contains(el))return;
    if(el.dataset.a==='close'&&e.target.closest('[data-stop]')&&!e.target.closest('.x'))return;
    demoAct(el.dataset.a,el);
  });
  sc.addEventListener('change',e=>{
    const r=e.target.dataset.r;if(!r)return;
    if(r.startsWith('br:')){const l=D.lights[r.slice(3)];l.br=+e.target.value;say(l.n+': ryškumas '+l.br+' %','Ryškumas keičiamas sklandžiai – galima susieti su paros laiku.')}
    if(r==='cov'){D.cover=+e.target.value;say('Užuolaidos: '+D.cover+' %','Variklis sustoja tiksliai nurodytoje padėtyje.')}
    renderDemo();
  });
  document.querySelectorAll('.dtab').forEach(b=>b.onclick=()=>{tier=+b.dataset.tier;open=null;renderDemo()});
  $('#demoPick').onclick=()=>{sel.dash=({1:'std',2:'ind',3:'wall'})[tier];renderOpts();renderSum(pricing());location.hash='skaiciuotuvas'};
  setInterval(()=>{
    if(document.hidden || (!document.querySelector('#p-paslaugos.on') && !pvOpen))return;
    D.pv=Math.max(5.6,Math.min(7.6,D.pv+(Math.random()-.5)*0.4));
    const E=energy();D.bat.soc=Math.max(10,Math.min(100,D.bat.soc+E.bat*0.05));
    D.hum.cur+=D.hum.on&&D.hum.cur<D.hum.target?1:(!D.hum.on&&D.hum.cur>36?-1:0);
    if(tier===3){const f=$('#flow3');if(f)f.innerHTML=flowSVG()}
    else if(!open)renderDemo();
  },3000);
  renderLog();renderDemo();
}
var pvOpen=false;
function openPreview(t){
  tier=t;open=null;const host=$('#dashPreview');
  host.appendChild($('#demoStage'));host.classList.add('on');document.body.classList.add('noscroll');pvOpen=true;
  $('#pvTitle').textContent='Pavyzdys: '+({1:'Standartinis skydelis',2:'Individualus skydelis',3:'Premium skydelis'})[t];
  renderDemo();renderOpts();
}
function closePreview(){$('#dashPreview').classList.remove('on');document.body.classList.remove('noscroll');$('#demo').appendChild($('#demoStage'));pvOpen=false;renderOpts()}
$('#o-dash').addEventListener('click',e=>{const b=e.target.closest('[data-pv]');if(!b)return;e.preventDefault();e.stopPropagation();const t=PVT[b.dataset.pv];if(pvOpen&&tier===t)closePreview();else openPreview(t)});
$('#pvLink').onclick=()=>pvOpen?closePreview():openPreview(PVT[sel.dash]);
$('#pvClose').onclick=closePreview;
document.body.appendChild($('#dashPreview'));
$('#dashPreview').addEventListener('click',e=>{if(e.target.id==='dashPreview')closePreview()});
document.querySelectorAll('.dtab').forEach(b=>b.addEventListener('click',()=>{if(pvOpen)closePreview()}));
fillIcons();

/* ===================== ŽINGSNIAI (išskleidžiami) ===================== */
const ACC=['server','remote','dash','tab','voice','auto','care','dev'];
function accOpen(k,only){document.querySelectorAll('.acc').forEach(x=>{if(x.dataset.acc===k)x.classList.toggle('open',only?true:!x.classList.contains('open'));else if(only)x.classList.remove('open')})}
document.querySelector('.accs').addEventListener('click',e=>{
  const t=e.target.closest('[data-acc-t]');if(t){accOpen(t.dataset.accT);return}
  const n=e.target.closest('[data-next]');if(n){const k=ACC[ACC.indexOf(n.dataset.next)+1];accOpen(k,true);setTimeout(()=>document.querySelector(`.acc[data-acc="${k}"]`).scrollIntoView({behavior:'smooth',block:'start'}),60)}
});
function accSum(P){
  const pick=(g)=>OPTS[g].items.find(x=>x.id===sel[g]);
  const set=(k,t,pr)=>{const a=$('#accs-'+k),b=$('#accp-'+k);if(a)a.textContent=t;if(b)b.textContent=pr};
  const sv=pick('server'),zb=sel.zb.length;set('server',sv.t+(zb?' + Zigbee adapteris':''),'nuo '+eur(BASE_SETUP_PRICE));
  {const r=pick('remote');set('remote',r.t,r.m?'nuo '+r.p+' €/mėn.':r.p?'nuo '+eur(r.p):'')}
  const d=pick('dash');set('dash',d.t,d.p?'nuo '+eur(d.p):'Įskaičiuota');
  {const t=pick('tab');set('tab',t.id==='none'?'Nereikia':t.t,t.p?'nuo '+eur(t.p):'')}
  {const v=sel.voice.map(id=>OPTS.voice.items.find(x=>x.id===id));set('voice',v.length?v.map(x=>x.t).join(', '):'Nepasirinkta',v.length?'nuo '+eur(v.reduce((a,x)=>a+x.p,0)):'')}
  const au=sel.auto.map(id=>OPTS.auto.items.find(x=>x.id===id));set('auto',au.length?au.map(x=>x.t).join(', '):'Nepasirinkta',au.length?'nuo '+eur(au.reduce((a,x)=>a+x.p,0)):'');
  const c=pick('care');set('care',c.t,c.p?'nuo '+c.p+' €/mėn.':'');
  const n=items.reduce((a,i)=>a+i.qty,0),dv=P.lines.filter(l=>l.c).reduce((a,l)=>a+l.total,0);
  set('dev',n?n+' prijungiami':'Dar nepridėta',n?'nuo '+eur(dv):'');
}
initDemo();
renderOpts();
renderItems();
let sumVis=false;try{accSum(pricing())}catch(_){}
try{new IntersectionObserver(es=>{sumVis=es[0].isIntersecting;updTot()},{threshold:0.15}).observe($('#summary'))}catch(_){}
function updTot(){const on=['skaiciuotuvas','iranga'].includes(location.hash.slice(1))&&!sumVis;document.body.classList.toggle('tb-on',on)}
addEventListener('hashchange',updTot);updTot();
$('#tbGo').onclick=()=>{if(!['#skaiciuotuvas','#iranga'].includes(location.hash)){location.hash='skaiciuotuvas';setTimeout(()=>$('#summary')?.scrollIntoView({behavior:'smooth',block:'start'}),80)}else $('#summary')?.scrollIntoView({behavior:'smooth',block:'start'})};
