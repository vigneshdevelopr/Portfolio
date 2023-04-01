import { Grid } from "@mui/material";
import React from "react";
import Base from "./Base";
import aboutcode from "../assets/aboutCode copy.png";
import Typewriter from "typewriter-effect";
import webdev from "../assets/Web-designer.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import AOS from "aos";
import "aos/dist/aos.css"; 
// ..
AOS.init();

function About() {
  return (
    <div>
      <Grid container>
        <Grid item md>
          <div data-aos="fade-right" data-aos-duration="3000">
            <img id="webdev" src={webdev} alt="webdev" />
          </div>
        </Grid>
        <Grid item md>
          <div
            id="about-typo"
            data-aos="fade-left"
            data-aos-duration="3000"
            style={{ marginTop: "3rem" }}
          >
            <p>Hi, I'm </p> <h3>VIGNESH G</h3>
            <div id="typewriter">
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Developer",
                    "Frontend Developer",
                    "Backend Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p>
              Hi, I am a highly certified full stack developer with experience
              with many different tools and programming languages. knowledgeable
              about database administration requirements for both frontend and
              backend development. handles every step of the procedure with
              ease. cooperative team player that is eager to learn from and
              progress with the organisation.
            </p>
            <div>
              <GitHubIcon
                style={{ marginRight: "1cm", cursor: "pointer" }}
                onClick={() =>
                  window.open("https://github.com/vigneshdevelopr", "_blank")
                }
              />
              <LinkedInIcon
                style={{ marginRight: "1cm", cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vigneshdeveloper/",
                    "_blank"
                  )
                }
              />
              <InstagramIcon
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/vignesh_ganesan.dev/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
