import React from "react";

import hacksussex from './../assets/committee.png'

const University = () => {
    return(
        <>
            <div className="conatiner-fluid" style={{backgroundColor: "var(--jet)"}}>
                <p className="text-center display-4 p-3 mb-3" style={{color: "var(--sky-blue)"}}>My time at the University of Sussex</p>
                <p className="text-center h1" style={{color: "var(--saffron)"}}>Coming 2027! Computer Science MComp (with placement year)</p>
                <div className="conatiner p-5">
                    <img src={hacksussex} className="img-fluid rounded-4 mx-auto d-block" style={{width: "60vw"}}></img>
                    <p className="text-center h2 p-3" style={{color: "var(--tiffany-blue"}}>^ The 2023 HackSussex Committee ^</p>
                    <p className="text-start h5 text-light">Towards the end of end of my first year of university I applied to join the HackSussex committee following an exciting year of taking part in their events. Follwoing the initial application I was invite to join the committee for 2023. Since then I have gone on to get involved in a number of HackSussex projects.</p>
                    <p className="text-start h5 text-light p-3">Coders Cup 2023:</p>
                    <p className="text-center h5 text-light mx-3 fst-italic p-3">In one of the final weeks of the spring term I joined the rest of the committee in the campus TV studio. We started with a rehearsal day when we tested camera angles, ran through the program and tested all our equipment.<br />The competition followed the format that before the live-streamed finale, we ran an online competition then invited the top 8 programmers to come into the studio to battle it out. Facing each other in front of computer screens, 2 competitors would receive the same question and would have a set time to write a solution. The winner was the person who met every test case first or who by the end of the time, had met the most text-cases. We then worked through finding the best till only 2 remained who then battled with a series of questions back to back before we crowned our finalist.<br />On the day of the competition my role was to manage the youtube livestream and to watch the programmers to ensure competitional-integrity. This was my first experience of a tv studio and show so it taught me a lot, like how to keep a large group of people organised, how to use professional communication equipment and how to run a live programme.</p>
                </div>
            </div>
        </>
    )
}

export default University;