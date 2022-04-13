import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <footer className="footer-basic" style={{ textAlign: "center", marginTop: 100 }}>
          {/* <ul className="list-inline pt-3">
            <p style={{ fontSize: 14, fontFamily: "KGBF Display,sans-serif" }}>Follow us</p>
            <li id="icon" data-aos="zoom-in-right" data-aos-duration="2000" className="list-inline-item">
              <a href="https://www.instagram.com/kbds_id/" target={"_blank"}>
                <FontAwesomeIcon icon={faInstagram} style={{ color: "#d62976" }}></FontAwesomeIcon>
              </a>
            </li>
            <li id="icon" data-aos="zoom-in" data-aos-duration="2000" className="list-inline-item">
              <a href="https://www.linkedin.com/in/pt-kb-data-systems-indonesia-6b873b223/" target={"_blank"}>
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0e76a8" }}></FontAwesomeIcon>
              </a>
            </li>
            <li id="icon" data-aos="zoom-in-left" data-aos-duration="2000" className="list-inline-item">
              <a href="https://www.facebook.com/KB-Data-Systems-Indonesia-106688835304194" target={"_blank"}>
                <FontAwesomeIcon icon={faFacebook} style={{ color: "#3b5998" }}></FontAwesomeIcon>
              </a>
            </li>
          </ul> */}

          <div className="text-center" style={{ fontSize: 14, color: "black", fontFamily: "KGBF Display,sans-serif" }}>
            {/* <p className="text">
              <strong>Phone :</strong> +62-21-80667239
            </p> */}

            <p className="text">Copyright(c) 2022, KB Data Systems Indonesia</p>
            <p className="text">All Right Reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
