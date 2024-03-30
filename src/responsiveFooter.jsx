import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-5 px-3">
        <div className="row">
          <div className="col-md-6 col-lg-8">
            <h6>Stay Updated</h6>
            <p>Sign up for updates from Metta Muse.</p>
          </div>
          <div className="col-md-6 col-lg-4">
            <h6>Contact Us</h6>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-8">
            <h6>Newsletter</h6>
            <div className="input-group w-75">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button className="btn btn-outline-primary ms-4">Subscribe</button>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <h6>Currency</h6>
            <h6>USD</h6>
            <p>All transactions will be completed in euros and currency references are available on hover.</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <h5>Metta Muse</h5>
            <p>About us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliance Docs</p>
          </div>
          <div className="col-md-4 col-lg-4">
            <h5>Quick Links</h5>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refund</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="col-md-4 col-lg-4">
            <h6 className="mb-3">Follow Us</h6>
            <div className="d-flex mb-4">
              <i className="fab fa-linkedin fa-lg me-3"></i>
              <i className="fab fa-instagram fa-lg"></i>
            </div>
            <h6>Metta Muse Accepts</h6>
            <div className="d-flex ">
              <i className="fab fa-google-pay fa-2x me-3"></i>
              <i className="fab fa-cc-paypal fa-2x me-3"></i>
              <i className="fab fa-cc-apple-pay fa-2x me-3"></i>
              <i className="fab fa-cc-amazon-pay fa-2x"></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-4">
            <p>&copy; {new Date().getFullYear()} Your E-commerce Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
