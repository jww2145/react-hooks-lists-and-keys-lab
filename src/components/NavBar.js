import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linked = links.map((link) => { 
    return (<a href = {`#${link}`} key = {`${link}`}> {link} </a>)
  })



  return (<nav>
    {linked}
  </nav>
)}

export default NavBar;
