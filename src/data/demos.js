import React from 'react';
import { Link } from 'react-router-dom';

import solitaire from './../assets/solitaire snapshot.png';
import structures from './../assets/Data Structures snapshot.png'

const demos = [
    {
        id: 1,
        "text": "Recently I have been working on a Solitaire game. Using react to build the application and bootstrap for styling, I have created card elements who take all their data from a local storage then generate the game board. Early on in the process I realised one of the key issues with solitaire is board generation. Randomly generating boards for each game is time consuming and so I should instead have a finite number of pre-made boards that I can randomly choose from. For now these are stored locally but in the future I will add a back-end server to hold a much larger number of these boards.\n The project in it's current state is still a work on progress, to see teh code so far, check out the project's GitHub repository:",
        "image": solitaire,
        "title": "Solitaire",
        "link": <Link id="link" to={"https://github.com/dfrommont/Solitaire"}>GitHub repository</Link>
    },
    {
        id: 2,
        "text": "Coded alongside a first year module (Data Structures and Algorithms) I built up a repo of Java ADTs. Each type contains classes representing nodes that hold data and the structure that links all the nodes together as well as a main class and a test class. Documentation has also been egenrated for every type. The included ADTs are: Singly Linked list, Doubly Linked list, Queue ysing array, Queue using Doubly Linked list, Priority Queue, Binary Search tree, Stack using array and Stack using Doubly Linked list.",
        "image": structures,
        "title": "Java ADTs",
        "link": <Link id="link" to={"https://github.com/dfrommont/Java_Data_Structures"}>GitHub repository</Link>
    }
]

export default demos;