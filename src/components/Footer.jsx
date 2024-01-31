import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { FaSquareXTwitter,FaSquareGithub, FaSquareWhatsapp } from "react-icons/fa6"

function Footer(){
    return (
        <div>
            <a href=""><FaSquareXTwitter/></a>
            <a href=""><BsLinkedin/></a>
            <a href=""><FaSquareGithub/></a>
            <a href=""><FaSquareWhatsapp/></a>
        </div>
    )
    
}

export default Footer;