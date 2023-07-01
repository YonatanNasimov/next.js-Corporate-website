import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div>© {year} NASIMOV. All rights reserved</div>
      <div></div>
    </div>
  );
};

export default Footer;
