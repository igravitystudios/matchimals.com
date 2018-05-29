import React, { Fragment } from "react";
import Helmet from "react-helmet";

import "../styles/reset.css";
import "../styles/index.css";

export default () => (
  <Helmet>
    <link rel="shortcut icon" href="icons/favicon.png" />
    <link rel="apple-touch-icon" href="icons/apple-touch-icon-60x60.png" />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="icons/apple-touch-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="icons/apple-touch-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="167x167"
      href="icons/apple-touch-icon-167x167.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="icons/apple-touch-icon-180x180.png"
    />
    <meta name="apple-mobile-web-app-title" content="Matchimals" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#1e1412" />
    <meta name="theme-color" content="#1e1412" />
    <link rel="manifest" href="manifest.json" />
    <meta property="og:url" content="https://www.matchimals.app" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Matchimals- an animal matching puzzle card game"
    />
    <meta
      property="og:description"
      content="Matchimals is a simple card game in which two players take turns trying to match animals in a puzzle-like fashion. The player with the most points at the end wins!"
    />
    <meta property="og:image" content="matchimals-og-1200x630.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary" />
    <meta
      name="twitter:title"
      content="Matchimals- an animal matching puzzle card game"
    />
    <meta
      name="twitter:description"
      content="Matchimals is a simple card game in which two players take turns trying to match animals in a puzzle-like fashion. The player with the most points at the end wins!"
    />
    <meta name="twitter:image" content="matchimals-og-600x600.png" />
    <title>Matchimals | An animal matching puzzle game</title>
    <link
      href="https://fonts.googleapis.com/css?family=Patua+One"
      rel="stylesheet"
    />
  </Helmet>
);
