import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer className="coder">
        <i>
          <a href="https://github.com/palmarazmartinez/Weather-App-React" target="_blank" rel="noreferrer" className="gitLink">
            Open source code{" "}
          </a>{" "}
           by Perla Almaraz-Martinez{" "} and hosted on {" "}
           <a href="https://compassionate-goodall-fb2cc0.netlify.app/" target="_blank" rel="noreferrer" className="hostLink">
            Netlify</a>
        </i>{" "}
      </footer>{" "}
    </div>
  );
}
