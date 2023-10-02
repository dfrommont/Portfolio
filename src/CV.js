import React from "react";
import { Document, Page } from "react-pdf";

import resume from './assets/CV.pdf'

const CV = () => {
    return(
        <>
            <div className="container-fluid" id="cv-container">
                <div className="row">
                    <h1>Get the pdf to load in here already</h1>
                </div>
                <div className="row jutify-content-center text-center p-3">
                    <p className="h6">Having issues viewing this? <a id="link" href={resume} target="_blank">View in browser</a></p>
                </div>
            </div>
        </>
    )
}

export default CV;