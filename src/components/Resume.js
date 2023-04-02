import React from "react";
import gif from "../assets/handy-line-downloading.gif";
import resume from "../assets/vigneshresume.pdf";
import { Card } from "@mui/material";

function Resume() {
  return (
    <>
      <div style={{ marginTop: "2cm" }}>
        <h1 id="Skills-typo" style={{ textAlign: "center" }}>
          Resume
        </h1>
      </div>
      <Card
      data-aos="fade-right"
        id="download-logo"
        onClick={() => window.open(resume, "_target")}
        style={{
          maxWidth: "max-content",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
      >
        <img id="download-logo" src={gif} alt="gif" />
        <div id="download-typo" style={{ textAlign: "center" }}>
          Click Here to Download
        </div>
      </Card>
    </>
  );
}

export default Resume;
