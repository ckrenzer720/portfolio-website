import calculatorPng from "../images/calculator.png";
import noPhotoPng from "../images/noPhoto.png";

const projectsData = [
  {
    id: 1,
    title: "Calculator App",
    description: "It's a calculator",
    image: calculatorPng,
    tech: ["React", "Node", "Styled-Components"],
    link: "https://basic-calculator-three-gules.vercel.app",
  },
  {
    id: 2,
    title: "Authentication and Testing Project",
    description:
      "Feel free to take a look at this repository on GitHub. This project is a Node.js-based authentication and testing challenge focused on implementing user authentication and API security. It involves: User Authentication to receive a JWT, protected API routes, security implementation using bcryptjs to hash passwords, E2E testing requiremnets, and database management using SQL",
    image: noPhotoPng,
    tech: ["Express", "Bcrypt", "SQLite", "Jest"],
    link: "https://github.com/ckrenzer720/web-sprint-challenge-authentication-and-testing.git",
  },
];

export default projectsData;
