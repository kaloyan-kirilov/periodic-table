function color(class_name) {
    const html_element = document.getElementsByClassName(class_name)[0];
    const css_style = window.getComputedStyle(html_element);
    const style_value = css_style.getPropertyValue('background-color');

    return style_value
}

const alkali_metals = color("alkali-metals");
const alkaline_earth_metals = color("alkaline-earth-metals");
const transition_metals = color("transition-metals");
const other_metals = color("other-metals");
const metalloids = color("metalloids");
const non_metals = color("non-metals");
const halogens = color("halogens");
const noble_gases = color("noble-gases");
const lanthanides = color("lanthanides");
const actinides = color("actinides");

const H = {
    group: "1",
    period: "1",
    number: "1",
    symbol: "H",
    name: "Hydrogen",
    mass: "1.0078",
    radius: "53",
    shells: "1",
    series: "Non-metals",
    color: non_metals
}

const He = {
    group: "18",
    period: "1",
    number: "2",
    symbol: "He",
    name: "Helium",
    mass: "4.0026",
    radius: "31",
    shells: "2",
    series: "Noble Gas",
    color: noble_gases
}

const Li = {
    group: "1",
    period: "2",
    number: "3",
    symbol: "Li",
    name: "Lithium",
    mass: "6.9410",
    radius: "167",
    shells: "2 1",
    series: "Alkali Metals",
    color: alkali_metals
}

const Be = {
    group: "2",
    period: "2",
    number: "4",
    symbol: "Be",
    name: "Beryllium",
    mass: "9.0122",
    radius: "112",
    shells: "2 2",
    series: "Alkaline Earth Metals",
    color: alkaline_earth_metals
}

const B = {
    group: "13",
    period: "2",
    number: "5",
    symbol: "B",
    name: "Boron",
    mass: "10.811",
    radius: "87",
    shells: "2 3",
    series: "Metalloids",
    color: metalloids
}

const C = {
    group: "14",
    period: "2",
    number: "6",
    symbol: "C",
    name: "Carbon",
    mass: "12.011",
    radius: "67",
    shells: "2 4",
    series: "Non-metals",
    color: non_metals
}

const N = {
    group: "15",
    period: "2",
    number: "7",
    symbol: "N",
    name: "Nitrogen",
    mass: "14.007",
    radius: "56",
    shells: "2 5",
    series: "Non-metals",
    color: non_metals
}

const O = {
    group: "16",
    period: "2",
    number: "8",
    symbol: "O",
    name: "Oxygen",
    mass: "15.999",
    radius: "48",
    shells: "2 6",
    series: "Non-metals",
    color: non_metals
}

const F = {
    group: "17",
    period: "2",
    number: "9",
    symbol: "F",
    name: "Fluorine",
    mass: "18.998",
    radius: "42",
    shells: "2 7",
    series: "Halogens",
    color: halogens
}

const Ne = {
    group: "18",
    period: "2",
    number: "10",
    symbol: "Ne",
    name: "Neon",
    mass: "20.180",
    radius: "38",
    shells: "2 8",
    series: "Noble Gas",
    color: noble_gases
}

const Na = {
    group: "1",
    period: "3",
    number: "11",
    symbol: "Na",
    name: "Sodium",
    mass: "22.990",
    radius: "190",
    shells: "2 8 1",
    series: "Alkali Metals",
    color: alkali_metals
}

const Mg = {
    group: "2",
    period: "3",
    number: "12",
    symbol: "Mg",
    name: "Magnesium",
    mass: "24.305",
    radius: "145",
    shells: "2 8 2",
    series: "Alkaline Earth Metals",
    color: alkaline_earth_metals
}

const Al = {
    group: "13",
    period: "3",
    number: "13",
    symbol: "Al",
    name: "Aluminium",
    mass: "26.982",
    radius: "118",
    shells: "2 8 3",
    series: "Other Metals",
    color: other_metals
}

const Si = {
    group: "14",
    period: "3",
    number: "14",
    symbol: "Si",
    name: "Silicon",
    mass: "28.086",
    radius: "111",
    shells: "2 8 4",
    series: "Metalloids",
    color: metalloids
}

