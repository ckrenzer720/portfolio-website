import calculatorPng from "../images/calculator.png";
import noPhotoPng from "../images/noPhoto.png";
import pokeDexPng from "../images/pokeDex.png";

const projectsData = [
  {
    id: 1,
    title: "Calculator App",
    description: "It's a calculator",
    image: calculatorPng,
    tech: ["React", "Node", "Styled-Components"],
    link: "https://basic-calculator-three-gules.vercel.app",
    repo: "https://github.com/ckrenzer720/basic-calculator.git",
  },
  {
    id: 2,
    title: "Authentication and Testing Project",
    description:
      "Feel free to take a look at this repository on GitHub. This project is a Node.js-based authentication and testing challenge focused on implementing user authentication and API security. It involves: User Authentication to receive a JWT, protected API routes, security implementation using bcryptjs to hash passwords, E2E testing requiremnets, and database management using SQL",
    image: noPhotoPng,
    tech: ["Express", "Bcrypt", "SQLite", "Jest"],
    repo: "https://github.com/ckrenzer720/web-sprint-challenge-authentication-and-testing.git",
  },
  {
    id: 3,
    title: "PokeDex v1.1 (Currently in Development)",
    description:
      "This PokéDex is a modern SPA that allows Pokémon trainers to browse and explore the world of Pokémon. The application features user authentication, detailed Pokémon information, and personalized user profiles.",
    image: pokeDexPng,
    tech: ["React.js", "Redux Toolkit", "Auth0", "Axios"],
    repo: "https://github.com/ckrenzer720/PokeDex-v1.1.git",
  },
];

export default projectsData;
