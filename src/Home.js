import React from "react";
import portrait from './assets/portrait.png';

import diary from './data/diary.js'

const Home = () => {

    let upcoming = [];

    diary.forEach((event) => {
        upcoming.push(event)
    })

    return(
        <>
            <div className="container-fluid text-light" style={{backgroundColor: "var(--jet)"}}>
                <div className="row d-none d-sm-flex jutify-content-center p-3 align-items-center">
                    <div className="col-auto ms-5 ps-5">
                        <img src={portrait} className="img-fluid rounded float-end" alt="portrait of David Frommont"/>
                    </div>
                    <div className="col">
                        <p className="h4 text-start">Hi, I'm David Frommont<br /><br />a 2nd Year Computer Science Student at the University of Sussex working towards my Masters in Computing</p>
                    </div>
                </div>
                <div className="row d-flex d-flex d-sm-none jutify-content-center p-3 align-items-center">
                    <div className="col-auto">
                        <img src={portrait} className="img-fluid rounded mx-auto d-block" alt="portrait of David Frommont"/>
                        <p className="h4 text-center pt-4">Hello, I'm David Frommont<br /><br />a 2nd Year Computer Science Student at the University of Sussex working towards my Masters in Computing</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-3 px-5" style={{backgroundColor: "var(--sky-blue)"}}>
                <p className="display-6 fw-bold text-dark">What have I been up to recently?</p>
                {
                    upcoming.map((event) => (
                        <div className="container-fluid p-4 mb-5 text-light" id={`diary-entry-${event.id}`} key={`diary-entry-${event.id}`}>
                            <div className="row d-flex justify-content-between">
                                <div className="col-auto text-start">
                                    <p className="fst-italic h4">{event.title}</p>
                                </div>
                                <div className="col-auto text-end">
                                    <p className="fst-italic text-decoration-underline h4" style={{color: "var(--tang-blue)"}}>{event.date}</p>
                                </div>
                            </div>
                            <div className="container-fluid d-none d-sm-block">
                                <div className="row text-center mx-5">
                                    <p className="h5">{event.description}</p>
                                </div>
                                <div className="row text-center mx-5">
                                    <br /><p className="h5">{event.further}</p>
                                </div>
                            </div>
                            <div className="container-fluid d-block d-sm-none">
                                <div className="row text-center">
                                    <p className="h5">{event.description}</p>
                                </div>
                                <div className="row text-center">
                                    <br /><p className="h5">{event.further}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Home;