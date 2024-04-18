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
    <p> Over the course of my university degree I will be introduced to C++, Python and several other frameworks.
      Currently in my free time I am actively going through the process of improving my understanding and knowledge of frameworks
      such as React.js, this includes creating websites for fun and as a method of practice.
      Within the domain of Web development I have only been able to explore the front-end domain so far. I would like to 
      get introduced delve deeper and solidify my skills before jumping into the world of back-end development. 
    </p>
  </>
);
}