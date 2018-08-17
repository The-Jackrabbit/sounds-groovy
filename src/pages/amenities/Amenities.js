import React from 'react';
import '../../App.css';
import Amenity from './Amenity';
import {intro, sections, general, safety, cooking, recreational, personal} from './data';
import Intro from '../../components/Intro';
import Linklist from '../../components/Linklist';

const Amenities = () => {
  return (
    <div className="topic">

      <div className="toc">
        <div className="button-wrapper">
          <h2>Why Choose Sounds Groovy OBX?</h2>
          <Linklist mylinks={sections} />

          {/*<button>*/}
          {/*<a href="#general">General</a>*/}
          {/*</button>*/}
          {/*<br/>*/}

          {/*<button>*/}
          {/*<a href="#safety">Safety</a>*/}
          {/*</button>*/}
          {/*<br/>*/}

          {/*<button>*/}
          {/*<a href="#kitchen">Kitchen</a>*/}
          {/*</button>*/}
          {/*<br/>*/}

          {/*<button>*/}
          {/*<a href="#recreational">Recreational</a>*/}
          {/*</button>*/}
          {/*<br/>*/}

          {/*<button>*/}
          {/*<a href="#personal">Personal Care</a>*/}
          {/*</button>*/}
        </div>
      </div>


      <div className="content">
        <Intro
          intro_title={intro.page_title}
          intro_img={intro.page_img}
          intro_blurb={intro.page_blurb}
        />

        <div className="main">

          <span className="anchor" id="general"></span>
          <div id="general" className="grid-main-sm">
            <h2>General</h2>
            {general.map(a => <Amenity
              key={a.id}
              item_descr={a.item_descr}
              item_img={a.item_img}
            />)}
          </div>

          <span className="anchor" id="safety"></span>
          <div id="safety" className="grid-main-sm">
            <h2>Safety</h2>
            {safety.map(a => <Amenity
              key={a.id}
              item_descr={a.item_descr}
              item_img={a.item_img}
            />)}
          </div>

          <span className="anchor" id="kitchen"></span>
          <div id="kitchen"/>
          <div className="grid-main-sm">
            <h2>Kitchen</h2>
            {cooking.map(a => <Amenity
              key={a.id}
              item_descr={a.item_descr}
              item_img={a.item_img}
            />)}
          </div>

          <span className="anchor" id="recreational"></span>
          <div id="recreational" className="grid-main-sm">
            <h2>Recreational</h2>
            {recreational.map(a => <Amenity
              key={a.id}
              item_descr={a.item_descr}
              item_img={a.item_img}
            />)}
          </div>

          <span className="anchor" id="personal"></span>
          <div id="personal" className="grid-main-sm">
            <h2>Personal Care</h2>
            {personal.map(a => <Amenity
              key={a.id}
              item_descr={a.item_descr}
              item_img={a.item_img}
            />)}
          </div>
        </div>

      </div>
    </div>
  );
};


export default Amenities;