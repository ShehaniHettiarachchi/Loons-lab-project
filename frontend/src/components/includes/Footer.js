import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from "react-icons/fa";

function Footer() {
  return (
    <section
      className="section footer text-dark "
      style={{ backgroundColor: "#B5F1CC" }}
    >
      <div className="container">
        <div className="row">
          {/* social media links */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="#" class="me-4 text-reset">
                <FaFacebook />
              </a>
              <a href="#" class="me-4 text-reset">
                <FaTwitter />
              </a>
              <a href="#" class="me-4 text-reset">
                <FaGoogle />
              </a>
              <a href="#" class="me-4 text-reset">
                <FaInstagram />
              </a>
              <a href="#" class="me-4 text-reset">
                <FaLinkedin />
              </a>
            </div>
          </section>

          {/* Company details and links */}
          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-3 col-xl-4 mx-auto mb-4">
                  {/* Company details */}
                  <h6 className="text-uppercase fw-bold mb-4"> Herbala </h6>
                  <p>
                    We provide customers with healthy life by introducing
                    fantastic products from local and international makers. Our
                    sensibility helps us to select attractive and special
                    products from around the world.
                  </p>
                </div>

                <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
                  <p>
                    <a href="#!" class="text-reset">
                      Privacy policy
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                  {/* contact details */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <FaHome /> Colombo 5, NY 10012, Sri Lanka
                  </p>
                  <p>
                    <FaEnvelope /> info@herbala.com
                  </p>
                  <p>
                    <FaPhone /> +94 112 456 99
                  </p>
                  <p>
                    <FaPrint /> +94 112 785 45
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Copyright */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(F,F,F,F)" }}
          >
            © 2021 Herbala:
            <a
              className="text-reset fw-bold"
              style={{ textDecoration: "none" }}
              href="#"
            >
              {" "}
              Herbalapharma.com{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
