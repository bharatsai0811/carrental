import React from "react";

import './bookacar.css';

import { carsList, citiesList } from "../../util/data";

const BookACar = () => {
    return (
        <section className="book-a-car-container">
            <h2>Book a car</h2>
            <form>
                <div className="input-container">
                    <label><i className="fa-solid fa-car"></i>Select Your Car Type <b>*</b></label>
                    <select>
                        <option>Select your car type</option>
                        {carsList.map((carName) => <option>{carName}</option>)}
                    </select>
                </div>
                <div className="input-container">
                    <label><i className="fa-solid fa-location-dot"></i>Pick-up <b>*</b></label>
                    <select>
                        <option>Select pick up location</option>
                        {citiesList.map((cityName) => <option>{cityName}</option>)}
                    </select>
                </div>
                <div className="input-container">
                    <label><i className="fa-solid fa-location-dot"></i>Drop-of <b>*</b></label>
                    <select>
                        <option>Select drop off location</option>
                        {citiesList.map((cityName) => <option>{cityName}</option>)}
                    </select>
                </div>
                <div className="input-container">
                    <label for="pick-up-date"><i className="fa-regular fa-calendar-days"></i>Pick-up <b>*</b></label>
                    <input id="pick-up-date" type="date"></input>
                </div>
                <div className="input-container">
                    <label for="drop-of-date"><i className="fa-regular fa-calendar-days"></i>Drop-of <b>*</b></label>
                    <input id="drop-of-date" type="date"></input>
                </div>
                <button type="submit">Search</button>
            </form>
        </section>
    )
};

export default BookACar;