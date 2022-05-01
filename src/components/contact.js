import React ,{ Fragment } from "react";
import "./contact.css";
import {AiOutlineRight} from "react-icons/ai";
import { FiFacebook,FiTwitter } from "react-icons/fi";


const contact = ({}) => {
    return (
        <div style={{backgroundColor: "black", height:"40vh"}}>
            <div style={{marginLeft: "300px"}}>
                <span style={{position:"relative", top: "20px"}}><span style={{marginRight:"10px"}}><FiFacebook style={{color: "white"}}/></span><span  style={{marginLeft:"10px"}}><FiTwitter style={{color: "white"}}/></span></span>
            </div> 
            <div style={{marginTop: "20px"}}>
                <span style={{color: "white", marginLeft:"50px", marginTop:"100px"}}>Products <AiOutlineRight /></span>
            </div>
            <div style={{marginTop: "15px"}}>
                <span style={{color: "white", marginLeft:"50px"}}>Our Science <AiOutlineRight /></span>
            </div>
            <div style={{marginTop: "15px"}}>
                <span style={{color: "white", marginLeft:"50px"}}>Vision & Mission <AiOutlineRight /></span>
            </div>
            <div style={{marginTop: "15px"}}>
                <span style={{color: "white", marginLeft:"50px"}}>About Us <AiOutlineRight /></span>
            </div>
            <div style={{marginTop: "15px"}}>
                <span></span>
            </div>
            <div><hr className="line"></hr></div>
        </div>
        
    )
}
    
export default contact;