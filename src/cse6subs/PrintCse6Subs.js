import React from 'react';
import { Link } from 'react-router-dom';
import './PrintCse6Subs.css'
function PrintCse6Subs() {
  return (
    <div className="container">
      <Link to="/ml">
        <button className="subbutton mt-5">Machine Learning</button>
      </Link>
      <Link to="/ai">
        <button className="subbutton">Artificial Intelligence</button>
      </Link>
      <Link to="/flat">
        <button className="subbutton">Formal Languages and Automata Theory</button>
      </Link>
      <Link to="/fsd">
        <button className="subbutton">Full Stack Development</button>
      </Link>
      <Link to="/iot">
        <button className="subbutton">Internet of Things</button>
      </Link>
    </div>
  );
}

export default PrintCse6Subs;
