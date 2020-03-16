import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";
// import Radium from "radium";
// for inline styles:
// import styles from "./inline-styles/nav-styles";
// for radium styles
// import styles from "./radium-styles/nav-styles";
import styleable from "react-styleable";
import css from "./module-styles/nav.module.css";

function Nav({ css, ...props }) {
  function getPrevStyles(props) {
    return props.hasPrevious ? css.prev : css.prevHidden;
  }

  function getNextStyles(props) {
    return props.hasNext ? css.next : css.nextHidden;
  }

  return (
    <div className={css.root}>
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

export default styleable(css)(Nav);
