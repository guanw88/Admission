import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="footer">
        <p>This website is a porfolio project built using Rails, React, and Postgresql. For more information, please click the links below.</p>
        <div className="footer-logos">
          <div className="footer-logo">
            <a href="https://www.linkedin.com/in/guanw88" target="_blank">LinkedIn</a>
          </div>
          <div className="footer-logo">
            <a href="https://github.com/guanw88/EventFul" target="_blank">Github</a>
          </div>
        </div>
      </div>
    );

  }



}

export default Footer;
