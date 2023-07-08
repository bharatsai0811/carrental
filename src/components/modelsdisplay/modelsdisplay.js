import React, { useState } from "react";

import "./modelsdisplay.css";

//import images
import audiDisplaySrc from "../../assets/images/audi-a1-display.jpg";
import golfDisplaySrc from "../../assets/images/golf-6-display.jpg";
import camryDisplaySrc from "../../assets/images/toyota-camry-display.jpg";
import bmwDisplaySrc from "../../assets/images/bmw-320-display.jpg";
import glkDisplaySrc from "../../assets/images/mercedes-glk-display.jpg";
import passatDisplaySrc from "../../assets/images/vw-passat-display.jpg";

//import mocked cars array
import { cars } from "../../util/data";

const RentalFleet = () => {
    const [carDetails, setCarDetails] = useState(cars[0]);

    const selectCar = (name) => {
        const car = cars.filter((carObj) => carObj.name === name)[0];
        setCarDetails(car);
    }

    return (
        <section className="home-page-rental-fleet-container">
            <div className="home-page-rental-fleet-banner">
                <h3>Vehicle Models</h3>
                <h2>Our rental fleet</h2>
                <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
            </div>
            <div className="home-page-rental-fleet-pick-a-car-container">
                <div className="home-page-rental-fleet-car-list">
                    <button className={carDetails.name === 'Audi A1' ? 'active select-car-button' : 'select-car-button'} onClick={() => selectCar('Audi A1')}>Audi A1 S-Line</button>
                    <button className={carDetails.name === 'Golf 6' ? 'active select-car-button' : 'select-car-button'} onClick={() => selectCar('Golf 6')}>VW Golf 6</button>
                    <button className={carDetails.name === 'Camry' ? 'active select-car-button' : 'select-car-button'} onClick={() => selectCar('Camry')}>Toyota Camry</button>
                    <button className={carDetails.name === 'BMW 320' ? 'active select-car-button' : 'select-car-button'} onClick={() => selectCar('BMW 320')}>BMW 320 ModernLine</button>
                    <button className={carDetails.name === 'GLK' ? 'active select-car-button' : 'select-car-button'} onClick={() => selectCar('GLK')}>Mercedes-Benz GLK</button>
                    <button className={carDetails.name === 'Passat' ? 'active select-car-button' : 'select-car-button'} onClick={() => selectCar('Passat')}>VW Passat CC</button>
                </div>
                <div className="picked-car-images-container">
                    {carDetails.name === 'Audi A1' && <img src={audiDisplaySrc} className="picked-car-image" alt="Audi A1 S-Line" />}
                    {carDetails.name === 'Golf 6' && <img src={golfDisplaySrc} className="picked-car-image" alt="VW Golf 6" />}
                    {carDetails.name === 'Camry' && <img src={camryDisplaySrc} className="picked-car-image" alt="Toyota Camry" />}
                    {carDetails.name === 'BMW 320' && <img src={bmwDisplaySrc} className="picked-car-image" alt="BMW 320 ModernLine" />}
                    {carDetails.name === 'GLK' && <img src={glkDisplaySrc} className="picked-car-image" alt="Mercedes-Benz GLK" />}
                    {carDetails.name === 'Passat' && <img src={passatDisplaySrc} className="picked-car-image" alt="VW Passat CC" />}
                </div>
                <div className="table-and-button">
                    <div className="table">
                        <div className="head"><span className="price-tag">${carDetails.price}</span><span>/ rent per day</span></div>
                        <div className="row"><span className="span-left">Model</span><span>{carDetails.model}</span></div>
                        <div className="row"><span className="span-left">Brand</span><span>{carDetails.brand}</span></div>
                        <div className="row"><span className="span-left">Year</span><span>{carDetails.year}</span></div>
                        <div className="row"><span className="span-left">Doors</span><span>{carDetails.doors}</span></div>
                        <div className="row"><span className="span-left">AC</span><span>{carDetails.AC}</span></div>
                        <div className="row"><span className="span-left">Transmission</span><span>{carDetails.transmission}</span></div>
                        <div className="row"><span className="span-left">Fuel</span><span>{carDetails.fuel}</span></div>
                    </div>
                    <button className="reserve-button">Reserve now</button>
                </div>
            </div>
        </section>
    )
};

export default RentalFleet;