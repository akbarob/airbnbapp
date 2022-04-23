import React from "react"
import logo from "../images/airbnb.png"
import { Navbar } from "reactstrap"
export default function Header() {
    return(
        <Navbar className="shadow">
            <img src={logo} className="logo"/>
        </Navbar>
    )
}