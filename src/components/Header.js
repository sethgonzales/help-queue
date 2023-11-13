import React from "react";
import download from "./../img/download.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={download} alt="An image of tickets" />
    </React.Fragment>
  );
}

export default Header;
