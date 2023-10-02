import React from "react";
import portrait from './assets/portrait.png';

import diary from './components/diary.js'

const Home = () => {

    let upcoming = [];

    diary.forEach((event) => {
        upcoming.push(event)
    })

    return(
        <>
            <div className="container-fluid text-light" id="home">
                <div className="row d-flex jutify-content-center p-3 align-items-center">
                    <div className="col-auto">
                        <img src={portrait} className="img-fluid rounded float-end"/>
                    </div>
                    <div className="col">
                        <p className="h4">Hi, I'm David Frommont<br /><br />a 2nd Year Computer Science Student at the University of Sussex working towards my Masters in Computing</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-3 px-5" id="recent-events">
                <p className="display-6 fw-bold text-dark">What have I been up to recently?</p>
                {
                    upcoming.map((event) => (
                        <div className="container-fluid p-4 mb-5 text-light" id="diary-entry">
                            <div className="row d-flex justify-content-between">
                                <div className="col-auto">
                                    <p className="fst-italic h4">{event.title}</p>
                                </div>
                                <div className="col-auto">
                                    <p className="fst-italic text-decoration-underline h4">{event.date}</p>
                                </div>
                            </div>
                            <div className="row text-center mx-5">
                                <p className="h5">{event.description}</p>
                            </div>
                            <div className="row text-center mx-5">
                                <br /><p className="h5">{event.further}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Home;