const P = {
    group: "15",
    period: "3",
    number: "15",
    symbol: "P",
    name: "Phosphorus",
    mass: "30.974",
    radius: "98",
    shells: "2 8 5",
    series: "Non-metals",
    color: non_metals
}

const S = {
    group: "16",
    period: "3",
    number: "16",
    symbol: "S",
    name: "Sulfur",
    mass: "32.065",
    radius: "88",
    shells: "2 8 6",
    series: "Non-metals",
    color: non_metals
}

const Cl = {
    group: "17",
    period: "3",
    number: "17",
    symbol: "Cl",
    name: "Chlorine",
    mass: "35.453",
    radius: "79",
    shells: "2 8 7",
    series: "Halogens",
    color: halogens
}

const Ar = {
    group: "18",
    period: "3",
    number: "18",
    symbol: "Ar",
    name: "Argon",
    mass: "39.948",
    radius: "71",
    shells: "2 8 8",
    series: "Noble Gas",
    color: noble_gases
}

const K = {
    group: "1",
    period: "4",
    number: "19",
    symbol: "K",
    name: "Potassium",
    mass: "39.098",
    radius: "243",
    shells: "2 8 8 1",
    series: "Alkali Metals",
    color: alkali_metals
}

const Ca = {
    group: "2",
    period: "4",
    number: "20",
    symbol: "Ca",
    name: "Calcium",
    mass: "40.078",
    radius: "194",
    shells: "2 8 8 2",
    series: "Alkaline Earth Metals",
    color: alkaline_earth_metals
}

const Sc = {
    group: "3",
    period: "4",
    number: "21",
    symbol: "Sc",
    name: "Scandium",
    mass: "44.956",
    radius: "184",
    shells: "2 8 9 2",
    series: "Transition Metals",
    color: transition_metals
}

const Ti = {
    group: "4",
    period: "4",
    number: "22",
    symbol: "Ti",
    name: "Titanium",
    mass: "47.867",
    radius: "176",
    shells: "2 8 10 2",
    series: "Transition Metals",
    color: transition_metals
}

const V = {
    group: "5",
    period: "4",
    number: "23",
    symbol: "V",
    name: "Vanadium",
    mass: "50.942",
    radius: "171",
    shells: "2 8 11 2",
    series: "Transition Metals",
    color: transition_metals
}

const Cr = {
    group: "6",
    period: "4",
    number: "24",
    symbol: "Cr",
    name: "Chromium",
    mass: "51.996",
    radius: "166",
    shells: "2 8 13 1",
    series: "Transition Metals",
    color: transition_metals
}

const Mn = {
    group: "7",
    period: "4",
    number: "25",
    symbol: "Mn",
    name: "Manganese",
    mass: "54.938",
    radius: "161",
    shells: "2 8 13 2",
    series: "Transition Metals",
    color: transition_metals
}

const Fe = {
    group: "8",
    period: "4",
    number: "26",
    symbol: "Fe",
    name: "Iron",
    mass: "55.845",
    radius: "156",
    shells: "2 8 14 2",
    series: "Transition Metals",
    color: transition_metals
}

const Co = {
    group: "9",
    period: "4",
    number: "27",
    symbol: "Co",
    name: "Cobalt",
    mass: "58.933",
    radius: "152",
    shells: "2 8 15 2",
    series: "Transition Metals",
    color: transition_metals
}

const Ni = {
    group: "10",
    period: "4",
    number: "28",
    symbol: "Ni",
    name: "Nickel",
    mass: "58.693",
    radius: "149",
    shells: "2 8 16 2",
    series: "Transition Metals",
    color: transition_metals
}

const Cu = {
    group: "11",
    period: "4",
    number: "29",
    symbol: "Cu",
    name: "Copper",
    mass: "63.546",
    radius: "145",
    shells: "2 8 18 1",
    series: "Transition Metals",
    color: transition_metals
}

const Zn = {
    group: "12",
    period: "4",
    number: "30",
    symbol: "Zn",
    name: "Zinc",
    mass: "65.380",
    radius: "142",
    shells: "2 8 18 2",
    series: "Transition Metals",
    color: transition_metals
}

