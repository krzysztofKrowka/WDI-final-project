import { Mushroom, Funfact } from "../../types";
import borowik from "../mushroomPhotos/borowik.png";
import muchomor from "../mushroomPhotos/muchomor.png";
import kurka from "../mushroomPhotos/kurka.png";
import pieczarka from "../mushroomPhotos/pieczarka.png";
import kolczakowka from "../mushroomPhotos/kolczakowka.png";
import dzbankowka from "../mushroomPhotos/dzbankowka.png";
import soplowka from "../mushroomPhotos/soplowka.png";
import lejkowiec from "../mushroomPhotos/lejkowiec.png";
import prochnilec from "../mushroomPhotos/prochnilec.png";
import okratek from "../mushroomPhotos/okratek.png";
import massospora from "../mushroomPhotos/massospora.png";
import swiatlo from "../mushroomPhotos/swiatlo.png";
import palce from "../mushroomPhotos/palce.png";
import buty from "../mushroomPhotos/buty.png";
import asfalt from "../mushroomPhotos/asfalt.png";
import www from "../mushroomPhotos/www.png";
import alko from "../mushroomPhotos/alko.png";
import berserk from "../mushroomPhotos/berserk.png";
import speed from "../mushroomPhotos/speed.png";
import bursztyn from "../mushroomPhotos/bursztyn.png";
import connect from "../mushroomPhotos/connect.png";
import mars from "../mushroomPhotos/mars.png";
export const Mushrooms: Mushroom[] = [
    {
        name: 'Borowik szlachetny',
        desc: 'Borowik szlachetny to najbardziej ceniony polski grzyb, wyróżniający się brązowym kapeluszem i pękatym trzonem. Ten wyśmienity gatunek 	jadalny słynie z intensywnego aromatu oraz łagodnego, orzechowego smaku. Występuje w lasach iglastych i mieszanych, stanowiąc główne trofeum każdego 	grzybiarza.',
        photo: borowik,
        edible: true,
        rating: 5 // 0-5
    },
    {
        name: 'Muchomor czerwony',
        desc: 'Muchomor czerwony jest łatwo rozpoznawalny dzięki charakterystycznemu, czerwonemu kapeluszowi pokrytemu białymi kropkami. To grzyb trujący i 	halucynogenny, który zawiera niebezpieczne dla człowieka substancje psychoaktywne. Często występuje w lasach iglastych oraz liściastych, chętnie 	rosnąc w sąsiedztwie brzóz',
        photo: muchomor,
        edible: false,
        rating: 1 // 0-5
    },
    {
        name: 'Kurka',
        desc: 'Pieprznik jadalny, powszechnie znany jako kurka, wyróżnia się intensywnie żółtą barwą i pofałdowanymi blaszkami pod kapeluszem. Jest to 	ceniony grzyb jadalny, który dzięki swoim specyficznym właściwościom prawie nigdy nie bywa robaczywy. Występuje pospolicie w polskich lasach, często 	rosnąc w dużych skupiskach wśród mchu.',
        photo: kurka,
        edible: true,
        rating: 4 // 0-5
    },
    {
        name: 'Pieczarka polna',
        desc: 'Pieczarka polna to smaczny grzyb jadalny rosnący głównie na łąkach i pastwiskach. Jej blaszki pod białym kapeluszem ciemnieją z wiekiem od 	jasnego różu do ciemnego brązu. Trzeba uważać, by podczas zbiorów nie pomylić jej z trującym muchomorem jadowitym.',
        photo: pieczarka,
        edible: true,
        rating: 3 // 0-5
    },
    {
        name: 'Kolczakówka Piekąca',
        desc: 'Kolczakówka piekąca wyróżnia się białym owocnikiem pokrytym jaskrawoczerwonymi kroplami gęstej wydzieliny. Jest to grzyb niejadalny ze 	względu na wyjątkowo piekący i gorzki smak. W Polsce ten rzadki gatunek objęto ścisłą ochroną gatunkową.',
        photo: kolczakowka,
        edible: false,
        rating: 4 // 0-5
    },
    {
        name: 'Dzbankówka kulista',
        desc: 'Dzbankówka kulista to grzyb tak unikatowy, że przez ponad 100 lat uznawano go w Polsce za gatunek całkowicie wymarły. Jego owocnik przypomina 	ciemną, aksamitną baryłkę wypełnioną wewnątrz przezroczystą, wodnistą galaretą. Obecnie znanych jest zaledwie kilka stanowisk tego ściśle 	chronionego dziwu natury.',
        photo: dzbankowka,
        edible: true,
        rating: 3 // 0-5
    },
    {
        name: 'Soplówka jeżowata',
        desc: 'Jej owocnik wygląda jak biała, puszysta kula złożona z wiszących igieł. To gatunek bardzo rzadki i objęty w Polsce ścisłą ochroną. Jest 	ceniona w uprawie ze względu na właściwości wspierające mózg.',
        photo: soplowka,
        edible: true,
        rating: 5 // 0-5
    },
    {
        name: 'Lejkowiec dęty',
        desc: 'Wygląda jak ciemny, pusty w środku lejek lub grafitowa trąbka. Ze względu na wyśmienity, korzenny aromat nazywany jest często „truflą dla 	ubogich”. Bardzo trudno go dostrzec w lesie, ponieważ idealnie zlewa się ze ściółką.',
        photo: lejkowiec,
        edible: true,
        rating: 2 // 0-5
    },
    {
        name: 'Próchnilec maczugowaty',
        desc: 'Wygląda jak ciemny, pusty w środku lejek lub grafitowa trąbka. Ze względu na wyśmienity, korzenny aromat nazywany jest często „truflą dla 	ubogich”. Bardzo trudno go dostrzec w lesie, ponieważ idealnie zlewa się ze ściółką.',
        photo: prochnilec,
        edible: false,
        rating: 1 // 0-5
    },
    {
        name: 'Okratek australijski',
        desc: 'Wygląda jak czerwona ośmiornica lub szpony wydostające się z pękniętego jaja. Wydziela silny zapach psującego się mięsa, by przyciągnąć 	muchy. Jest to gatunek inwazyjny, który przywędrował do nas z Australii.',
        photo: okratek,
        edible: false,
        rating: 5 // 0-5
    }


];


