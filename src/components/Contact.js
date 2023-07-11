import React, { useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "vignesh_servicetpr99",
        "template_ewr6iga",
        form.current,
        "BwAsxoCgdNvTXoo5g"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Your Message was successfully sent')
        },
        (error) => {
          console.log(error.text);
          alert('You got an error while sending the message')
        }
      );
  };

  return (
    <div>
      <div style={{ marginTop: "2cm" }}>
        <h1 id="Skills-typo" style={{ textAlign: "center" }}>
          Contact
        </h1>
      </div>
      <div style={{textAlign:'center'}}>
        <span style={{fontSize:'larger'}}>Github: </span>
      <GitHubIcon
                style={{ marginRight: "1cm", cursor: "pointer" }}
                onClick={() =>
                  window.open("https://github.com/vigneshdevelopr", "_blank")
                }
              />
                      <span style={{fontSize:'larger'}}>LinkedIn: </span>

              <LinkedInIcon
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vigneshdeveloper/",
                    "_blank"
                  )
                }
              />
              
      </div>


      <div>
        <form ref={form} onSubmit={sendEmail}>
        <h1 style={{textAlign:'center'}}>Email Me</h1>

          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
