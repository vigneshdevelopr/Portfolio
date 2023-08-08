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
import recipeimg from "../assets/recipetracker.webp";
import comingsoon from "../assets/comingsoon.jpg";
import chatapp from "../assets/chatapp.png"
import ecommerce from "../assets/ecommerce-10.jpg"; 

const data = [
  {
    image: flow,
    title: "Stackoverflow-Clone",
    login: "LOGIN CREDENTIALS",
    Email: "vignesh@gmail.com",
    password: "password@123",
    Client: "https://github.com/vigneshdevelopr/Stackoverflowclone_frontend",
    Server: "https://github.com/vigneshdevelopr/StackoverflowClone_Backend",
    live: "https://inquisitive-gecko-1ed492.netlify.app/",
  },
  {
    image: chatapp,
    title: "Realtime Chat Application",
    login: "LOGIN CREDENTIALS",
    Email: "vigneshwebdevelopr@gmail.com",
    password: "password@123",
    Client: "https://github.com/vigneshdevelopr/ChitChatz-App-Project-Frontend",
    Server: "https://github.com/vigneshdevelopr/ChitChatz-App-Project-Backend",
    live: "https://chitchatzapp.netlify.app/",
  },
  {
    image: ecommerce,
    title: "TownBazzar E-Commerce application",
    login: "LOGIN CREDENTIALS",
    Email: "vigneshwebdevelopr@gmail.com",
    password: "password@123",
    Client: "https://github.com/vigneshdevelopr/E-Commerce-Website-Client",
    Server: "https://github.com/vigneshdevelopr/E-Commerce-Website-Server",
    live: "https://townbazzar.netlify.app/",
  },
  {
    image: recipeimg,
    title: "Cookzzie-Recipe Tracking Application",
    login: "LOGIN CREDENTIALS",
    Email: "vigneshwebdevelopr@gmail.com",
    password: "password@123",
    Client:
      "https://github.com/vigneshdevelopr/cookzzie-recipe-project-client",
    Server: "https://github.com/vigneshdevelopr/cookzzie-recipe-project-server",
    live: "https://cookzzie.netlify.app/",
  },
  {
    image: comingsoon,
    title: "COMING SOON !",
    login: "Will be Update shortly",
    Email: "",
    password: "",
    Client:
      "https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-1520x800.webp",
    Server: "https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-1520x800.webp",
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
<div style={{textAlign:'center'}}>
<h2>Common Credientials</h2>
<p>Email: vigneshwebdevelopr@gmail.com</p>
<p>Password: password@123</p>
</div>
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
                    onClick={() => window.open(content.Client, "_blank")}
                  >
                    <img src={reactlogo} />
                  </IconButton>
                  <IconButton
                    onClick={() => window.open(content.Server, "_blank")}
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
