import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <div>© {year} NASIMOV. All rights reserved</div>
      <div>Test</div>
    </div>
  );
};

export default Footer;
