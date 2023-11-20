import React, { useState } from 'react';
import '../asset/css/Accueil.css'
function Accueil() {
    // Use state to track the checked state
    const [isChecked, setIsChecked] = useState(true);

    // Define an onChange handler to update the state when the checkbox is clicked
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-8 info">
                        <h1>Top 100 Crypto-monnaies par capitalisation de marché</h1>
                        <p>
                            La capitalisation boursière globale du marché crypto est de €1.3T,
                            soit une augmentation de <span><i className="fa-solid fa-arrow-up"></i> 1.62%</span> <span>au cours des dernières 24 heures. Lire plus</span>
                        </p>
                    </div>
                    <div className="col-md-4 swichBtn">
                        <span>Essentiels</span>
                        <div className="form-check form-switch">
                            {/* Use the state variable and the onChange handler */}
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div id="carouselExampleDark" class="carousel carousel-dark slide">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="2000">
                                        <img src="..." className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Second slide label</h5>
                                            <p>Some representative placeholder content for the second slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="..." className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Third slide label</h5>
                                            <p>Some representative placeholder content for the third slide.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Accueil;
