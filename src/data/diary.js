import { Link } from "react-router-dom";

const diary = [
    {
        "id": 1,
        "date": "Week beginning 25th September",
        "title": "Freshers Fairs",
        "description": "On Monday and Tuesday I spent my afternoons on the HackSussex stall at the EngInf Fair on campus, Wednesday saw me on the stall for the larger University Fresher's Fair and finally I worked Thursday on the stall at the Stem Fair.",
        "further": "Getting to meet both younger new first year students and older masters students who were all new to the uni I was familar with was a great experience and I was glad to be able to talk with and meet them."
    },
    {
        "id": 2,
        "date": "Wed. 27th September",
        "title": "Code Social",
        "description": "Today I attended HackSussex's first Code Social of the year. Following 3 days of fresher's fairs, over 100 were in attendance. During the social I befriended two international students from first year and took part in the raffle we has been running that week.",
        "further": null
    },
    {
        "id": 3,
        "date": "Sun. 24th September",
        "title": "Finished Working on new HackSussex Website",
        "description": "Over the previous few weeks I was part of a trio of programmers who worked on turning our design into a functioning website. Today was the final push to get it deployed in time for freshers and the site went up after a long day of work.",
        "further": <Link to="https://www.hacksussex.com" id="link">Take a look at the site here</Link>
    }
]

export default diary;