import React from "react";
import { Link } from "react-router-dom";

let searchMap = [
    {
        "terms": ["home", "recent events", "freshers", "code social", "website"],
        "to": "/home"
    }
]

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark pt-5">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><p className="display-6" id="name">David Frommont</p></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item h5">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item h5">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item h5">
                                <Link className="nav-link" to="/cv">CV</Link>
                            </li>
                            <li className="nav-item h5">
                                <Link className="nav-link" to="/demos">DEMOs</Link>
                            </li>
                            <li className="nav-item dropdown h5">
                                <Link className="nav-link dropdown-toggle" to="/about/personal" id="navbarDropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: "var(--sky-blue)"}}>
                                    <li><Link className="dropdown-item" to="/about/personal">Personal</Link></li>
                                    <li className="dropdown-divider" />
                                    <li><Link className="dropdown-item" to="/about/university">University</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;