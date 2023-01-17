import React from "react"
import logo from "../images/logo.png"
import {Link, Route, Routes} from "react-router-dom"


export default function Header(){
    return (
        <>
        <div className="flex-container">

        <div className="left-header">
            <img src={logo} alt=""/>
            <p>My Learning Journal</p>

        </div>

        <div className="right-header">
           
                <Link className="link" to="/"> 
                    Home
                </Link>

                <Link className="link" to="/AboutMe" >
                   About Me
                </Link>

        </div>

            </div>
  

        </>
    )
}