import React ,{ Fragment } from "react";
import "./welness.css";
import CustomButton from "./button"

const welness = ({}) => {
    return (
        <div>
            <div>
                <h2 className="head2">Liberate your everyday wellness </h2>
            </div>
            <div>
                <h1 className="head1">Shop our self-care products</h1>
            </div>
            <div>
                <p className="para">Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.   </p>
            </div>
            <CustomButton text={"Upgrade your self care"} />
            <h3 className="head3">#NoNasties, we promise!</h3>
        </div>
    )
}
    
export default welness;