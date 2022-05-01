import React ,{ Fragment } from "react";
import styles from "./about.css";
import TestTube from "../assets/icons/test_tube.png";
import Drop from "../assets/icons/drop.png";
import Star from "../assets/icons/star.png";
import Phone from "../assets/icons/phone-call.png";


const about = ({}) => {
    return (
        <div>
            <style>{'body { background: linear-gradient(180deg, #FFF6FB 0%, #E7F6FC 33.33%, rgba(213, 224, 255, 0) 100%); }'}</style>
            <div><h2 className="about">{"About Diana"}</h2></div>
            
            <div><h3 className="platform">{" A platform that looks out for you"}</h3></div>
            <div><p className="description">{"Diana empowers you to understand how your body works so you can look and feel your best."}</p></div>
            <div><hr className="line"></hr></div>
            <div><h2 className="phylospy">{"Our Philosophy"}</h2></div>
            <div><h2 className="desc1">{"Sustainable wellness is a big-picture, inside out approach"}</h2></div>
            <div><h3 className="desc2">{"Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. That’s why we’ve created an integrated ecosystem of: "}</h3></div>
            <img className="tube" src={TestTube}/>
            <img className="drop" src={Drop}/>
            <div>
                <h4 className="desc3">Consciously formulated products that deliver feel-good results fast</h4>
                <img className="imge" src={Star}/>
                <h4 className="desc3">In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body</h4>
                <img className="imge" src={Phone}/>
                <h4 className="desc3">In-app consultation portals that connect you with compassionate wellness experts</h4>
            </div>
            <div style={{marginTop: "70px"}}>
                <h4 className="desc4">Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.</h4>
            </div>
            
    
        </div>
    )
}

export default about;