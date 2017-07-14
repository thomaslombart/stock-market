import React from 'react';
import '../styles/footer.css';

const Footer = () => (
  <div className="footer">
    <hr />
    <h6 className="text-sm-center"><i className="fa fa-code"></i> by thomlom</h6>
    <p className="text-sm-center">
      <a className="social-link" href="https://github.com/thomlom" target="_blank" rel="noopener noreferrer"><i className="fa fa-2x fa-github"></i></a>
      <a className="social-link" href="https://twitter.com/thomas_lombart" target="_blank" rel="noopener noreferrer"><i className="fa fa-2x fa-twitter"></i></a>
    </p>
  </div>
)

export default Footer;
