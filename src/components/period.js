import React from "react";
import "./period.css";
import CustomButton from "./button";
import Calendar from "../assets/icons/calender.png"

const period = ({}) => {
    return (
        <div style={{background: "linear-gradient(176.88deg, #F3B8BC 2.58%, #FFDAD4 93.07%)"}}>
            <div><h2 className="head2">Track your period</h2></div>
            <p className="para">Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data.  </p>
            <CustomButton text={"Track your period on the app"}/>
            <div style={{marginTop: "20px"}}> 
                <img src={Calendar}/>
            </div>
        </div>
        
    )
}
    
export default period;