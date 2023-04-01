// import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
// import React from "react";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import flow from "../assets/stackoverflowicon.png";
import reactlogo from "../assets/icons8-react.svg";
import nodelogo from "../assets/icons8-node-js.svg";
import livelogo from "../assets/icons8-youtube-live.svg";
import clglogo from "../assets/stud-teachers.jpeg";
import comingsoon from "../assets/comingsoon.jpg";

const data = [
  {
    image: flow,
    title: "Stackoverflow-Clone",
    login: "LOGIN CREDENTIALS",
    Email: "vignesh@gmail.com",
    password: "password@123",
    react: "https://github.com/vigneshdevelopr/Stackoverflowclone_frontend",
    node: "https://github.com/vigneshdevelopr/StackoverflowClone_Backend",
    live: "https://inquisitive-gecko-1ed492.netlify.app/",
  },
  {
    image: clglogo,
    title: "Student-Teachers Database",
    login: "LOGIN CREDENTIALS",
    Email: "no credentials",
    password: "no credentials",
    react:
      "https://github.com/vigneshdevelopr/Crud-Api-Fetch-Stud-teach-database",
    node: "https://github.com/vigneshdevelopr/Backend-API",
    live: "https://celebrated-halva-24683e.netlify.app/",
  },
  {
    image: comingsoon,
    title: "COMING SOON !",
    login: "Will be Update shortly",
    Email: "",
    password: "",
    react:
      "https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-1520x800.webp",
    node: "https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-1520x800.webp",
    live: "https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-1520x800.webp",
  },
];

export default function Projects() {
  const theme = useTheme();

  return (
    <>
      <div>
        <div style={{ marginTop: "2cm" }}>
          <h1 id="Skills-typo" style={{ textAlign: "center" }}>
            Projects
          </h1>
        </div>
        <div
          id="project-sec"
          data-aos="fade-down"
          data-aos-duration="3000"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {data.map((content) => (
            <Card
              sx={{
                display: "flex",
                backgroundColor: "whitesmoke",
                maxWidth: "25rem",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {content.title}
                  </Typography>
                  <Typography color="text.primary" component="div">
                    {content.login}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {content.Email}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {content.password}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <IconButton
                    onClick={() => window.open(content.react, "_blank")}
                  >
                    <img src={reactlogo} />
                  </IconButton>
                  <IconButton
                    onClick={() => window.open(content.node, "_blank")}
                  >
                    <img src={nodelogo} />
                  </IconButton>
                  <IconButton
                    onClick={() => window.open(content.live, "_blank")}
                    aria-label="live"
                    color="black"
                  >
                    <img src={livelogo} />
                  </IconButton>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 180 }}
                image={content.image}
                alt="contentImage"
              />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
