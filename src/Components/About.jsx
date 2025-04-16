/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Software Developer specializing in backend development with expertise in scalable microservices and database technologies. My career goal is to build high-performance systems and drive technological innovation.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Programming Languages [C, C++, C#, Java, Python, JavaScript, Golang, Shell Script]",
  "Backend Frameworks [Django, Gin (Go), Node.js, Spring Boot, Streamlit]",
  "Frontend [HTML, CSS, Bootstrap, ReactJS]",
  "Containerization & Orchestration [Docker, Kubernetes]",
  "Databases [MySQL, MongoDB, PostgreSQL]",
  "Cloud [AWS, Azure]",
  "Version Control [Git, GitHub]",
  "Kong API Gateway",
  "Computer Vision [OpenCV, UltraLytics, Openmm]",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about crafting efficient, scalable architectures and leveraging emerging frameworks and languages like Django, Spring Boot, and Golang to solve complex problems. I strive to create impactful solutions that blend innovation with practicality.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
