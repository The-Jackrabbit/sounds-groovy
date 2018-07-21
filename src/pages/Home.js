import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li> 
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/login'>Staff Login</Link>
        </li>
        <li>
          <Link to='/aadsfasdfsd'>404 Example</Link>
        </li>
      </ul>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
