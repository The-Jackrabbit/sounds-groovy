import React from 'react';
import '../../App.css';
import Linklist from '../../components/Linklist';
import {cards, intro, sections} from './Data';
import Intro from '../../components/Intro';
import {Card} from 'semantic-ui-react';


const Rules = () => {
  return (
    <div className="topic">

      <div className="toc">
        <div className="button-wrapper">
          <h2>Rules, Groovy!</h2>
          <Linklist mylinks={sections} />
        </div>
      </div>

      <div className="content">

        <Intro
          intro_title={intro.page_title}
          intro_img={intro.page_img}
          intro_blurb={intro.page_blurb}
        />
        <Card.Group raised centered items={cards} itemsPerRow='3'/>

        {/*<div className="main">*/}
          {/*<Card.Group raised centered items={cards} itemsPerRow='3'/>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Rules;