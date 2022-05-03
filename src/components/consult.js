import React from "react";
import  "./consult.css";
import CustomButton from "./button";
import Doctor from "../assets/icons/Doctor.png";

const consult = ({}) => {
    return (
        <div style={{background: "linear-gradient(270deg, #DADAE4 0.25%, #EEEEF0 24.33%, #F8F8F8 52.08%, #FEFEFE 100%)"}}>
            <div><h2 className="head2">Consult with wellness experts</h2></div>
            <p className="para">Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you. </p>
            <CustomButton text={"Get a consultation"}/>
            <div style={{marginTop: "20px"}}>
                <img src={Doctor}/>
            </div>
        </div>
        
    )
}
    
export default consult;