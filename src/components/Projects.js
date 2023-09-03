import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container"; // Add Container import
import flow from "../assets/stackoverflowicon.png";
import reactlogo from "../assets/icons8-react.svg";
import nodelogo from "../assets/icons8-node-js.svg";
import livelogo from "../assets/icons8-youtube-live.svg";
import recipeimg from "../assets/recipetracker.webp";
import comingsoon from "../assets/comingsoon.jpg";
import chatapp from "../assets/chatapp.png";
import ecommerce from "../assets/ecommerce-10.jpg";
import dictionary from '../assets/dictionary.jpg'
const data = [
  {
    image: flow,
    title: "Stackoverflow-Clone",
    login: "Tech Stacks Used:",
    Email: "",
    password: "password@123",
    Tech_Stacks: "React.js,Material_UI,MongoDB,Node.js",
    Client: "https://github.com/vigneshdevelopr/Stackoverflowclone_frontend",
    Server: "https://github.com/vigneshdevelopr/StackoverflowClone_Backend",
    live: "https://stackoverflowcloning-client.onrender.com/",
  },
  {
    image: chatapp,
    title: "Realtime Chat Application",
    login: "Tech Stacks Used:",
    Email: "MongoDB,Node.js,Socket.io(WebSocket)",
    password: "password@123",
    Tech_Stacks: "React.js,React_Styled_Components",
    Client: "https://github.com/vigneshdevelopr/ChitChatz-App-Project-Frontend",
    Server: "https://github.com/vigneshdevelopr/ChitChatz-App-Project-Backend",
    live: "https://chitchatz-client.onrender.com",
  },
  {
    image: recipeimg,
    title: "Cookzzie-Recipe Tracking Application",
    login: "Tech Stacks Used:",
    Email: "",
    password: "password@123",
    Tech_Stacks: "React.js,Material_UI,MongoDB,Node.js",
    Client: "https://github.com/vigneshdevelopr/cookzzie-recipe-project-client",
    Server: "https://github.com/vigneshdevelopr/cookzzie-recipe-project-server",
    live: "https://cookzzie.onrender.com",
  },
  {
    image: ecommerce,
    title: "TownBazzar E-Commerce application",
    login: "Tech Stacks Used:",
    Email: "",
    password: "password@123",
    Tech_Stacks: "React.js,Material_UI,Redux,HTML5/CSS",
    Client: "https://github.com/vigneshdevelopr/React-Ecommerce-app",
        Server: "https://github.com/vigneshdevelopr/TownBazzar-backend",

    live: "https://react-ecommerce-19z2.onrender.com",
  },
  // {
  //   image: dictionary,
  //   title: "Dictionary_Boy",
  //   login: "Tech Stacks Used:",
  //   Email: "",
  //   password: "password@123",
  //   Tech_Stacks: "React.js,Material_UI,API_Calls,HTML5/CSS",
  //   Client: "https://github.com/vigneshdevelopr/TownBazzar-frontend",
  //   // Server: "https://github.com/vigneshdevelopr/TownBazzar-backend",
  //   live: "https://dictionaryboy.netlify.app/",
  // },
  {
    image: comingsoon,
    title: "COMING SOON !",
    login: "Will be Update shortly",
    Email: "",
    password: "",
    // Client: "https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-1520x800.webp",
    // Server: "https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-1520x800.webp",
    // live: "https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-1520x800.webp",
  },
];

export default function Projects() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <div>
        <div style={{ marginTop: "2cm" }}>
          <h1 id="Skills-typo" style={{ textAlign: "center" }}>
            Projects
          </h1>
          <div style={{ textAlign: "center" }}>
            <h2>Common Credentials</h2>
            <h1>Email: <span style={{color:'#252525',backgroundColor:'yellow',padding:'4px',borderRadius:'5px'}}>vigneshwebdevelopr@gmail.com</span></h1>
            <h3>Password: <span style={{color:'#252525',backgroundColor:'yellow',padding:'4px',borderRadius:'5px'}}>password@123</span></h3>
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
            justifyContent: "center", // Center-align horizontally
            alignItems: "center", // Center-align vertically
          }}
        >
          {data.map((content, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                backgroundColor: "whitesmoke",
                width: "550px", 
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column",flex:'1' }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {content.title}
                  </Typography>
                  <Typography color="text.primary" style={{fontWeight:'500',fontSize:'large'}}>
                    {content.login}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {content.Tech_Stacks}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {content.Email}
                  </Typography>
                  
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <IconButton
                    onClick={() => window.open(content.Client, "_blank")}
                  >
                    <img src={reactlogo} alt="React Logo" />
                  </IconButton>
                  {content.Server ? (  <IconButton
                    onClick={() => window.open(content.Server, "_blank")}
                  >
                    <img src={nodelogo} alt="Node.js Logo" />
                  </IconButton>):""}
                  {content.live ? (<IconButton
                    onClick={() => window.open(content.live, "_blank")}
                    aria-label="live"
                    color="black"
                  >
                    <img src={livelogo} alt="Live Logo" />
                  </IconButton>):""}
                  
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
    </Container>
  );
}
