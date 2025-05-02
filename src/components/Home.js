import React from "react";
import me from "../images/me.jpg";

function Home() {
  return (
    <div id="about-me1">
      <h2>my name is Conner Krenzer</h2>
      <br />
      <img src={me} />
      <header className="about-me2"> About Me </header>
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
        {/* I was very fortunate to marry the best woman I have ever met that I pined after for years and we're madly in love. We have two cats and an apartment filled with plants. We love to go out to eat to criticize restaraunts. We travel every chance we can get to anywhere but Kansas. We also co-parent two amazing kids with my polyfamily. I'm bi and looking for a chance to suck dick. Call me  */}
      </p>
      <div className="experience">
        <header>Experience</header>
        <p id="para">experience coming soon..</p>
      </div>
    </div>
  );
}

export default Home;
