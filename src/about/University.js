import React from "react";

import hacksussex from './../assets/committee.png'

const University = () => {
    return(
        <>
            <div className="conatiner-fluid" style={{backgroundColor: "var(--jet)"}}>
                <p className="text-center display-4 p-3 mb-3" style={{color: "var(--sky-blue)"}}>My time at the University of Sussex</p>
                <p className="text-center h1" style={{color: "var(--tang-blue)"}}>Coming 2027! Computer Science MComp (with placement year)</p>
                <div className="container p-5">
                    <img src={hacksussex} className="img-fluid rounded-4 mx-auto d-block" style={{width: "60vw"}}></img>
                    <p className="text-center h2 p-3" style={{color: "var(--tiffany-blue"}}>^ The 2023 HackSussex Committee ^</p>
                    <p className="text-start h5 text-light">Towards the end of end of my first year of university I applied to join the HackSussex committee following an exciting year of taking part in their events. Follwoing the initial application I was invite to join the committee for 2023. Since then I have gone on to get involved in a number of HackSussex projects.</p>
                    <p className="text-start h5 text-light p-3">Coders Cup 2023:</p>
                    <p className="text-center h6 text-light mx-3 fst-italic p-3">In one of the final weeks of the spring term I joined the rest of the committee in the campus TV studio. We started with a rehearsal day when we tested camera angles, ran through the program and tested all our equipment.<br />The competition followed the format that before the live-streamed finale, we ran an online competition then invited the top 8 programmers to come into the studio to battle it out. Facing each other in front of computer screens, 2 competitors would receive the same question and would have a set time to write a solution. The winner was the person who met every test case first or who by the end of the time, had met the most text-cases. We then worked through finding the best till only 2 remained who then battled with a series of questions back to back before we crowned our finalist.<br />On the day of the competition my role was to manage the youtube livestream and to watch the programmers to ensure competitional-integrity. This was my first experience of a tv studio and show so it taught me a lot, like how to keep a large group of people organised, how to use professional communication equipment and how to run a live programme.</p>
                    <p className="text-start h5 text-light p-3">New 2023 Website:</p>
                    <p className="text-center h6 text-light mx-3 fst-italic p-3">During the summe rbetween first and second year of university I was joined the website team. Alongside a fellow committee member, I spent a few weeks building the skeleton of the website and then once more people were avaliable, we finished the design and then built the full build of the site.<br />The website is buitl using React and Bootstrap to build and then styel components ensuring that they are responsive to all screen sizes.<br /><br />Before joining the website team I was relatively unexperienced with web development having only used basic html and css in teh past to build simple websites so I was able to learn a lot during this time with the website, getting to really work on my web-dev skills as well as gain more experience working both in a group and to a time schedule.</p>
                </div>
                <div className="container-fluid p-3 m-auto">
                    <p className="display-5" style={{color: "var(--tang-blue)"}}>Second Year Modules:</p>
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start text-light" style={{backgroundColor: "var(--jet)"}}>
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Compilers and Computer Architecture</div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start text-light" style={{backgroundColor: "var(--jet)"}}>
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Databases</div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start text-light" style={{backgroundColor: "var(--jet)"}}>
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Natural Language Engineering</div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start text-light" style={{backgroundColor: "var(--jet)"}}>
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Program analysis</div>
                            </div>
                        </li>
                    </ol>
                    <p className="display-5" style={{color: "var(--tang-blue)"}}>First Year Modules:</p>
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start text-light" style={{backgroundColor: "var(--jet)"}}>
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Data Strructures and Algorithms</div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start text-light" style={{backgroundColor: "var(--jet)"}}>
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Further Programming</div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start text-light" style={{backgroundColor: "var(--jet)"}}>
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Introduction to Computer Systems</div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start text-light" style={{backgroundColor: "var(--jet)"}}>
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Introduction to Programming</div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start text-light" style={{backgroundColor: "var(--jet)"}}>
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Mathematical Concepts</div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start text-light" style={{backgroundColor: "var(--jet)"}}>
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Professional Skills</div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start text-light" style={{backgroundColor: "var(--jet)"}}>
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Programming Concepts</div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start text-light" style={{backgroundColor: "var(--jet)"}}>
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">The Ghost in the Machine?</div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default University;