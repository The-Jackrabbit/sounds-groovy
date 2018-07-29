import React from 'react';
import deck_life from '../resources/images/0622181427-EFFECTS.png'

const AboutUs = () => {
  return (
    <div>
      <div>
        {/* this isn't being shown ?!?!?!  Why? */}
        <h1>ABOUT US</h1>
      </div>
      <div>
        <img src={deck_life} width='60%' align='middle'/>
      </div>
      <div padding-right='100px' padding-left='100px'>
        <h2>We are the Masters Family!</h2>
        <p>
          Why Sounds Groovy?  For over 30 years this was the home to the coolest, most loving grandparents ever!  They were wonderful free spirits!  Sounds Groovy is an acknowledgement of all the beauty and kindness they shared while they were with us.  They enjoyed fishing, beaching, and love and laughter.  Hopefully you will experience that and much more when you visit Sounds Groovy!
        </p>
        <p>
          Sounds Groovy will be undergoing renovations starting October 2018.  So, during your visit you may notice nail holes, scuffed walls, dated carpet, bare walls and paint samples on walls (see Office bedroom photos).  But, the beds are comfortable and the house offers many amenities to make your visit enjoyable.  The renovation will include a new kitchen, flooring throughout, enhanced outdoor living spaces, new outdoor stairs and deck railing.  Do you have suggestions for improvements we might make during the renovation?  Let us know!
        </p>
      </div>
    </div>
  )
}

export default AboutUs;