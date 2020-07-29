import React from "react";
import classes from "./index.css";
import { GoLocation } from "react-icons/go";
import { TiContacts } from "react-icons/ti";
import { MdMailOutline, MdBorderColor } from "react-icons/md";

import {
  FacebookShareButton,
  FacebookIcon,
  // GooglePlusShareButton,
  GooglePlusIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TwitterShareCount,
} from "react-share";

const shareUrl = `localhost${window.location.pathname}`;

const url = "http://cce.mn/";
const shareText = "Check this site!";

const Footer = (props) => (
  <div className={classes.rowblock}>
    <div className={classes.con}>
      <div className={classes.background}>
        <div>
          <ul>
            <li>
              <div
                style={{
                  fontFamily: "PT Sans",
                  fontSize: "15px",
                  marginBottom: "30px",
                  color: "#2c2c2c",
                  fontWeight: "700",
                }}
              >
                cce.mn
              </div>
            </li>
            <div
              className={classes.address}
              style={{
                marginTop: "-15px",
                color: "rgb(123, 123, 123)",
                textAlign: "left",
                fontSize: "13px",
                fontFamily: "PT Sans",
                fontWeight: "300",
                lineHeight: "2.0em",
                letterSpacing: "0.15em",
              }}
            >
              <h1>
                <div style={{ textAlign: "left", color: "#FFFFFF" }}>
                  Contact us
                  
                </div>
                
              <hr
                style={{
                  color: "#40a4c8",
                  marginTop: "20px",
                  marginBottom: "30px",
                  marginRight: "1000px",
                  marginLeft: "10px",
                  borderColor: "yellow",
                  borderWidth: "4px",
                }}
              />

              </h1>

              <div style={{ display: "flex", alignItems: "center" }}>
                <GoLocation size={20} style={{ color: "#26D1CE" }} />
                &nbsp; &nbsp;
                <div style={{ fontSize: "15px", color: "#FFFFFF" }}>
                  Center for Citizenship Education,
                  <br /> 1st floor Khasvuu Plaza, Avlo Zamchdiin Street, <br />{" "}
                  Sukhbaatar District, Ulaanbaatar, Mongolia
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-80px",
                  marginLeft: "560px",
                }}
              >
                <TiContacts size={20} style={{ color: "#26D1CE" }} />
                &nbsp; &nbsp;
                <div style={{ fontSize: "15px", color: "#FFFFFF" }}>
                  (976)313619 <br />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                  marginLeft: "560px",
                }}
              >
                <MdMailOutline size={20} style={{ color: "#26D1CE" }} />
                &nbsp; &nbsp;
                <div style={{ fontSize: "15px", color: "#FFFFFF" }}>
                  cce@magic.net <br /> ariuna.cce.mn@gmail.com
                </div>
              </div>
            </div>

            <div className={classes.social}>
              <ul>
                <div
                  style={{
                    marginTop: "-100px",
                    marginBottom: "80px",
                    textAlign: "right",
                    marginRight: "50px",
                  }}
                >
                  <FacebookShareButton url={shareUrl} className="m-2">
                    <FacebookIcon size={50} round={true} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={shareUrl}
                    className="button"
                    style={{ margin: "5px" }}
                  >
                    <TwitterIcon size={50} round={true} />
                  </TwitterShareButton>
                </div>
                <div
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "PT Sans",
                    letterSpacing: "0.13em",
                  }}
                >
                  Powered by BowLLC
                </div>
              </ul>
            </div>
          </ul>
        </div>
        <div style={{ flex: "1" }}></div>
        <div style={{ flex: "1" }}></div>
      </div>
    </div>
  </div>
);

export default Footer;
