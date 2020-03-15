import Radium from "radium";
import React from "react";
// for inline styles:
import styles from "./inline-styles/frame-styles";

export default Radium(function Frame({ children }) {
  return <div style={styles.root}>{children}</div>;
});
