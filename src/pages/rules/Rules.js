import React from 'react';
import '../../App.css';
import ourhouse from '../../resources/images/0622181509d_HDR.png';


const Rules = () => {
  return (
    <div className="topic">
      <div className="intro">
        <img alt="Rules-img" src={ourhouse}/>
        <h2>
          Yes, rules, even on vacation!
        </h2>
      </div>

      <div>
        <p className='card'>
          rule #1
        </p>
        <p className='card'>
          rule #2
        </p>
      </div>

    </div>
  );
};

export default Rules;