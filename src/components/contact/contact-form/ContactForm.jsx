import "./contactForm.css";
import { useState } from "react";
import { SES } from "@aws-sdk/client-ses";
import { IoSend } from "react-icons/io5";

export default function ContactForm() {
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const messageTemplate = `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta charset="utf-8"> 
      <meta name="viewport" content="width=device-width"> 
      <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
      <meta name="x-apple-disable-message-reformatting">  
      <title>Portfolio Message</title>
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
  <style>
    html,
  body {
      margin: 0 auto !important;
      padding: 0 !important;
      height: 100% !important;
      width: 100% !important;
      background: #f1f1f1;
  }
  
  * {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
  }
  
  .bg_white{
    background: #ffffff;
  }
  .bg_light{
    background: #fafafa;
  }
  .email-section{
    padding:2.5em;
  }
  
  
  h1,h2,h3,h4,h5,h6{
    font-family: 'Poppins', sans-serif;
    color: #000000;
    margin-top: 0;
  }
  
  body{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 1.8;
    color: rgba(0,0,0,.4);
  }
  
  a{
    color: #0d0cb5;
    text-decoration:none;
  }
  
  .hero{
    position: relative;
    z-index: 0;
  }
  .hero .overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    width: 100%;
    background: #000000;
    z-index: -1;
    opacity: .3;
  }
  .hero .icon{
  }
  .hero .icon a{
    display: block;
    width: 60px;
    margin: 0 auto;
  }
  .hero .text{
    color: rgba(255,255,255,.8);
  }
  .hero .text h2{
    color: #ffffff;
    font-size: 30px;
    margin-bottom: 0;
  }
    
  .btn{
    padding: 5px 15px;
    display: inline-block;
  }
  .btn.btn-primary{
    border-radius: 5px;
    background: #0d0cb5;
    color: #ffffff;
  }
  
  
  
  
  
  
  @media screen and (max-width: 500px) {
  
    .icon{
      text-align: left;
    }
  
    .text-services{
      padding-left: 0;
      padding-right: 20px;
      text-align: left;
    }
  
  }
  </style>
  
  
  </head>
  
  <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
    <center style="width: 100%; background-color: #f1f1f1;">
      <div style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
        &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
      </div>
      <div style="max-width: 600px; margin: 0 auto;" class="email-container">
        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
          <tr>
            <td valign="middle" class="hero bg_white" style="background-image: url(https://wallpaperaccess.com/full/521099.jpg); background-size: cover;height:200px;">
              <div class="overlay"></div>
              <table>
                <tr>
                  <td>
                    <div class="text" style="padding: 0 3em; text-align: center;">
                      <h2>Message From Portfolio Website</h2>
                          </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="bg_white">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td class="bg_white email-section">
                    <div class="heading-section" style="text-align: center; padding: 0 30px;">
                      <h2>${fromName}</h2>
                      <p>${message}</p>
                            <a href="mailto:${fromEmail}" class="btn btn-primary">Contact Now</a>
                    </div>
                  </td>
               </tr>
                    </tr>
        </table>
        </table>
      </div>
    </center>
  </body>
  </html>`;

  const handleSendEmail = async (e) => {
    e.preventDefault();
    const ses = new SES({
      region: "us-west-2",
      credentials: {
        accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
        secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
      },
    });

    const params = {
      Source: ["manumadhu1425+portfolio@gmail.com"],
      Destination: {
        ToAddresses: ["manumadhu1425+portfolio@gmail.com"],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: messageTemplate,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: `Contact request from ${fromEmail}`,
        },
      },
    };

    try {
      await ses.sendEmail(params);
    } catch (error) {
      console.log(error);
    }
  };

  function handleInputOnchange(e) {
    const inputClass = e.target.className;
    let classes = inputClass.split(" ");
    if (!classes.includes("has-content") && e.target.value.length > 0) {
      e.target.className += " has-content";
    } else if (e.target.value.length === 0) {
      e.target.className = "effect-16";
    }

    const targetName = e.target.name;

    switch (targetName) {
      case "name":
        setFromName(() => e.target.value);
        break;
      case "email":
        setFromEmail(() => e.target.value);
        break;
      case "message":
        setMessage(() => e.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <div className="container">
      <form
        className="contact-inputs"
        method="POST"
        onSubmit={(e) => handleSendEmail(e)}
      >
        <div className="col-3 input-effect">
          <input
            className="effect-16"
            onChange={(e) => handleInputOnchange(e)}
            type="text"
            name="name"
            required
            placeholder=""
          />
          <label>First Name</label>
          <span className="focus-border"></span>
        </div>
        <div className="col-3 input-effect">
          <input
            required
            name="email"
            className="effect-16"
            onChange={(e) => handleInputOnchange(e)}
            type="email"
            placeholder=""
          />
          <label>Email</label>
          <span className="focus-border"></span>
        </div>
        <div className="col-3 input-effect">
          <textarea
            required
            name="message"
            className="effect-16"
            onChange={(e) => handleInputOnchange(e)}
            placeholder=""
          />
          <label>Message</label>
          <span className="focus-border"></span>
        </div>
        <div className="col-3 input-effect">
          <button className="button message-btn hvr-shutter-out-horizontal">
            Send Message <IoSend className="icons" />
          </button>
        </div>
      </form>
    </div>
  );
}
