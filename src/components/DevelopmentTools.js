import React from "react";

import gitIcon from "../assets/git_icon.png";
import mongoDBIcon from "../assets/mongo_icon.png";
import nodeJSIcon from "../assets/nodejs_icon.png";
import reactIcon from "../assets/react_icon.png";
import htmlIcon from "../assets/html_icon.png";
import gitHubIcon from "../assets/github_icon.png";
import figmaIcon from "../assets/Figma-logo.png";

export const DevelopmentTools = () => {
  const tools = [
    {
      icon: reactIcon,
      name: "Frontend Javascript Frameworks",
      desc: "(Angular, React, Next.js)",
    },
    {
      icon: nodeJSIcon,
      name: "Backend Javascript Framework",
      desc: "(Node.js, NestJS, Express)",
    },
    {
      icon: mongoDBIcon,
      name: "Database Management System",
      desc: "(MongoDB, MySQL, PostgreSQL)"
    },
    {
      icon: htmlIcon,
      name: "Web Design & Development",
      desc: "(HTML, CSS, JavaScript, TypeScript, Tailwind CSS)",
    },
    {
      icon: figmaIcon,
      name: "UI/UX Design",
      desc: "(Figma, Adobe Photoshop, Pen & paper)",
    },
    {
      icon: gitHubIcon,
      name: "CI/CD",
      desc: "(GitHub Actions, Heroku Pipelines)",
    },
    {
      icon: gitIcon,
      name: "Other",
      desc: "(Git, Postman, XAMPP)",
    },
  ];

  return (
    <div>
      <h2 className="text-[#252525] dark:text-[#e4e4e4] text-2xl font-bold mb-4">
        Development Tools
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 dark:text-[#e4e4e4]">
        {tools.map((tool, index) => (
          <Tool key={index} {...tool} />
        ))}
      </ul>
    </div>
  );
};

const Tool = ({ icon, name, desc }) => (
  <li className="flex border-2 border-[#d3d2d2] items-center rounded-lg p-2">
    <div>
      <img src={icon} className="h-12 w-12 mr-3" alt={`${name} icon`} />
    </div>
    <div>
      <h1 className="font-bold">{name}</h1>
      <p>{desc}</p>
    </div>
  </li>
);
