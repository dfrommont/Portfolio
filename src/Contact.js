import React from "react";

import discord from './assets/discord.png';
import instagram from './assets/instagram.png';
import github from './assets/GitHub.png'

const Contact = () => {
    return(
        <>
            <div className="container-fluid bg-dark">
                <div className="row bg-dark mx-2">
                    <p className="text-center display-6" style={{color: "var(--sky-blue"}}>Get in contact with me!</p>
                </div>
                <div className="row bg-dark mx-5 my-2">
                    <div className="col text-end">
                        <p className="h4" style={{color: "var(--sky-blue)"}}>Phone Number:</p>
                    </div>
                    <div className="col text-start">
                        <p className="h4" style={{color: "var(--saffron)"}}>07387576977</p>
                    </div>
                </div>
                <div className="row bg-dark mx-5 my-2">
                    <div className="col text-end">
                        <p className="h4" style={{color: "var(--sky-blue)"}}>Email:</p>
                    </div>
                    <div className="col text-start">
                        <p className="h4" style={{color: "var(--saffron)"}}>davidfrommont@gmail.com</p>
                    </div>
                </div>
                <div className="row bg-dark mx-5 my-2">
                    <div className="col text-end">
                        <p className="h4" style={{color: "var(--sky-blue)"}}>Discord:</p>
                    </div>
                    <div className="col text-start">
                        <p className="h4" style={{color: "var(--saffron)"}}>FILL ME IN</p>
                    </div>
                </div>
                <div className="row bg-dark mx-5 my-2">
                    <div className="col text-end">
                        <p className="h4" style={{color: "var(--sky-blue)"}}>Instagram:</p>
                    </div>
                    <div className="col text-start">
                        <p className="h4" style={{color: "var(--saffron)"}}>FILL ME IN</p>
                    </div>
                </div>
                <div className="row bg-dark mx-5 my-2">
                    <div className="col text-end">
                        <p className="h4" style={{color: "var(--sky-blue)"}}>GitHub:</p>
                    </div>
                    <div className="col text-start">
                        <p className="h4" style={{color: "var(--saffron)"}}>FILL ME IN</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;