const Ga = {
    group: "13",
    period: "4",
    number: "31",
    symbol: "Ga",
    name: "Gallium",
    mass: "69.723",
    radius: "136",
    shells: "2 8 18 3",
    series: "Other Metals",
    color: other_metals
}

const Ge = {
    group: "14",
    period: "4",
    number: "32",
    symbol: "Ge",
    name: "Germanium",
    mass: "72.640",
    radius: "125",
    shells: "2 8 18 4",
    series: "Metalloids",
    color: metalloids
}

const As = {
    group: "15",
    period: "4",
    number: "33",
    symbol: "As",
    name: "Arsenic",
    mass: "74.922",
    radius: "114",
    shells: "2 8 18 5",
    series: "Metalloids",
    color: metalloids
}

const Se = {
    group: "16",
    period: "4",
    number: "34",
    symbol: "Se",
    name: "Selenium",
    mass: "78.960",
    radius: "103",
    shells: "2 8 18 6",
    series: "Non-metals",
    color: non_metals
}

const Br = {
    group: "17",
    period: "4",
    number: "35",
    symbol: "Br",
    name: "Bromine",
    mass: "79.904",
    radius: "94",
    shells: "2 8 18 7",
    series: "Halogens",
    color: halogens
}

const Kr = {
    group: "18",
    period: "4",
    number: "36",
    symbol: "Kr",
    name: "Krypton",
    mass: "83.798",
    radius: "88",
    shells: "2 8 18 8",
    series: "Noble Gas",
    color: noble_gases
}

const Rb = {
    group: "1",
    period: "5",
    number: "37",
    symbol: "Rb",
    name: "Rubidium",
    mass: "85.468",
    radius: "265",
    shells: "2 8 18 8 1",
    series: "Alkali Metals",
    color: alkali_metals
}

const Sr = {
    group: "2",
    period: "5",
    number: "38",
    symbol: "Sr",
    name: "Strontium",
    mass: "87.620",
    radius: "219",
    shells: "2 8 18 8 2",
    series: "Alkaline Earth Metals",
    color: alkaline_earth_metals
}

const Y = {
    group: "3",
    period: "5",
    number: "39",
    symbol: "Y",
    name: "Yttrium",
    mass: "88.906",
    radius: "212",
    shells: "2 8 18 9 2",
    series: "Transition Metals",
    color: transition_metals
}

const Zr = {
    group: "4",
    period: "5",
    number: "40",
    symbol: "Zr",
    name: "Zirconium",
    mass: "91.224",
    radius: "206",
    shells: "2 8 18 10 2",
    series: "Transition Metals",
    color: transition_metals
}

const Nb = {
    group: "5",
    period: "5",
    number: "41",
    symbol: "Nb",
    name: "Niobium",
    mass: "92.906",
    radius: "198",
    shells: "2 8 18 12 1",
    series: "Transition Metals",
    color: transition_metals
}

const Mo = {
    group: "6",
    period: "5",
    number: "42",
    symbol: "Mo",
    name: "Molybdenum",
    mass: "95.950",
    radius: "190",
    shells: "2 8 18 13 1",
    series: "Transition Metals",
    color: transition_metals
}

const Tc = {
    group: "7",
    period: "5",
    number: "43",
    symbol: "Tc",
    name: "Technetium",
    mass: "98",
    radius: "183",
    shells: "2 8 18 13 2",
    series: "Transition Metals",
    color: transition_metals
}

const Ru = {
    group: "8",
    period: "5",
    number: "44",
    symbol: "Ru",
    name: "Ruthenium",
    mass: "101.07",
    radius: "178",
    shells: "2 8 18 15 1",
    series: "Transition Metals",
    color: transition_metals
}

const Rh = {
    group: "9",
    period: "5",
    number: "45",
    symbol: "Rh",
    name: "Rhodium",
    mass: "102.91",
    radius: "173",
    shells: "2 8 18 16 1",
    series: "Transition Metals",
    color: transition_metals
}

