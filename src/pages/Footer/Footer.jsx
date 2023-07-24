import React from "react";
import './Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <div className="options">
        <div className="social-medias">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        <div className="rowOne">
          <div>Audio Description</div>
          <div>Help Centre</div>
          <div>Gift Cards</div>
          <div>Media Centre</div>
        </div>
        <div className="rowSecond">
          <div>Investor Relations</div>
          <div>Jobs</div>
          <div>Terms of Use</div>
          <div>Privacy</div>
        </div>
        <div className="rowThird">
          <div>Legal Notices</div>
          <div>Cookie Preferences</div>
          <div>Corporate Information</div>
          <div>Contact Us</div>
        </div>

        <div className='btn'>Service Code</div>
        <p>©1997-2023 Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
