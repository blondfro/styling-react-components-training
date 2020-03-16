import PropTypes from "prop-types";
import React from "react";
// import Radium from "radium";
// for inline styles:
// import styles from "./inline-styles/slide-styles";
import styleable from "react-styleable";
import css from "./module-styles/slide.module.css";

function Slide({ css, ...props }) {
  return (
    <article className={css.root} style={props.style}>
      <img src={props.image} alt={props.title} />
      <footer className={css.footer}>
        <h2 className={css.footer}>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  );
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string
};

export default styleable(css)(Slide);