const Pd = {
    group: "10",
    period: "5",
    number: "46",
    symbol: "Pd",
    name: "Palladium",
    mass: "106.42",
    radius: "169",
    shells: "2 8 18 18",
    series: "Transition Metals",
    color: transition_metals
}

const Ag = {
    group: "11",
    period: "5",
    number: "47",
    symbol: "Ag",
    name: "Silver",
    mass: "107.87",
    radius: "165",
    shells: "2 8 18 18 1",
    series: "Transition Metals",
    color: transition_metals
}

const Cd = {
    group: "12",
    period: "5",
    number: "48",
    symbol: "Cd",
    name: "Cadmium",
    mass: "112.41",
    radius: "161",
    shells: "2 8 18 18 2",
    series: "Transition Metals",
    color: transition_metals
}

const In = {
    group: "13",
    period: "5",
    number: "49",
    symbol: "In",
    name: "Indium",
    mass: "114.82",
    radius: "156",
    shells: "2 8 18 18 3",
    series: "Other Metals",
    color: other_metals
}

const Sn = {
    group: "14",
    period: "5",
    number: "50",
    symbol: "Sn",
    name: "Tin",
    mass: "118.71",
    radius: "145",
    shells: "2 8 18 18 4",
    series: "Other Metals",
    color: other_metals
}

const Sb = {
    group: "15",
    period: "5",
    number: "51",
    symbol: "Sb",
    name: "Antimony",
    mass: "121.76",
    radius: "133",
    shells: "2 8 18 18 5",
    series: "Metalloids",
    color: metalloids
}

const Te = {
    group: "16",
    period: "5",
    number: "52",
    symbol: "Te",
    name: "Tellurium",
    mass: "127.60",
    radius: "123",
    shells: "2 8 18 18 6",
    series: "Metalloids",
    color: metalloids
}

const I = {
    group: "17",
    period: "5",
    number: "53",
    symbol: "I",
    name: "Iodine",
    mass: "126.90",
    radius: "115",
    shells: "2 8 18 18 7",
    series: "Halogens",
    color: halogens
}

const Xe = {
    group: "18",
    period: "5",
    number: "54",
    symbol: "Xe",
    name: "Xenon",
    mass: "131.29",
    radius: "108",
    shells: "2 8 18 18 8",
    series: "Noble Gas",
    color: noble_gases
}

const Cs = {
    group: "1",
    period: "6",
    number: "55",
    symbol: "Cs",
    name: "Caesium",
    mass: "132.91",
    radius: "298",
    shells: "2 8 18 18 8 1",
    series: "Alkali Metals",
    color: alkali_metals
}

const Ba = {
    group: "2",
    period: "6",
    number: "56",
    symbol: "Ba",
    name: "Barium",
    mass: "137.33",
    radius: "253",
    shells: "2 8 18 18 8 2",
    series: "Alkaline Earth Metals",
    color: alkaline_earth_metals
}

const La = {
    group: "3",
    period: "6",
    number: "57",
    symbol: "La",
    name: "Lanthanum",
    mass: "138.91",
    radius: "226",
    shells: "2 8 18 18 9 2",
    series: "Lanthanides",
    color: lanthanides
}

const Ce = {
    group: "3",
    period: "6",
    number: "58",
    symbol: "Ce",
    name: "Cerium",
    mass: "140.12",
    radius: "210",
    shells: "2 8 18 19 9 2",
    series: "Lanthanides",
    color: lanthanides
}

const Pr = {
    group: "3",
    period: "6",
    number: "59",
    symbol: "Pr",
    name: "Praseodymium",
    mass: "140.91",
    radius: "247",
    shells: "2 8 18 21 8 2",
    series: "Lanthanides",
    color: lanthanides
}

const Nd = {
    group: "3",
    period: "6",
    number: "60",
    symbol: "Nd",
    name: "Neodymium",
    mass: "144.24",
    radius: "206",
    shells: "2 8 18 22 8 2",
    series: "Lanthanides",
    color: lanthanides
}

const Pm = {
    group: "3",
    period: "6",
    number: "61",
    symbol: "Pm",
    name: "Promethium",
    mass: "145",
    radius: "205",
    shells: "2 8 18 23 8 2",
    series: "Lanthanides",
    color: lanthanides
}

