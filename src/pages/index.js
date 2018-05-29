import React, { Fragment } from "react";
import SEO from "../seo";

export default () => (
  <div className="container">
    <SEO />
    <img src="/images/logo.png" className="app-icon" />
    <h1>Matchimals</h1>
    <div className="coming-soon">Coming Soon</div>
    <div>
      <img src="/images/badge-app-store.svg" className="download-icon" />
      <img src="/images/badge-google-play.svg" className="download-icon" />
    </div>
    <a href="https://www.matchimals.fun/" className="play-now">
      Play the original here!
    </a>
  </div>
);
