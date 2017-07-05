import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <h6><i className="fa fa-code"></i> by thomlom</h6>
      <p>
        <a className="social-link" href="https://github.com/thomlom" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
        <a className="social-link" href="https://twitter.com/thomas_lombart" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
      </p>
    </div>
  )
}

export default Footer;
