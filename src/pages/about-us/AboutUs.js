import React from 'react';
import '../../App.css';
import sound_view from '../../resources/images/vacation-rental-outer-banks-nags-head.JPG';

const AboutUs = () => {
  return (
    <div className="topic">

      <div className="toc">
        <div className="button-wrapper">
          <h2>Who Are We?</h2>

          <button>
            <a href="#next">What's Next?</a>
          </button>
          <br/>

          <button>
            <a href="#history">History</a>
          </button>
        </div>
      </div>

      <div className="content">

        <div className="intro">
          <img alt="AboutUs-img" src={sound_view}/>
          <h2>We are the Masters Family!</h2>
          <p>
            Why Sounds Groovy? For over 30 years this was the home to the
            coolest, most loving grandparents ever! They were wonderful
            free spirits! Sounds Groovy is an acknowledgement of all the
            beauty and kindness they shared while they were with us. They
            enjoyed fishing, beaching, and love and laughter. Hopefully you
            will experience that and much more when you visit Sounds Groovy!
          </p>
        </div>

        <div className="main">
          <span className="anchor" id="next"></span>
          <div id="next" className="main-sm">
            <h3>What's Next?</h3>
            <p>
              Sounds Groovy will be undergoing renovations starting October
              2018. So, during your visit you may notice nail holes, scuffed
              walls, dated carpet, bare walls and paint samples on walls (see
              Office bedroom photos). But, the beds are comfortable and the
              house offers many amenities to make your visit enjoyable. The
              renovation will include a new kitchen, flooring throughout,
              enhanced outdoor living spaces, new outdoor stairs and deck
              railing. Do you have suggestions for improvements we might make
              during the renovation? Let us know!
            </p>
          </div>

          <span className="anchor" id="history"></span>
          <div id="history" className="main-sm">
            <h3>History of the House</h3>
            <p>
              The home was built in 1984. It was originally purchased from the
              builder by Becky and Dave Masters. Upon their deaths in 2017, Becky
              and Dave's sons, David and Mark inherited the home. Michele, Mark's
              wife, purchased David's half in 2018. The home is now owned by Mark
              and Michele Masters. In time, Mark and Michele's three children,
              Maria, Gina and Luke will take ownership of the home. We hope to
              keep this home in our family and our hearts for many years to come!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;