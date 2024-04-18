import React from "react";
import HeaderAnimated from "../Components/HeaderAnimated";
import Skills from "../Components/Skills.tsx";
export default function HomePage() {
return (
  <>
    <HeaderAnimated content="Welcome"></HeaderAnimated>
    <p> Hello! I'm Quinten, a first-year Computer Science student with a interest for creating immersive web applications.
    </p>
    <p>I was born in the Netherlands and grew up in Germany where I attended an International school. Through growing up in such a 
      diverse environment I am able to fluently speak English,German and Dutch. </p>
    <p> The skill-set that I have accumulated so far consists of :  </p>
    <Skills></Skills>
    <p>
    </p>
  </>
);
}