import React from "react";
import "./track.css";
import CustomButton from "./button";
import Pic1 from "../assets/icons/pic1.png";
import Pic2 from "../assets/icons/pic2.png";
import Pic3 from "../assets/icons/pic3.png";
import Pic4 from "../assets/icons/pic4.png";

const track = (importantThing = {}) => {
    return (
        <div style={{background: "linear-gradient(180deg, #FFF6FB 0%, #FFFFFF 100%)"}}>
            <div><h2 className="head2">Track your mood</h2></div>
            <p className="para">All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day. </p>
            <CustomButton text={"Track your mood on the app"}/>
            <div style={{marginTop:"20px"}}>
                <img src={Pic1} style={{marginLeft: "20px", marginRight: "20px"}} alt="pic1"/>
                <img src={Pic2} alt="pic2"/>
                <img src={Pic3} style={{marginLeft: "20px", marginRight: "20px"}} alt="pic3"/>
                <img src={Pic4} alt="pic4"/>
            </div>
        </div>
        
    )
}
    
export default track;