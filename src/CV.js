import React from "react";
import ReactPDF from '@react-pdf/renderer';
import { Document, Page } from "react-pdf";

import resume from './assets/cv.pdf'

const CV = () => {
    return(
        <>
            <div className="container-fluid" id="cv-container">
                <div className="row">
                    <object data={resume} type="application/pdf" width="100%" height="720px" />
                </div>
                <div className="row jutify-content-center text-center p-3">
                    <p className="h6">Having issues viewing this? <a id="link" href={resume} target="_blank">View in browser</a></p>
                </div>
            </div>
        </>
    )
}

export default CV;