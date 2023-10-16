import { Link } from "react-router-dom";

const diary = [
    {
        "id": 1,
        "date": "Week beginning 25th September",
        "title": "Freshers Fairs",
        "description": "On Monday and Tuesday I spent my afternoons on the HackSussex stall at the EngInf Fair on campus, Wednesday saw me on the stall for the larger University Freshers Fair and finally I worked Thursday on the stall at the Stem Fair. During this time I advertised who HackSussex were as a society and told people about our events for the year.",
        "further": "Getting to meet both younger and older masters students who were all new to the uni I was familiar with was a great experience and I was glad to be able to talk with and meet them."
    },
    {
        "id": 2,
        "date": "Wed. 27th September",
        "title": "Code Social",
        "description": "Today I attended HackSussex's first Code Social of the year. Following 3 days of fresher's fairs, over 100 people were in attendance. During the social I befriended two international students completing their first years and took part in the raffle we had been running that week on our stalls.",
        "further": null
    },
    {
        "id": 3,
        "date": "Sun. 24th September",
        "title": "Finished Working on new HackSussex Website",
        "description": "Over the previous few weeks I was part of a trio of programmers who worked on turning our design into a functioning website. Today was the final push to get it deployed in time for freshers week and the site went up successfully after a long day of work.",
        "further": <Link to="https://www.hacksussex.com" id="link">Take a look at the site here</Link>
    }
]

export default diary;