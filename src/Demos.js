import React from "react";
import { Link } from "react-router-dom";
import solitaire from './assets/solitaire snapshot.png';

const Demos = () => {
    return(
        <>
            <div className="container-fluid text-light" style={{backgroundColor: "var(--jet)"}}>
                <p className="h2 text-center p-4" style={{color: "var(--tiffany-blue)"}}>Here is just some of my work:</p>
                <div className="row p-3">
                    <div className="col justify-content-center">
                        <img src={solitaire} className="rounded mx-auto d-block" style={{width: "80%"}}></img> {/* Make into a button*/ }
                    </div>
                    <div className="col-sm">
                        <p className="h5 text-center">Recently I have been working on a Solitaire game. Using react to build the application and bootstrap for styling, I have created card elements who take all their data from a local storage then generate the game board.</p>
                        <br /><p className="h5 text-center">Early on in the process I realised one of the key issues with solitaire is board generation. Randomly generating boards for each game is time consuming and so I should instead have a finite number of pre-made boards that I can randomly choose from. For now these are stored locally but in the future I will add a back-end server to hold a much larger number of these boards.</p>
                        <br /><p className="h5 text-center">The project in it's current state is still a work on progress, to see teh code so far, check out the project's <Link id="link" to={"https://github.com/dfrommont/Solitaire"}>GitHub repository</Link>.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demos;