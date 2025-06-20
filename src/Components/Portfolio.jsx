/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/binary-code-475664.jpg";

// const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */


const projectList = [
  {
    title: "LibShop",
    description:
      "Users can borrow and buy books from libraries and shops registered on the website.",
    url: "https://github.com/FaIhAjAlAmToPu/libshop",
  },
  {
    title: "Supply Chain and Stock Management",
    description:
      "The Supply Chain and Stock Management System is a microservices-based project designed to optimize and streamline inventory and logistics processes for businesses.",
    url: "https://github.com/Supply-Chain-Stock-Management/CSE-408",
  },
  {
    title: "Thesis: Dense Crowd Tracking",
    description:
      "Tracking human heads in dense crowds using computer vision and deep learning. The project introduces a novle loss function to improve the performance of the detection model in dense crowd.",
    url: "https://github.com/Dense-Crowd-Tracking/DCT",
  },
  {
    title: "SportTrack",
    description:
      "tracking players and ball in sports using computer vision and deep learning.",
    url: "https://github.com/FaIhAjAlAmToPu/SportTrack",
  },
  {
    title: "Your Exam",
    description: "An AI-powered tool for generating exam questions and evaluating answers using FastAPI, NextJS, LangChain, and Mistral AI, with time-based mark deductions.",
    url: "https://github.com/FaIhAjAlAmToPu/your-exam",
  },
  {
    title: "FakeDet",
    description: "A project to detect fake news using different classifier models and finally using langchain with MistralAI, designed to identify manipulated news.",
    url: "https://github.com/FaIhAjAlAmToPu/fakeDet",
  },
  {
    title: "AIvsREAL",
    description: "A comparative analysis to distinguish between real and AI-generated images, built with deep learning models.",
    url: "https://github.com/FaIhAjAlAmToPu/AIvsREAL",
  },
  {
    title: "Ultralytics Loss Function Design",
    description: "Contributed a novel loss function to the Ultralytics framework, prioritizing dense and smaller object detection in crowded scenes.",
    url: "https://github.com/Dense-Crowd-Tracking/ultralytics",
  },
];

// const projectList = [
//   {
//     title: "10 Things To Know About Azure Static Web Apps 🎉",
//     description:
//       "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
//     url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
//   },
//   {
//     title: "Web Development for Beginners",
//     description:
//       "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
//     url: "https://github.com/microsoft/web-dev-for-beginners",
//   },
//   {
//     title: "My Resume Site",
//     description:
//       "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
//     url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
//   },
//   {
//     title: "GitHub Codespaces and github.dev",
//     description:
//       "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
//     url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
//   },
// ];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              style={{ textDecoration: "none", color: "inherit" }}
              className="box"
            >
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              <p className="small">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
