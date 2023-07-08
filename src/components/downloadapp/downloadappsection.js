import React from "react";

import "./downloadappsection.css"

//import images 
import googlePlaySrc from "../../assets/images/google-play.png";
import appleStoreSrc from "../../assets/images/apple-store.png";

const DownloadAppSection = () => {
    return (
        <section className="home-page-download-app-container">
            <div className="download-app-text-container">
                <h2>Download our app to get most out of it</h2>
                <p>Thrown shy denote ten ladies though ask saw.
                    Or by to he going think order event music.
                    Incommode so intention defective at convinced.
                    Led income months itself and houses you.
                </p>
                <img src={googlePlaySrc} alt="Download from goodle play" />
                <img src={appleStoreSrc} alt="Download from apple store" />
            </div>
        </section>
    )
};

export default DownloadAppSection;