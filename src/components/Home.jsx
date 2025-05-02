import React from "react";
import me from "../images/me.jpg";
import Experience from "./Experience";

function Home() {
  return (
    <div id="about-me1">
      <h2>My Name is Conner Krenzer</h2>
      <br />
      <img src={me} alt="Conner Krenzer" />
      <h3 className="about-me2">About Me</h3>
      <p id="para">
        I grew up in the rugged beauty of Colorado, and at 18, I moved to
        California to train as a professional chef. For the next decade, I
        worked in some of the most fine dining restaurants across California and
        Colorado, blood, sweat, and tears into the kitchen; but by 2023, after
        years of culinary success, I knew it was time for a change. I then
        decided to pivot and leave the hospitality world behind. That’s when a
        friend of mine mentioned going through BloomTech’s (formerly Lambda
        School) full-stack web development bootcamp, a decision that set me on
        the path to becoming a software developer and continuing my side passion
        for technology.
      </p>
      <section className="experience">
        <h3>Experience</h3>
        <Experience />
      </section>
    </div>
  );
}

export default Home;
