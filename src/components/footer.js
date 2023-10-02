import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="conatienr-fluid bg-dark p-3 text-center">
                <p className="h5 text-light">Wish to find out more about me? - head <Link id="link" to="/about/personal">here</Link></p>
                <p className="h5 text-light">Get in contact with me <Link id="link" to="/contact">here</Link></p>
                <div className="border-top my-3 mx-5"></div>
                <p className="h5 text-light">Thank you for taking the time to visit this page</p>
            </div>
        </>
    )
}

export default Footer;