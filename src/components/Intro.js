import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Intro(props) {
  return (
    <div className="intro">
      <img alt="Introduction" src={props.intro_img}/>
      <h1 align="center">{props.intro_title}</h1>
      <p>{props.intro_blurb}</p>
    </div>
  );
}

Intro.propTypes = {
  intro_blurb: PropTypes.string.isRequired,
  intro_img: PropTypes.string.isRequired,
  intro_title: PropTypes.string.isRequired,
};

export default Intro;