const Sm = {
    group: "3",
    period: "6",
    number: "62",
    symbol: "Sm",
    name: "Samarium",
    mass: "150.36",
    radius: "238",
    shells: "2 8 18 24 8 2",
    series: "Lanthanides",
    color: lanthanides
}

const Eu = {
    group: "3",
    period: "6",
    number: "63",
    symbol: "Eu",
    name: "Europium",
    mass: "151.96",
    radius: "231",
    shells: "2 8 18 25 8 2",
    series: "Lanthanides",
    color: lanthanides
}

const Gd = {
    group: "3",
    period: "6",
    number: "64",
    symbol: "Gd",
    name: "Gadolinium",
    mass: "157.25",
    radius: "233",
    shells: "2 8 18 25 9 2",
    series: "Lanthanides",
    color: lanthanides
}

const Tb = {
    group: "3",
    period: "6",
    number: "65",
    symbol: "Tb",
    name: "Terbium",
    mass: "158.93",
    radius: "225",
    shells: "2 8 18 27 8 2",
    series: "Lanthanides",
    color: lanthanides
}

const Dy = {
    group: "3",
    period: "6",
    number: "66",
    symbol: "Dy",
    name: "Dysprosium",
    mass: "162.5",
    radius: "228",
    shells: "2 8 18 28 8 2",
    series: "Lanthanides",
    color: lanthanides
}

const Ho = {
    group: "3",
    period: "6",
    number: "67",
    symbol: "Ho",
    name: "Holmium",
    mass: "164.93",
    radius: "226",
    shells: "2 8 18 29 8 2",
    series: "Lanthanides",
    color: lanthanides
}

const Er = {
    group: "3",
    period: "6",
    number: "68",
    symbol: "Er",
    name: "Erbium",
    mass: "167.26",
    radius: "226",
    shells: "2 8 18 30 8 2",
    series: "Lanthanides",
    color: lanthanides
}

const Tm = {
    group: "3",
    period: "6",
    number: "69",
    symbol: "Tm",
    name: "Thulium",
    mass: "168.93",
    radius: "222",
    shells: "2 8 18 31 8 2",
    series: "Lanthanides",
    color: lanthanides
}

const Yb = {
    group: "3",
    period: "6",
    number: "70",
    symbol: "Yb",
    name: "Ytterbium",
    mass: "173.04",
    radius: "222",
    shells: "2 8 18 32 8 2",
    series: "Lanthanides",
    color: lanthanides
}

const Lu = {
    group: "3",
    period: "6",
    number: "71",
    symbol: "Lu",
    name: "Lutetium",
    mass: "174.97",
    radius: "217",
    shells: "2 8 18 32 9 2",
    series: "Lanthanides",
    color: lanthanides
}

const Hf = {
    group: "4",
    period: "6",
    number: "72",
    symbol: "Hf",
    name: "Hafnium",
    mass: "178.49",
    radius: "208",
    shells: "2 8 18 32 10 2",
    series: "Transition Metals",
    color: transition_metals
}

const Ta = {
    group: "5",
    period: "6",
    number: "73",
    symbol: "Ta",
    name: "Tantalum",
    mass: "180.95",
    radius: "200",
    shells: "2 8 18 32 11 2",
    series: "Transition Metals",
    color: transition_metals
}

const W = {
    group: "6",
    period: "6",
    number: "74",
    symbol: "W",
    name: "Tungsten",
    mass: "183.84",
    radius: "193",
    shells: "2 8 18 32 12 2",
    series: "Transition Metals",
    color: transition_metals
}

const Re = {
    group: "7",
    period: "6",
    number: "75",
    symbol: "Re",
    name: "Rhenium",
    mass: "186.21",
    radius: "188",
    shells: "2 8 18 32 13 2",
    series: "Transition Metals",
    color: transition_metals
}

const Os = {
    group: "8",
    period: "6",
    number: "76",
    symbol: "Os",
    name: "Osmium",
    mass: "190.23",
    radius: "185",
    shells: "2 8 18 32 14 2",
    series: "Transition Metals",
    color: transition_metals
}

