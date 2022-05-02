import './Footer.css'
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-dark text-light pt-5">
      <div className="container">
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
            <h5>Press Releases</h5>
            <Link className="text-decoration-none text-light mt-3" to="/">
              Manage Account
            </Link>
            <br />
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
            <h5>Others Sites</h5>
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
          <div className="col-4">
            <button className="p-2">Media & Contact</button>
          </div>
          <div className="col-8">
            <div className="d-flex footer-nav">
              <p>
                <Link className="text-decoration-none text-light mt-3 me-3" to="/">
                  For professional
                </Link>
              </p>

              <p>
                <Link className="text-decoration-none text-light mt-3 me-3" to="/">
                  Contact US
                </Link>
              </p>

              <p>
                <Link className="text-decoration-none text-light mt-3 me-3" to="/">
                  Company Info
                </Link>
              </p>
              <p>
                <Link className="text-decoration-none text-light mt-3" to="/">
                  Voluntary Recall
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>hello</div>
    </div>
  );
};

export default Footer;
