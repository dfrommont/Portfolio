import React from "react";

const Personal = () => {
    return(
        <>
            <div className="container-fluid p-3" style={{backgroundColor: "var(--jet)"}}>
                <p className="h5 text-start m-0" style={{width: "75%", color: "var(--tang-blue)"}}>Hi, my name's David (<i>he/him</i>) I'm 19 and I'm from the south of the UK</p><br />
                <p className="text-start" style={{width: "75%", color: "var(--sky-blue)"}}>I'm currently studying Computer Science at the University of Sussex and I'm in the second year of my course (<i>MComp with placement year</i>)</p><br />
                <p className="text-start" style={{width: "75%", color: "var(--sky-blue)"}}>In my personal life I enjoy cooking, particularly making and eating my own home-made pasta, playing video games and indoor rock climbing. Whilst I've always enjoyed cooking, rock climbing is a new hobby I've discovered since coming to university - both for its exercise and the social aspect as many of the people I know also enjoy climbing.</p><br />
                <p className="text-start" style={{width: "75%", color: "var(--sky-blue)"}}>My motivation to study Computer Science comes from my interests in gaming, mathematics and engineering. Before coming to university, I studied Computer Science, Physics and Maths at A-level and in secondary school, I got to take part in STEM outreach events that saw me visiting various colleges and universities in the south of the UK.</p><br />
                <p className="text-start" style={{width: "75%", color: "var(--sky-blue)"}}>I chose to study at the University of Sussex as it's a great University for my course, was recommended by relatives and it's near Brighton - a town I associate with as a young gay man. I have since come to love the madness of living in a city like Brighton.</p>
            </div>
        </>
    )
}

export default Personal;