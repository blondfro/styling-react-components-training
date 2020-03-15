import PropTypes from "prop-types";
import React from "react";
import Radium from "radium";
// for inline styles:
// import styles from "./inline-styles/nav-styles";
import styles from "./radium-styles/nav-styles";

function Nav(props) {
  function getPrevStyles(props) {
    return props.hasPrevious ? styles.prev : styles.prevHidden;
  }

  function getNextStyles(props) {
    return props.hasNext ? styles.next : styles.nextHidden;
  }

  return (
    <div style={styles.root}>
      <button
        key="prev"
        style={getPrevStyles(props)}
        onClick={props.onPrevious}
      >
        &#10094;
      </button>
      <button key="next" style={getNextStyles(props)} onClick={props.onNext}>
        &#10095;
      </button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
};

export default Radium(Nav);
