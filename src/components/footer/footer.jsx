import React from "react";

const year = new Date().getFullYear();

const Footer = () => {

  // console.log("Footer") => exmple of SSR, the rendering is loaded in our server, we can see it in the terminal where we run our Next app, when we dont need some interact with the user or anyone who visit our app the HTML renered come from our server to the client side 'ready for use' and google can index the our site in a better way.

  return (
    <div>
      <div>©{year} NASIMOV. All rights reserved</div>
      <div></div>
    </div>
  );
};

export default Footer;
