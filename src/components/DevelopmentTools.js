import React from "react";
import nextJSIcon from "../assets/next_js_icon.svg";
import graphqlIcon from "../assets/graphql_icon.svg";
import mongoDBIcon from "../assets/mongodb_icon.svg";
import tailwindIcon from "../assets/tailwind_css_icon.svg";
import cssIcon from "../assets/CSS3_icon.svg";
import nodeJSIcon from "../assets/nodejs_icon.png";
import reactIcon from "../assets/react_icon.png";
import cypressIcon from "../assets/cypress_icon.png";
import htmlIcon from "../assets/html_icon.png";
import javascriptIcon from "../assets/javaScript_icon.png";
import gitIcon from "../assets/git_icon.png";
import typeScriptIcon from "../assets/typescript.svg";

export const DevelopmentTools = () => {
  return (
    <div>
      <h2 className="text-[#252525] dark:text-[#e4e4e4] text-2xl font-bold mb-4">
        Development Tools
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 dark:text-[#e4e4e4] w-full text-base font-semibold select-none">
        <Tool icon={reactIcon} name="ReactJS" />
        <Tool icon={nodeJSIcon} name="Node.js" />
        <Tool icon={nextJSIcon} name="Next.js" />
        <Tool icon={cypressIcon} name="Cypress" />
        <Tool icon={mongoDBIcon} name="MongoDB" />
        <Tool icon={graphqlIcon} name="GraphQL" />
        <Tool icon={javascriptIcon} name="JavaScript ES6" />
        <Tool icon={htmlIcon} name="HTML5" />
        <Tool icon={cssIcon} name="CSS3" />
        <Tool icon={gitIcon} name="Git & Github" />
        <Tool icon={tailwindIcon} name="Tailwind CSS" />
        <Tool icon={typeScriptIcon} name="TypeScript" />
      </ul>
    </div>
  );
};

const Tool = ({ icon, name }) => (
  <li className="bg-[#e6e3e3] dark:bg-[#282828] flex items-center rounded-lg p-2">
    <img src={icon} className="inline h-8 w-8 mr-2" alt={`${name} logo`} />
    {name}
  </li>
);
