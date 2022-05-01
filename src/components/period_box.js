import React ,{ Fragment } from "react";
import "./period_box.css";
import PMS from "../assets/icons/pms.png"

const period_box = ({}) => {
    return (
        <div style={{background: "#F66E6E"}}>
            <div><h2 className="head2" style={{textAlign: "center"}}><span style={{color: "white"}}>Get your personalized period box</span></h2></div>
            <div>
                <img src={PMS}/>
            </div>
            <p className="para" style={{textAlign: "center"}}><span style={{color: "white"}}>Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app. </span></p>
            
        </div>
        
    )
}
    
export default period_box;