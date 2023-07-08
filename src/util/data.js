//CARS DATABASE MOCK
//import images
import audiDisplaySrc from "../assets/images/audi-a1-display.jpg";
import golfDisplaySrc from "../assets/images/golf-6-display.jpg";
import camryDisplaySrc from "../assets/images/toyota-camry-display.jpg";
import bmwDisplaySrc from "../assets/images/bmw-320-display.jpg";
import glkDisplaySrc from "../assets/images/mercedes-glk-display.jpg";
import passatDisplaySrc from "../assets/images/vw-passat-display.jpg";


export const cars = [
    {
        name: 'Audi A1',
        brand: 'Audi',
        transmission: 'Manual',
        fuel: 'Diesel',
        imageSrc: audiDisplaySrc,
        price: 45,
        model: 'A1',
        year: '2021',
        doors: '4',
        AC: 'yes',
    },
    {
        name: 'Golf 6',
        brand: 'Volkswagen',
        transmission: 'Manual',
        fuel: 'Diesel',
        imageSrc: golfDisplaySrc,
        price: 37,
        model: 'Golf 6',
        year: '2008',
        doors: '4',
        AC: 'yes',
    },
    {
        name: 'Camry',
        brand: 'Toyota',
        transmission: 'Automatic',
        fuel: 'Hybrid',
        imageSrc: camryDisplaySrc,
        price: 30,
        model: 'Camry',
        year: '2006',
        doors: '4',
        AC: 'yes',
    },
    {
        name: 'BMW 320',
        brand: 'BMW',
        transmission: 'Manual',
        fuel: 'Diesel',
        imageSrc: bmwDisplaySrc,
        price: 35,
        model: '320',
        year: '2012',
        doors: '4',
        AC: 'yes',
    },
    {
        name: 'GLK',
        brand: 'Mercedes',
        transmission: 'Manual',
        fuel: 'Diesel',
        imageSrc: glkDisplaySrc,
        price: 50,
        model: 'GLK',
        year: '2006',
        doors: '4',
        AC: 'yes',
    },
    {
        name: 'Passat',
        brand: 'Volkswagen',
        transmission: 'Automatic',
        fuel: 'Gasoline',
        imageSrc: passatDisplaySrc,
        price: 25,
        model: 'Passat',
        year: '2008',
        doors: '4',
        AC: 'yes',
    }
]

//BOOK A CAR SECTION
export const carsList = [
    'Audi A1 S-Line',
    'VW Golf 6',
    'Toyota Camry',
    'BMW 320 ModernLine',
    'Mercedes-Benz GLK',
    'VW Passat CC'
];

export const citiesList = [
    'Sydney',
    'Brisbane',
    'Gold Coast',
    'Byron Bay',
    'New Castle',
    'Melbourne'
];