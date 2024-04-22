import React from "react";
import { useParams } from "react-router-dom";
import HeaderAnimated from "../Components/HeaderAnimated";
import BouncingBall from "../Components/Bounce";
import "../CSS/UserPage.css"
import LeftAnimation from "../Components/LeftAnimation";

const introContainerStyle={
  borderRadius: "120px 120px 120px 120px",
  marginBottom: "40px",
  minHeight: "600px",
  display: "flex", // Add display flex
  justifyContent: "center" // Add justify-content center
  
}
export default function UserPage() { // 
  return (
    <>
    <HeaderAnimated content="Contact"></HeaderAnimated>
    <section className="intro-container" style={introContainerStyle}>
      {/* <div className="socials"> */}
        <LeftAnimation> 
        <ul className="socialist">
            <li className="socialelement">
            <a href="https://www.instagram.com/scholtesq/" rel="noreferrer" target="_blank">
              Instagram</a>
              </li>
              <li className="socialelement">
              <a href="https://github.com/qscholtes" rel="noreferrer" target="_blank"> Github</a>
              </li>
              <li className="socialelement">
              E-mail: Quintenscholtes@hotmail.com
              </li>
              <li className="socialelement">
              <a href="https://www.linkedin.com/in/quinten-scholtes/" rel="noreferrer" target="_blank"> LinkedIn </a>
              </li>
        </ul>
        </LeftAnimation>
      {/* </div> */}
    
    </section>

    

    </>
  );
}