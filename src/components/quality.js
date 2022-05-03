import React from "react";
import "./quality.css";

const quality = (importantThing = {}) => {
    return (
        <div style={{background: "linear-gradient(165.41deg, #D99EC9 0%, rgba(246, 240, 196, 0) 100%)"}}>
            <div style={{marginTop: "70px"}}>
                <h2 className="head2">What makes us different?</h2>
            </div>
            <div>
                <h1 className="head1">Reimagining and rewiring self-care</h1>
            </div>
            <div>
                <p className="para">You care about conscious consumption, and so do we.</p> <br/><br/> 
                <p className="para">When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best </p><br/><br/> 
                <p className="para">We collaborate with researchers and doctors to </p><br/> 
                <ul> <li><p className="para"> Help you get granular about your health and self-care with personalized insights, and </p></li><br/> 
                <li><p className="para">Equip you with simple, sustainable products that get the job done </p> </li> </ul><br/> 
                <p className="para">No to-the-moon-and-back claims in this neck of the woods.</p> <br/><br/> 
                <p className="para">We’re just solving real problems for real people here.</p>
            </div>
        </div>
    )
}
    
export default quality;