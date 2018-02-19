import React from "react";
import logo from "./logo.svg";

const Logo = ({ className, ...rest }) => (
  <img src={logo} className={[className, "App-logo"].join(" ")} alt="logo" />
);

export default Logo;
