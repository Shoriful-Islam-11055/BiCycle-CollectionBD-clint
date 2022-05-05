import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faWhatsappSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className=" bg-dark text-light pt-5">
      <div className="w-75 mx-auto">
        <div className="row footer-info">
          <div className="col-md-3 col-6">
            <h5>Where To Buy</h5>
            <Link className="text-decoration-none text-light" to="/">
              See Authorized Relaters
            </Link>
          </div>
          <div className="col-md-3 col-6">
            <h5>Crazy Collection</h5>
            <Link className="text-decoration-none text-light mt-3" to="/">
              Join With Us
            </Link>
            <br />
            <Link className="text-decoration-none text-light mt-3" to="/">
              Learn More
            </Link>
            <br />
            <Link className="text-decoration-none text-light mt-3" to="/">
              Manage Account
            </Link>
            <br />
          </div>
          <div className="col-md-3 col-6">
            <h5 className="pr">Press Releases</h5>
            <Link className="text-decoration-none text-light mt-3" to="/">
              About Crazy Collection
            </Link>
            <br />
            <Link className="text-decoration-none text-light mt-3" to="/">
              Products Manuals
            </Link>
            <br />
            <Link className="text-decoration-none text-light mt-3" to="/">
              Products Registration
            </Link>
          </div>
          <div className="col-md-3 col-6">
            <h5 className="os">Others Sites</h5>
            <Link className="text-decoration-none text-light mt-3" to="/">
              Products Pictures
            </Link>
            <br />
            <Link className="text-decoration-none text-light mt-3" to="/">
              Products Categories
            </Link>
            <br />
            <Link className="text-decoration-none text-light mt-3" to="/">
              Products Demo
            </Link>
            <br />
            <Link className="text-decoration-none text-light mt-3" to="/">
              Products Info
            </Link>
            <br />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-6">
            <button className="px-3 py-1">Follow US</button>
          </div>
          <div className="col-6">
            <div className="d-flex footer-nav">
              <p>
                <Link
                  className="text-decoration-none text-light mt-2 me-3"
                  to="/"
                >
                  Contact US
                </Link>
              </p>

              <p>
                <Link
                  className="text-decoration-none text-light mt-2 me-3"
                  to="/"
                >
                  Company Info
                </Link>
              </p>
              <div className="d-flex">
                <p>
                  <Link
                    className="text-decoration-none text-light mt-3 me-2"
                    to="/"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} className="fs-3" />
                  </Link>
                </p>
                <p>
                  <Link
                    className="text-decoration-none text-light mt-3 me-2"
                    to="/"
                  >
                    <FontAwesomeIcon
                      icon={faInstagramSquare}
                      className="fs-3"
                    />
                  </Link>
                </p>
                <p>
                  <Link
                    className="text-decoration-none text-light mt-3 me-2"
                    to="/"
                  >
                    <FontAwesomeIcon icon={faYoutubeSquare} className="fs-3" />
                  </Link>
                </p>
                <p>
                  <Link
                    className="text-decoration-none text-light me-2 mt-3"
                    to="/"
                  >
                    <FontAwesomeIcon icon={faWhatsappSquare} className="fs-3" />
                  </Link>
                </p>
                <p>
                  <Link className="text-decoration-none text-light mt-3" to="/">
                    <FontAwesomeIcon icon={faTwitterSquare} className="fs-3" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-3">&copy;2022 copyright shoriful-Islam</div>
    </div>
  );
};

export default Footer;
