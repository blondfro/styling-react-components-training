import React from "react";
// import Radium from "radium";
// for inline and radium styles:
// import styles from "./inline-styles/frame-styles";
import css from "./module-styles/frame.module.css";
import styleable from "react-styleable";

function Frame({ children, css }) {
  return <div className={css.root}>{children}</div>;
}

export default styleable(css)(Frame);
