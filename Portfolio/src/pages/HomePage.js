import React from "react";
import HeaderAnimated from "../Components/HeaderAnimated";
import Skills from "../Components/Skills.tsx";
import Portrait from "../Components/Portrait.js";
import "../CSS/homepage.css";
import ContentAnimated from "../Components/ContentAnimated.js";

export default function HomePage() {
  return (
    <>
      <HeaderAnimated content="Welcome"></HeaderAnimated>
      <Portrait></Portrait>
      <div className="intro-part-one">
        <ContentAnimated content="Originally from the Netherlands and raised in Germany, where I attended an International school, I've had the privilege of growing up in a diverse environment. I am  fluent in English, German, and Dutch, I embrace cultural diversity as a strength."></ContentAnimated>
      </div>
      <Skills></Skills>
      <div className="dark-border">
        <div className="left"></div>
        <div className="dark-fill"></div>
        <div className="right"></div>
      </div>
      <div className="intro-part-two">
        <ContentAnimated
          content="Throughout my university journey, I'm excited to explore additional languages like C++ and Python, along with various frameworks. In my free time, I actively enhance my understanding of frameworks like React.js through hands-on projects. I'm also delving into Rust, expanding my horizons beyond web development.
            While I've primarily focused on front-end development, I'm eager to deepen my knowledge and skills before venturing into back-end development."
        ></ContentAnimated>
        <ContentAnimated
          content="In Computer Science, my interests span web development, AI, and Cybersecurity. The vast scope of these technologies intrigues me, as they continually evolve with new advancements. I consider myself curious and open-minded, always seeking opportunities to learn and grow.
          I don't strive for perfection because I believe it's impossible to attain and subjective. Instead, I prioritize improvement, embracing challenges and setbacks as opportunities for growth. Whether it's refining the projects I work on, honing my skills, or collaborating within a team, my goal is constant progress."
        ></ContentAnimated>
      </div>

      <div className="intro-part-three">
        <ContentAnimated content="        My ultimate goal is to establish a career in web development, driven by my fascination with the ongoing digital transformation of platforms and technologies. I'm drawn to the field's dynamic nature, where innovation and creativity converge to shape the future of online experiences."></ContentAnimated>
        <ContentAnimated content="If you'd like to get in touch with me, please refer to my social-media links below or visit the  contact page"></ContentAnimated>
      </div>
    </>
  );
}