export const FunfactsData: Funfact[] = [
    {
        title: "Czy wiedziałeś, że?",
        body: " Massospora cicadina infekuje cykady w taki sposób, że ich odwłoki odpadają, a w ich miejscu pojawia się biała masa zarodników. Grzyb steruje ich zachowaniem, by zarażały kolejne osobniki.",
        photo: massospora
    },
    {
        title: "Czy wiedziałeś, że?",
        body: " Mycena chlorophos świeci intensywnym zielonym światłem. Nie jest to przypadek – blask przyciąga nocne owady, które chodząc po grzybie, nieświadomie zbierają zarodniki i roznoszą je w inne części lasu.",
        photo: swiatlo
    },
    {
        title: "Czy wiedziałeś, że?",
        body: " Próchnilec maczugowaty (Xylaria polymorpha) wygląda jak palce umarlaka. Mimo swojego wyglądu pełni pełni pożyteczną funkcję jaką jest rozkładanie drewna",
        photo: palce
    },
    {
        title: "Czy wiedziałeś, że?",
        body: " Z grzybni można wyhodować elastyczną masę, która po obróbce do złudzenia przypomina skórę zwierzęcą. Jest trwała, ekologiczna i w pełni biodegradowalna.",
        photo: buty
    },
    {
        title: "Czy wiedziałeś, że?",
        body: " Grzyby rosnąc, generują ogromne ciśnienie wewnętrzne. Jest ono tak silne, że delikatny z pozoru owocnik potrafi bez problemu rozsadzić warstwę asfaltu lub betonu.",
        photo: asfalt
    },
    {
        title: "Czy wiedziałeś, że?",
        body: " WWW (Wood Wide Web) jest to podziemna sieć mikoryzowa tworzona przez grzyby, łącząca korzenie drzew w całym lesie. Dzięki temu mogą np. przesyłać składniki odżywcze lub ostrzegać się przed szkodnikami.",
        photo: www
    },
    {
        title: "Czy wiedziałeś, że?",
        body: " Czernidlak pospolity zawiera substancję, która sama w sobie nie szkodzi, ale blokuje rozkład alkoholu w organizmie. Zjedzenie go i wypicie nawet małej ilości piwa kończy się bardzo silnym, natychmiastowym zatruciem.",
        photo: alko
    },
    {
        title: "Ciekawostka",
        body: " Istnieje teoria, że legendarni Berserkowie jedli przed bitwą muchomory czerwone. Zawarte w nich związki miały wprowadzać ich w stan bojowej furii, dawać im nadludzką siłę i sprawiać, że nie czuli strachu ani bólu.",
        photo: berserk
    },
    {
        title: "Ciekawostka",
        body: " Zarodniki grzyba Pilobolus przyspieszają od 0 do 20 m/s w jedną milionową sekundy, są to najszybciej przyspieszające obiekty w przyrodzie. Są wystrzeliwane tak szybko, że gdyby człowiek poddał się takiemu przeciążeniu, zostałby natychmiast zmiażdżony. ",
        photo: speed
    },
    {
        title: "Ciekawostka",
        body: " Zarodniki grzybów są niezwykle odporne na warunki zewnętrzne. Znaleziono okazy uwięzione w bursztynie sprzed milionów lat, które po wydobyciu i podaniu wody nadal były w stanie wykiełkować.",
        photo: bursztyn
    },
    {
        title: "Ciekawostka",
        body: " Badania pokazują, że psylocybina dosłownie 'przebudowuje' na chwilę komunikację w mózgu. Obszary, które normalnie ze sobą nie współpracują, nagle zaczynają wymieniać dane, co pozwala spojrzeć na stare problemy w zupełnie nowy sposób. ",
        photo: connect
    },
    {
        title: "Ciekawostka",
        body: " NASA poważnie bada projekt 'myko - architektury'. Zamiast wysyłać na Marsa ciężkie materiały, planują zabrać lekką grzybnię, która na miejscu – po dodaniu wody – sama 'wyrośnie' w gotowe, wytrzymałe bazy dla astronautów. ",
        photo: mars
    }
];