const Ir = {
    group: "9",
    period: "6",
    number: "77",
    symbol: "Ir",
    name: "Iridium",
    mass: "192.22",
    radius: "180",
    shells: "2 8 18 32 15 2",
    series: "Transition Metals",
    color: transition_metals
}

const Pt = {
    group: "10",
    period: "6",
    number: "78",
    symbol: "Pt",
    name: "Platinum",
    mass: "195.08",
    radius: "177",
    shells: "2 8 18 32 17 1",
    series: "Transition Metals",
    color: transition_metals
}

const Au = {
    group: "11",
    period: "6",
    number: "79",
    symbol: "Au",
    name: "Gold",
    mass: "196.97",
    radius: "174",
    shells: "2 8 18 32 18 1",
    series: "Transition Metals",
    color: transition_metals
}

const Hg = {
    group: "12",
    period: "6",
    number: "80",
    symbol: "Hg",
    name: "Mercury",
    mass: "200.59",
    radius: "171",
    shells: "2 8 18 32 18 2",
    series: "Transition Metals",
    color: transition_metals
}

const Tl = {
    group: "13",
    period: "6",
    number: "81",
    symbol: "Tl",
    name: "Thallium",
    mass: "204.38",
    radius: "156",
    shells: "2 8 18 32 18 3",
    series: "Other Metals",
    color: other_metals
}

const Pb = {
    group: "14",
    period: "6",
    number: "82",
    symbol: "Pb",
    name: "Lead",
    mass: "207.20",
    radius: "154",
    shells: "2 8 18 32 18 4",
    series: "Other Metals",
    color: other_metals
}

const Bi = {
    group: "15",
    period: "6",
    number: "83",
    symbol: "Bi",
    name: "Bismuth",
    mass: "208.98",
    radius: "143",
    shells: "2 8 18 32 18 5",
    series: "Other Metals",
    color: other_metals
}

const Po = {
    group: "16",
    period: "6",
    number: "84",
    symbol: "Po",
    name: "Polonium",
    mass: "209",
    radius: "135",
    shells: "2 8 18 32 18 6",
    series: "Metalloids",
    color: metalloids
}

const At = {
    group: "17",
    period: "6",
    number: "85",
    symbol: "At",
    name: "Astatine",
    mass: "210",
    radius: "127",
    shells: "2 8 18 32 18 7",
    series: "Halogens",
    color: halogens
}

const Rn = {
    group: "18",
    period: "6",
    number: "86",
    symbol: "Rn",
    name: "Radon",
    mass: "222",
    radius: "120",
    shells: "2 8 18 32 18 8",
    series: "Noble Gas",
    color: noble_gases
}

const Fr = {
    group: "1",
    period: "7",
    number: "87",
    symbol: "Fr",
    name: "Francium",
    mass: "223",
    radius: "---",
    shells: "2 8 18 32 18 8 1",
    series: "Alkali Metals",
    color: alkali_metals
}

const Ra = {
    group: "2",
    period: "7",
    number: "88",
    symbol: "Ra",
    name: "Radium",
    mass: "226",
    radius: "---",
    shells: "2 8 18 32 18 8 2",
    series: "Alkaline Earth Metals",
    color: alkaline_earth_metals
}

const Ac = {
    group: "3",
    period: "7",
    number: "89",
    symbol: "Ac",
    name: "Actinium",
    mass: "227",
    radius: "---",
    shells: "2 8 18 32 18 9 2",
    series: "Actinides",
    color: actinides
}

const Th = {
    group: "3",
    period: "7",
    number: "90",
    symbol: "Th",
    name: "Thorium",
    mass: "232.04",
    radius: "---",
    shells: "2 8 18 32 18 10 2",
    series: "Actinides",
    color: actinides
}

const Pa = {
    group: "3",
    period: "7",
    number: "91",
    symbol: "Pa",
    name: "Protactinium",
    mass: "231.04",
    radius: "---",
    shells: "2 8 18 32 20 9 2",
    series: "Actinides",
    color: actinides
}

