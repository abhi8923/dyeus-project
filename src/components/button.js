import React from "react";
import "./button.css"



const CustomButton = (props) => {
    
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "18px 45px",
            width: "315px",
            height: "30px",
            background: "linear-gradient(297.28deg, #F66E6E 67.01%, rgba(246, 110, 110, 0) 123.71%)",
            borderRadius: "70px"
        }}>
            <span style={{
                fontWeight: "bold",
                color: "white"
            }}>{props.text}</span>
        </div>
        
    )
}

export default CustomButton;