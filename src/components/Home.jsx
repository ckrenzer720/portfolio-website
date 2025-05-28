import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Experience from "./Experience";

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  margin: 4rem 0;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const Profession = styled.h2`
  font-size: 1.8rem;
  color: var(--text-light);
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;

  a {
    color: var(--primary-color);
    font-size: 1.5rem;
    transition: color var(--transition-speed);

    &:hover {
      color: var(--primary-light);
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const Button = styled.a`
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius-md);
  transition: background-color var(--transition-speed);

  &:hover {
    background-color: var(--primary-light);
  }
`;

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: var(--border-radius-lg);
  margin: 0 auto;
`;

const AboutContent = styled.div`
  text-align: left;
`;

const SkillsSection = styled.section`
  margin: 4rem 0;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 6px var(--shadow-color);
`;

const ProjectsSection = styled.section`
  margin: 4rem 0;
`;

const Carousel = styled.div`
  margin: 2rem 0;
  overflow: hidden;
`;

function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <Name>Your Name</Name>
        <Profession>Full Stack Developer</Profession>

        <SocialLinks>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </SocialLinks>

        <ActionButtons>
          <Button href="/resume">Resume</Button>
          <Button href="/about">About Me</Button>
        </ActionButtons>
      </HeroSection>

      <AboutSection>
        <ProfileImage src="/path-to-your-image.jpg" alt="Your Name" />
        <AboutContent>
          <h2>About Me</h2>
          <p>
            I grew up in the rugged beauty of Colorado, and at 18, I moved to
            California to train as a professional chef. For the next decade, I
            worked in some of the most fine dining restaurants across California
            and Colorado, blood, sweat, and tears into the kitchen; but by 2023,
            after years of culinary success, I knew it was time for a change. I
            then decided to pivot and leave the hospitality world behind. That's
            when a friend of mine mentioned going through BloomTech's (formerly
            Lambda School) full-stack web development bootcamp, a decision that
            set me on the path to becoming a software developer and continuing
            my side passion for technology.
          </p>
          <h3>Things I'm Good At</h3>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
        </AboutContent>
      </AboutSection>

      <SkillsSection>
        <h2>Skills</h2>
        <SkillsGrid>
          <SkillCard>
            <h3>Technical Skills</h3>
            <ul>
              <li>JavaScript/TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Python</li>
              {/* Add more skills */}
            </ul>
          </SkillCard>
          <SkillCard>
            <h3>Soft Skills</h3>
            <ul>
              <li>Communication</li>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Time Management</li>
              {/* Add more skills */}
            </ul>
          </SkillCard>
        </SkillsGrid>
      </SkillsSection>

      <ProjectsSection>
        <h2>Recent Projects</h2>
        <Carousel>{/* Add your project carousel here */}</Carousel>
      </ProjectsSection>

      <section className="experience">
        <h3>Experience</h3>
        <Experience />
      </section>
    </HomeContainer>
  );
}

export default Home;
