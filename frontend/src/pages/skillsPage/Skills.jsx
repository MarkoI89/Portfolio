import React from "react";
import "./skills.css";
import CodeIcon from "@mui/icons-material/Code";
import PhonelinkRoundedIcon from "@mui/icons-material/PhonelinkRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { SvgIcon } from "@mui/material";

function Skills() {
  return (
    <div className="skillsPage">
      <div className="skillDescription">
        <h2>Skills Overview</h2>
        <hr />
        <p className="skillText">
          Proficient in the MERN stack, showcasing expertise in MongoDB for
          efficient and scalable data management. With Express.js, I navigate
          the server-side landscape, effortlessly handling routes and requests.
          React is my playground for crafting dynamic and interactive user
          interfaces, ensuring a seamless and engaging user experience. Node.js
          powers my backend, allowing me to execute JavaScript server-side with
          speed and precision. Quick and eager learner of TypeScript, swiftly
          adapting its static typing for robust and clean JavaScript
          development. Also proficient in Python, leveraging its versatility for
          web development, and automation with a keen eye for readability and
          efficiency. Together, these technologies converge harmoniously to
          create robust, full-stack web applications.
        </p>
      </div>
      <div className="skillsList">
        <div className="skillsContainer">
          <SvgIcon className="skillIcon" component={CodeIcon} />
          <p>Backend</p>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skillsContainer">
          <SvgIcon className="skillIcon" component={StorageRoundedIcon} />
          <p>Data Base</p>
          <ul>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
        <div className="skillsContainer">
          <SvgIcon className="skillIcon" component={PhonelinkRoundedIcon} />
          <p>Frontend</p>
          <ul>
            <li>Html5</li>
            <li>Css</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="skillsContainer">
          <SvgIcon className="skillIcon" component={MoreHorizRoundedIcon} />
          <p>Other</p>
          <ul>
            <li>Photoshop</li>
            <li>Lightroom</li>
            <li>Illustrator</li>
            <li>Premiere Pro</li>
            <li>AutoCad</li>
            <li>Ms Office</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
