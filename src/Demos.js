import React from "react";

import examples from './data/demos'

const Demos = () => {
    return(
        <>
            <div className="container-fluid text-light" style={{backgroundColor: "var(--jet)"}}>
                <p className="h2 text-center p-4" style={{color: "var(--tiffany-blue)"}}>Here is just some of my work:</p>
                {
                examples.map((example) => (
                    <div className="container-fluid" key={`example-${example.id}`}>
                        <div className="row">
                            <div className="col-auto">
                                <p id="example-title" className="display-3 text-start fw-bold mt-1" style={{color: "var(--tang-blue)"}}>{example.title}</p>
                            </div>
                        </div>
                        <div className="row p-3">
                            <div className="col justify-content-center">
                                <img src={example.image} className="rounded mx-auto d-block" style={{width: "100%", border: "3px solid var(--tang-blue)"}} alt={`project titled ${example.title}`}></img>
                            </div>
                            <div className="col-sm">
                                <p className="h5 text-center">{example.text}</p><br />
                                <p className="h5 text-center">{example.link}</p>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </>
    )
}

export default Demos;