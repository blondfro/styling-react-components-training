import PropTypes from "prop-types";
import React from "react";
// import Radium from "radium";
// for inline and radium styles:
// import styles from "./inline-styles/carousel-styles";
import css from "./module-styles/carousel.module.css";
import styleable from "react-styleable";

function renderSlides(props) {
  return React.Children.map(props.children, (slide, i) => {
    return React.cloneElement(slide, {
      style: {
        ...slide.props.style,
        width: props.width,
        left: props.width * (i - props.showIndex)
      }
    });
  });
}

function Carousel({ css, ...props }) {
  return (
    <div className={css.root}>
      {renderSlides(props)}
      {props.nav}
    </div>
  );
}

Carousel.propTypes = {
  nav: PropTypes.node.isRequired,
  showIndex: PropTypes.number,
  width: PropTypes.number
};

export default styleable(css)(Carousel);
