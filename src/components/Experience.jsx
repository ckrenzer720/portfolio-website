import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Student",
      company: "BloomTech",
      dates: "2023 - 2025",
      responsibilities: [
        "Developed full-stack web applications by leveraging JavaScript, React, and Node.js, implementing responsive UI components, managing state with Redux, and optimizing front-end performance.",
        "Engineered and deployed RESTful APIs using Express and SQL databases, designing efficient database schemas, writing complex queries, and ensuring data integrity through migrations and seeds.",
        "Implemented authentication and security best practices by integrating JSON Web Tokens (JWT), bcrypt hashing, session management, and protected routes to secure user data.",
        "Conducted rigorous testing and debugging using Jest, React Testing Library, and Supertest, writing unit and integration tests to validate application performance and reliability.",
      ],
    },
    {
      title: "Sous Chef",
      company: "Michelin Restaurants | Country Clubs",
      dates: "2013 - 2024",
      responsibilities: [
        "Led a team of 5+ chefs in a high-pressure environment, increasing efficiency by optimizing workflows and implementing process improvements, mirroring Agile coordination.",
        "Implemented operational improvements that reduced prep time by 20% by analyzing inefficiencies and streamlining kitchen processes, reflecting performance optimization in engineering.",
        "Resolved real-time operational issues under high-stakes conditions, ensuring seamless service and demonstrating problem-solving skills comparable to debugging production incidents.",
      ],
    },
  ];

  return (
    <section className="experience">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <p>{exp.dates}</p>
          <ul>
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
