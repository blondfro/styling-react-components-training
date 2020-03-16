import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";
// import Radium from "radium";
// for inline styles:
// import styles from "./inline-styles/nav-styles";
// for radium styles
// import styles from "./radium-styles/nav-styles";

// for use with radium and inline styles.
function Nav(props) {
  function getPrevStyles(props) {
    return classnames("dft__nav__btn dft__nav__btn--prev", {
      "dft__nav__btn--hidden": !props.hasPrevious
    });
  }

  function getNextStyles(props) {
    return classnames("dft__nav__btn dft__nav__btn--next", {
      "dft__nav_btn--hidden": !props.hasNext
    });
  }

  return (
    <div className="dft__nav">
      <button className={getPrevStyles(props)} onClick={props.onPrevious}>
        &#10094;
      </button>
      <button className={getNextStyles(props)} onClick={props.onNext}>
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

export default Nav;
