import React from "react"
import { Navbar } from "reactstrap"
export default function Header() {
    return(
        <Navbar className="shadow">
            <img src='./images/airbnb.png' className="logo"/>
        </Navbar>
    )
}