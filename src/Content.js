import React from "react";

import { Chart } from 'chart.js';

import "./Content.css";
import "./Home.css";
import "./About.css";
import "./Skills.css";
import "./Experience.css";
import "./Project.css";
import "./Skills.css";
import { Bar } from 'react-chartjs-2';
import {  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Content = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        title:'skills'
      },
      title: {
        display: false,
      }
    }
  };

  const data = {
    labels: ['Java', 'Python', 'C' , 'c++'],
    datasets: [
      {
        label:'programming skills',
        data: [90, 80, 10, 20],
        backgroundColor: 'rgb(204, 204, 255)'
      }
    ]
  };

  const data2 = {
    labels: ['MongoDB', 'React', 'html', 'css' , 'Flask' , 'AWS'],
    datasets: [
      {
        label:'Technologies',
        data: [70 , 60 , 90 , 50 ,60 , 10],
        backgroundColor: '#99ccff'
      }
    ]
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

      <div id="skills" className="skills" >
        <h1>Skills</h1>
        <div>
        <h2 style={{textAlign:"center"}}>Programming skills</h2>
        <Bar options={options} data={data}  />
        </div>
        <div>
        <h2 style={{textAlign:'center'}}>Technologies</h2>
        <Bar options={options} data={data2}  />
        </div>
      </div>

      <div id="experience" className="experience">
        <h1>Experience</h1>
        <div className="about-content">
          <div className="gif-container">
            <img src="/assets/education.jpg" alt="About GIF" />
          </div>
          <div className="text-content">
            <h2>Psna College of Engineering and Technology</h2>
            <h4>B.Tech Information Technologies</h4>
            <p>
              I am Currently pursing III yr B.Tech Information Technology in PSNA 
            </p>
          </div>
        </div>
      </div>

      <div id="education" className="education">
        <h1>Education</h1>
        <p>This is my education page</p>
      </div>

      <div id="projects">
        <h1>Projects</h1>
      </div>
      <div id="projects" className="project">        
        <ImageOverlay imageUrl="/assets/homepage.jpg" text="Hello World" />
        <ImageOverlay imageUrl="/assets/homepage.jpg" text="Hello World" />
        <ImageOverlay imageUrl="/assets/homepage.jpg" text="Hello World" />
        <ImageOverlay imageUrl="/assets/homepage.jpg" text="Hello World" />
        <ImageOverlay imageUrl="/assets/homepage.jpg" text="Hello World" />
        <ImageOverlay imageUrl="/assets/homepage.jpg" text="Hello World" />
      </div>

      <div id="contact" className="footer">
        <h1>Contact</h1>
      </div>
    </div>
  );
};

export default Content;
