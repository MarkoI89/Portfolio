import NavBar from "../../components/navBar/NavBar";
import photo from "../../assets/SIA_0367.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SvgIcon } from "@mui/material";
import { useState, useEffect } from "react";
import cv from "../../assets/Marko Ivezic CV.pdf-4.pdf";

import "./homePage.css";
function LetterByLetterText({ text }) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let direction = 1; // 1 for appearing, -1 for disappearing

    const interval = setInterval(() => {
      if (direction === 1) {
        if (currentIndex <= text.length) {
          setVisibleText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          direction = -1; // Start disappearing
        }
      } else if (direction === -1) {
        if (currentIndex >= 0) {
          setVisibleText(text.substring(0, currentIndex));
          currentIndex--;
        } else {
          clearInterval(interval);
          direction = 1; // Start appearing again
        }
      }
    }, 100); // Adjust the interval speed as needed

    return () => {
      clearInterval(interval); // Cleanup on unmount
    };
  }, [text]);

  return <div>{visibleText}</div>;
}

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    `I love to code`,
    "I love to take photos",
    "I love to do sport",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change text every 5 seconds

    return () => {
      clearInterval(interval); // Cleanup on unmount
    };
  }, []);

  const clickLinkedin = () => {
    window.location.href = "https://www.linkedin.com/in/marko-ivezic/";
  };

  const clickGitHub = () => {
    window.location.href = "https://github.com/MarkoI89";
  };

  const clickInstagram = () => {
    window.location.href = "https://www.instagram.com/mare_ivezic/";
  };

  const handleDownload = () => {
    // You can specify the file URL or data here
    const fileUrl = cv;

    // Create an invisible anchor element to trigger the download
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "Marko_Ivezic_CV"; // Specify the desired file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="homePage">
      <div>
        <NavBar />
      </div>
      <div className="photoAndIntro">
        <div className="personalImage">
          <img className="photo" src={photo} alt="" />
        </div>
        <div className="intro">
          <p className="shortIntro">
            Hello, I am <span style={{ color: "#29ef53" }}>Marko Ivezic</span>,
            Full stack web developer based in Paris
          </p>
          <hr style={{ marginBottom: "10px" }} />
          <div>
            <SvgIcon
              style={{
                backgroundColor: "gray",
                borderRadius: "50%",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={clickLinkedin}
              component={LinkedInIcon}
            />
            <SvgIcon
              style={{
                backgroundColor: "gray",
                borderRadius: "50%",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={clickGitHub}
              component={GitHubIcon}
            />
            <SvgIcon
              style={{
                backgroundColor: "gray",
                borderRadius: "50%",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={clickInstagram}
              component={InstagramIcon}
            />
          </div>
          <button onClick={handleDownload} className="downloadCv">
            Download CV
          </button>
        </div>
      </div>
      <div className="basicInfoAndText">
        <div className="basicInfo">
          <p>Email: markoivezic89@gmail.com</p>
          <p>Phone: +33767861787</p>
        </div>
        <div className="movingText">
          <LetterByLetterText text={texts[currentIndex]} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