const U = {
    group: "3",
    period: "7",
    number: "92",
    symbol: "U",
    name: "Uranium",
    mass: "238.03",
    radius: "---",
    shells: "2 8 18 32 21 9 2",
    series: "Actinides",
    color: actinides
}

const Np = {
    group: "3",
    period: "7",
    number: "93",
    symbol: "Np",
    name: "Neptunium",
    mass: "237.05",
    radius: "---",
    shells: "2 8 18 32 22 9 2",
    series: "Actinides",
    color: actinides
}

const Pu = {
    group: "3",
    period: "7",
    number: "94",
    symbol: "Pu",
    name: "Plutonium",
    mass: "244",
    radius: "---",
    shells: "2 8 18 32 24 8 2",
    series: "Actinides",
    color: actinides
}

const Am = {
    group: "3",
    period: "7",
    number: "95",
    symbol: "Am",
    name: "Americium",
    mass: "243",
    radius: "---",
    shells: "2 8 18 32 25 8 2",
    series: "Actinides",
    color: actinides
}

const Cm = {
    group: "3",
    period: "7",
    number: "96",
    symbol: "Cm",
    name: "Curium",
    mass: "247",
    radius: "---",
    shells: "2 8 18 32 25 9 2",
    series: "Actinides",
    color: actinides
}

const Bk = {
    group: "3",
    period: "7",
    number: "97",
    symbol: "Bk",
    name: "Berkelium",
    mass: "247",
    radius: "---",
    shells: "2 8 18 32 27 8 2",
    series: "Actinides",
    color: actinides
}

const Cf = {
    group: "3",
    period: "7",
    number: "98",
    symbol: "Cf",
    name: "Californium",
    mass: "251",
    radius: "---",
    shells: "2 8 18 32 28 8 2",
    series: "Actinides",
    color: actinides
}

const Es = {
    group: "3",
    period: "7",
    number: "99",
    symbol: "Es",
    name: "Einsteinium",
    mass: "252",
    radius: "---",
    shells: "2 8 18 32 29 8 2",
    series: "Actinides",
    color: actinides
}

const Fm = {
    group: "3",
    period: "7",
    number: "100",
    symbol: "Fm",
    name: "Fermium",
    mass: "257",
    radius: "---",
    shells: "2 8 18 32 30 8 2",
    series: "Actinides",
    color: actinides
}

const Md = {
    group: "3",
    period: "7",
    number: "101",
    symbol: "Md",
    name: "Mendelevium",
    mass: "258",
    radius: "---",
    shells: "2 8 18 32 31 8 2",
    series: "Actinides",
    color: actinides
}

const No = {
    group: "3",
    period: "7",
    number: "102",
    symbol: "No",
    name: "Nobelium",
    mass: "259",
    radius: "---",
    shells: "2 8 18 32 32 8 2",
    series: "Actinides",
    color: actinides
}

const Lr = {
    group: "3",
    period: "7",
    number: "103",
    symbol: "Lr",
    name: "Lawrencium",
    mass: "262",
    radius: "---",
    shells: "2 8 18 32 32 8 3",
    series: "Actinides",
    color: actinides
}

const Rf = {
    group: "4",
    period: "7",
    number: "104",
    symbol: "Rf",
    name: "Rutherfordium",
    mass: "267",
    radius: "---",
    shells: "2 8 18 32 32 10 2",
    series: "Transition Metals",
    color: transition_metals
}

const Db = {
    group: "5",
    period: "7",
    number: "105",
    symbol: "Db",
    name: "Dubnium",
    mass: "262",
    radius: "---",
    shells: "2 8 18 32 32 11 2",
    series: "Transition Metals",
    color: transition_metals
}

const Sg = {
    group: "6",
    period: "7",
    number: "106",
    symbol: "Sg",
    name: "Seaborgium",
    mass: "269",
    radius: "---",
    shells: "2 8 18 32 32 12 2",
    series: "Transition Metals",
    color: transition_metals
}

const Bh = {
    group: "7",
    period: "7",
    number: "107",
    symbol: "Bh",
    name: "Bohrium",
    mass: "264",
    radius: "---",
    shells: "2 8 18 32 32 13 2",
    series: "Transition Metals",
    color: transition_metals
}

