import React from "react";
import './index.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import CV from "./CV";
import Demos from "./Demos";
import Personal from "./about/Personal";
import University from "./about/University";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/CV" element={<CV />} />
                    <Route path="/Demos" element={<Demos />} />
                    <Route path="/about/personal" element={<Personal />} />
                    <Route path="/about/university" element={<University />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;