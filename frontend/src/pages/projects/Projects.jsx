import "./projects.css";
import project1Photo from "../../assets/Screenshot 2023-09-28 143456.jpg";
import project2Photo from "../../assets/autodraw 02_10_2023(1).png";
import project3Photo from "../../assets/Screenshot 2023-10-02 133013.png";
import letsshoot from "../../assets/Screenshot 2023-11-19 at 09-54-29.png";

function Projects() {
  const viewMIPhotography = () => {
    window.location.href = "https://markoivezicphotography.com";
  };

  const viewITalk = () => {
    window.location.href = "https://github.com/MarkoI89/ITalk";
  };

  const viewCalculator = () => {
    window.location.href = "https://markoi89.github.io/Calculator-React/";
  };

  const viewLetsshoot = () => {
    window.location.href = "https://letshoot.netlify.app/";
  };

  return (
    <div className="projectsPage">
      <div className="projectsHeadline">
        <h3>Projects</h3>
        <hr />
      </div>
      <div className="allProjects">
        <div className="projectContainer">
          <img src={project1Photo} alt="" />
          <h4>Marko Ivezic Photography</h4>
          <p style={{ textAlign: "justify" }}>
            Responsive Website about my photography work. Photos are stored on
            cloudinary, I have implemented authentication to be able to log in
            as an admin and access dashboard where I can update content directly
            from website
          </p>
          <div></div>
          <p>
            <span style={{ fontWeight: "600" }}>Backend:</span> Node.js,
            JavaScript.
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Data base:</span> MongoDB.
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Frontend:</span> React.js,
            JavaScript, Css, Material UI
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Status:</span> Deployed,
            constantly updated
          </p>
          <button onClick={viewMIPhotography} className="viewProjectButton">
            View Project
          </button>
        </div>
        <div className="projectContainer">
          <img src={letsshoot} alt="" />
          <h4>Lets shoot</h4>
          <p style={{ textAlign: "justify" }}>
            Lets shoot is a social network for artists, users can post
            photos, tag other artist, like/dislike photos, add/remove friends
            and follow their work on feed page
          </p>
          <div></div>
          <p>
            <span style={{ fontWeight: "600" }}>Backend:</span> Node.js,
            JavaScript.
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Data base:</span> MongoDB.
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Frontend:</span> React.js,
            JavaScript, Css, Material UI
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Status:</span> Deployed, planed
            update.
          </p>
          <button onClick={viewLetsshoot} className="viewProjectButton">
            View Project
          </button>
        </div>
        <div className="projectContainer">
          <img src={project2Photo} alt="" />
          <h4>ITalk</h4>
          <p style={{ textAlign: "justify" }}>
            Chat application, Users can make an account and search for other
            users for sending messages or continue chat exactly like in whatsapp
            or viber apps.
          </p>
          <div></div>
          <p>
            <span style={{ fontWeight: "600" }}>Backend:</span> Node.js,
            JavaScript.
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Data base:</span> MongoDB.
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Frontend:</span> React.js,
            JavaScript, Css.
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Status:</span> In development
          </p>
          <button onClick={viewITalk} className="viewProjectButton">
            View Project
          </button>
        </div>
        <div className="projectContainer">
          <img src={project3Photo} alt="" />
          <h4>Calculator React</h4>
          <p style={{ textAlign: "justify" }}>
            Calculator width different mods: Standard, Advanced and Converter.
            Both, Standard and Advanced have memory option for storing multiple
            values and operating with them. Convert mod is used to convert
            length and weight values
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Frontend:</span> React.js,
            JavaScript, Css.
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Status:</span> Deployed
          </p>
          <button onClick={viewCalculator} className="viewProjectButton">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
