import React from "react";

import { Chart } from "chart.js";

import "./Content.css";
import "./Home.css";
import "./About.css";
import "./Skills.css";
import "./Experience.css";
import "./Project.css";
import "./Skills.css";
import "./Education.css";
import { Bar } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Content = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        title: "skills",
      },
      title: {
        display: false,
      },
    },
  };

  const data = {
    labels: ["Java", "Python", "C", "c++"],
    datasets: [
      {
        label: "programming skills",
        data: [90, 80, 10, 20],
        backgroundColor: "rgb(204, 204, 255)",
      },
    ],
  };

  const data2 = {
    labels: ["MongoDB", "React", "html", "css", "Flask", "AWS"],
    datasets: [
      {
        label: "Technologies",
        data: [70, 60, 90, 50, 60, 10],
        backgroundColor: "#99ccff",
      },
    ],
  };

  const ImageOverlay = ({ imageUrl, text }) => {
    return (
      <div className="card">
        <img src={imageUrl} className="image" alt="Project" />
        <div className="overlay">
          <div className="text">{text}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div id="home" className="home">
        <div className="container">
          <div className="background-image">
            <img src="/assets/homepage.jpg" alt="background" />
            <div className="overlay-text">
              <h1>Welcome to My Portfolio</h1>
              <p>
                I am happy to share my experience and my skill and contribution
                to my work
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <h1>About Me</h1>
      </div>
      <div id="about" className="about">
        <div className="about-content">
          <div className="gif-container">
            <img src="/assets/about.gif" alt="About GIF" />
          </div>
          <div className="text-content">
            <h2>I am Selva Raanni</h2>
            <p>
              I am from Dindigul. Currently, I am studying B.Tech IT in PSNA
              College of Engineering and Technology. The best thing about myself
              is I don't give up easily and try until the last minute. <br />
              I always prefer to give my best over little things, and I believe
              this is the key which helps me to achieve success. <br />
              My hobbies are listening to music, singing, dancing, designing,
              and drawing. <br />
              My aim is to work in an IT company with a good salary package, and
              my biggest goal is to make my parents feel proud of myself. <br />
            </p>
          </div>
        </div>
      </div>

      <div id="skills" className="skills">
        <h1>Skills</h1>
        <div>
          <h2 style={{ textAlign: "center" }}>Programming skills</h2>
          <Bar options={options} data={data} />
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>Technologies</h2>
          <Bar options={options} data={data2} />
        </div>
      </div>

      <div id="experience">
        <h1>Experience</h1>
      </div>
      <div id="experience" className="experience">
        <div className="experience-content">
          <div className="experience-container">
            <img src="/assets/IITM.jpg" alt="IITM GIF" />
          </div>
          <div className="text-content">
            <h2>IITM Research Park</h2>
            <h4>Internship - Full time</h4>
            <p>
              <h5>Motorz Team , IITMRP </h5>
              • Administered MongoDB and integrated Flask API for Motor Mojo
              (MM) project , automating motor design from user inputs. <br />
              • Implemented HTTP methods in Python (Flask) for MM <br />
              • Executed 124 motor design calculations in Python <br />
              • Integrated OAuth2 authentication for login/signup pages on AWS
              using Cognito and Flask, and hosted MongoDB in AWS. <br />
              • Successfully completed anddeployed MDT on AWS cloud for
              <br />
              operational use.
              <h5> PiLabz, Zoho</h5>
              <br /> • Developed PiCAD, a software tool merging mechanical and
              electrical software for streamlined engineering design.
              <br />• Customized FreeCAD ,a design software with extra features,
              integrated KiCAD, and developed 2D PCB stator design.
              <br />• Single-handedly managed the first release of PiCAD on
              Windows, including creating a Windows installer for the PiCAD
              using NSIS.
            </p>
          </div>
        </div>
      </div>
      <div id="experience" className="experience">
        <div className="experience-content">
          <div className="experience-container">
            <img src="/assets/reccsar.jpg" alt="IITM GIF" />
          </div>
          <div className="text-content">
            <p>
              <h2>Reccsar Private Limited</h2>
              <h4>Remote Internship</h4>• Successfully completed a 6-month
              remote internship in Fullstack Web Development utilizing the MERN
              stack. <br />• Focused on mastering React and MongoDB through web
              page development, contributing to robust web apps
            </p>
          </div>
        </div>
      </div>

      <div id="education" >
        <h1>Education</h1>
        </div>
        <div id="education" className="education">
        <div className="education-content">
          <div className="education-container">
            <img src="/assets/education.jpg" alt="About GIF" />
          </div>
          <div className="text-content">
            <h2>Psna College of Engineering and Technology</h2>
            <h4>B.Tech Information Technology</h4>
            <p><h6>
              2021 – 2025, Dindigul
              <br /><br />
              Current CGPA - 8.77
              <br />
              <br /></h6>
              <h3>School Education</h3>
              St. Joseph’s Matric Hr Sec School , Dindigul
              <h6>
                HSC Percentage - 92.08
                <br />
                <br />
                SSLC Percentage - 92.8
              </h6>
            </p>
          </div>
        </div>
      </div>

      <div id="projects">
        <h1>Projects</h1>
      </div>
      <div id="projects" className="project">
        <ImageOverlay
          imageUrl="/assets/project_1.jpg"
          text="Hospital management system"
        />
        <ImageOverlay
          imageUrl="/assets/project_dashboard.jpg"
          text="project dashboard"
        />
        <ImageOverlay imageUrl="/assets/mart.jpg" text="Shopping mart" />
        <ImageOverlay
          imageUrl="/assets/microblogging.jpg"
          text="microblogging"
        />
        <ImageOverlay imageUrl="/assets/resturant.jpg" text="Food Delivery " />
      </div>

      <div id="contact" className="footer">
        <h1>Contact</h1>
      </div>
    </div>
  );
};

export default Content;
