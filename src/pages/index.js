import React, { Fragment } from "react";
import SEO from "../seo";

export default () => (
  <div className="container">
    <SEO />
    <img src="Icon-App-1024x1024.png" className="app-icon" />
    <h1>Matchimals</h1>
    <div className="coming-soon">Coming Soon</div>
    <div>
      <img src="badge-app-store.svg" className="download-icon" />
      <img src="badge-google-play.svg" className="download-icon" />
    </div>
  </div>
);
