import React from "react";
import { Link } from "react-router-dom";

import discord from './assets/discord.png';
import instagram from './assets/instagram.png';
import github from './assets/GitHub.png'

const Contact = () => {
    return(
        <>
            <div className="container-fluid d-none d-sm-block p-3" style={{backgroundColor: "var(--jet)"}}>
                <div className="row mx-2">
                    <p className="text-center display-6" style={{color: "var(--sky-blue"}}>Get in contact with me!</p>
                </div>
                <div className="row mx-5 my-2">
                    <div className="col text-end">
                        <p className="h4" style={{color: "var(--sky-blue)"}}>Phone Number:</p>
                    </div>
                    <div className="col text-start">
                        <p className="h4" style={{color: "var(--saffron)"}}>07387576977</p>
                    </div>
                </div>
                <div className="row mx-5 my-2">
                    <div className="col text-end">
                        <p className="h4" style={{color: "var(--sky-blue)"}}>Email:</p>
                    </div>
                    <div className="col text-start">
                        <p className="h4" style={{color: "var(--saffron)"}}>davidfrommont@gmail.com</p>
                    </div>
                </div>
                <div className="row mx-5 my-2">
                    <div className="col text-end">
                        <p className="h4" style={{color: "var(--sky-blue)"}}>Discord:</p>
                    </div>
                    <div className="col text-start">
                        <p className="h4" style={{color: "var(--saffron)"}}>@davidstaco</p>
                    </div>
                </div>
                <div className="row mx-5 my-2">
                    <div className="col text-end">
                        <p className="h4" style={{color: "var(--sky-blue)"}}>GitHub:</p>
                    </div>
                    <div className="col text-start">
                        <p className="h4" style={{color: "var(--saffron)"}}>@dfrommont</p>
                    </div>
                </div>
                <div className="row mx-5 my-2">
                    <div className="col text-end">
                        <p className="h4" style={{color: "var(--sky-blue)"}}>Instagram:</p>
                    </div>
                    <div className="col text-start">
                        <p className="h4" style={{color: "var(--saffron)"}}>@davidfrommont</p>
                    </div>
                </div>
                <div className="row mx-5 mt-2 p-3 justify-content-center">
                    <div className="col-auto">
                        <Link to="https://discordapp.com/users/532292781004029952" target="_blank">
                            <img src={discord} style={{width: "7vw"}} alt="discord logo"></img>
                        </Link>
                    </div>
                    <div className="col-auto">
                        <Link to="https://github.com/dfrommont" target="_blank">
                            <img src={github} style={{width: "12vw"}} alt="github logo"></img>
                        </Link>
                    </div>
                    <div className="col-auto">
                        <Link to="https://www.instagram.com/davidfrommont/" target="_blank">
                            <img src={instagram} style={{width: "7vw"}} alt="instagram logo"></img>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-block d-sm-none p-3" style={{backgroundColor: "var(--jet)"}}>
                <div className="row mx-2">
                    <p className="text-center display-6" style={{color: "var(--sky-blue"}}>Get in contact with me!</p>
                </div>
                <div className="row mx-5 my-2 text-center">
                    <p className="h4" style={{color: "var(--sky-blue)"}}>Phone Number:</p>
                    <p className="h4" style={{color: "var(--saffron)"}}>07387576977</p>
                </div>
                <div className="row mx-5 my-2 text-center">
                    <p className="h4" style={{color: "var(--sky-blue)"}}>Email:</p>
                    <p className="h4" style={{color: "var(--saffron)"}}>davidfrommont@gmail.com</p>
                </div>
                <div className="row mx-5 my-2 text-center">
                    <p className="h4" style={{color: "var(--sky-blue)"}}>Discord:</p>
                    <p className="h4" style={{color: "var(--saffron)"}}>@davidstaco</p>
                </div>
                <div className="row mx-5 my-2 text-center">
                    <p className="h4" style={{color: "var(--sky-blue)"}}>GitHub:</p>
                    <p className="h4" style={{color: "var(--saffron)"}}>@dfrommont</p>
                </div>
                <div className="row mx-5 my-2 text-center">
                    <p className="h4" style={{color: "var(--sky-blue)"}}>Instagram:</p>
                    <p className="h4" style={{color: "var(--saffron)"}}>@davidfrommont</p>
                </div>
                <div className="row mt-2 p-3 justify-content-center">
                    <div className="col-auto">
                        <Link to="https://discordapp.com/users/532292781004029952" target="_blank">
                            <img src={discord} style={{width: "10vw"}} alt="discord logo"></img>
                        </Link>
                    </div>
                    <div className="col-auto">
                        <Link to="https://github.com/dfrommont" target="_blank">
                            <img src={github} style={{width: "15vw"}} alt="github logo"></img>
                        </Link>
                    </div>
                    <div className="col-auto">
                        <Link to="https://www.instagram.com/davidfrommont/" target="_blank">
                            <img src={instagram} style={{width: "10vw"}} alt="instagram logo"></img>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;