const Hs = {
    group: "8",
    period: "7",
    number: "108",
    symbol: "Hs",
    name: "Hassium",
    mass: "269",
    radius: "---",
    shells: "2 8 18 32 32 14 2",
    series: "Transition Metals",
    color: transition_metals
}

const Mt = {
    group: "9",
    period: "7",
    number: "109",
    symbol: "Mt",
    name: "Meitnerium",
    mass: "278",
    radius: "---",
    shells: "2 8 18 32 32 15 2",
    series: "Transition Metals",
    color: transition_metals
}

const Ds = {
    group: "10",
    period: "7",
    number: "110",
    symbol: "Ds",
    name: "Darmstadtium",
    mass: "281",
    radius: "---",
    shells: "2 8 18 32 32 16 2",
    series: "Transition Metals",
    color: transition_metals
}

const Rg = {
    group: "11",
    period: "7",
    number: "111",
    symbol: "Rg",
    name: "Roentgenium",
    mass: "282",
    radius: "---",
    shells: "2 8 18 32 32 17 2",
    series: "Transition Metals",
    color: transition_metals
}

const Cn = {
    group: "12",
    period: "7",
    number: "112",
    symbol: "Cn",
    name: "Copernicium",
    mass: "285",
    radius: "---",
    shells: "2 8 18 32 32 18 2",
    series: "Transition Metals",
    color: transition_metals
}

const Nh = {
    group: "13",
    period: "7",
    number: "113",
    symbol: "Nh",
    name: "Nihonium",
    mass: "286",
    radius: "---",
    shells: "2 8 18 32 32 18 3",
    series: "Other Metals",
    color: other_metals
}

const Fl = {
    group: "14",
    period: "7",
    number: "114",
    symbol: "Fl",
    name: "Flerovium",
    mass: "289",
    radius: "---",
    shells: "2 8 18 32 32 18 4",
    series: "Other Metals",
    color: other_metals
}

const Mc = {
    group: "15",
    period: "7",
    number: "115",
    symbol: "Mc",
    name: "Moscovium",
    mass: "289",
    radius: "---",
    shells: "2 8 18 32 32 18 5",
    series: "Other Metals",
    color: other_metals
}

const Lv = {
    group: "16",
    period: "7",
    number: "116",
    symbol: "Lv",
    name: "Livermorium",
    mass: "293",
    radius: "---",
    shells: "2 8 18 32 32 18 6",
    series: "Other Metals",
    color: other_metals
}

const Ts = {
    group: "17",
    period: "7",
    number: "117",
    symbol: "Ts",
    name: "Tennessine",
    mass: "294",
    radius: "---",
    shells: "2 8 18 32 32 18 7",
    series: "Halogens",
    color: halogens
}

const Og = {
    group: "18",
    period: "7",
    number: "118",
    symbol: "Og",
    name: "Oganesson",
    mass: "294",
    radius: "---",
    shells: "2 8 18 32 32 18 8",
    series: "Noble Gas",
    color: noble_gases
}

const element = [
    0, H, He, Li, Be, B, C, N, O, F, Ne, 
    Na, Mg, Al, Si, P, S, Cl, Ar, K, Ca, 
    Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn, 
    Ga, Ge, As, Se, Br, Kr, Rb, Sr, Y, Zr, 
    Nb, Mo, Tc, Ru, Rh, Pd, Ag, Cd, In, Sn, 
    Sb, Te, I, Xe, Cs, Ba, La, Ce, Pr, Nd, 
    Pm, Sm, Eu, Gd, Tb, Dy, Ho, Er, Tm, Yb, 
    Lu, Hf, Ta, W, Re, Os, Ir, Pt, Au, Hg, 
    Tl, Pb, Bi, Po, At, Rn, Fr, Ra, Ac, Th, 
    Pa, U, Np, Pu, Am, Cm, Bk, Cf, Es, Fm, 
    Md, No, Lr, Rf, Db, Sg, Bh, Hs, Mt, Ds, 
    Rg, Cn, Nh, Fl, Mc, Lv, Ts, Og
]

export { element };