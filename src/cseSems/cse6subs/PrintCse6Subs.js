import React from 'react';
import { Link } from 'react-router-dom';
import './PrintCse6Subs.css';

function PrintCse6Subs() {
  return (
    <div className="print-cse6-body">
      <div className="print-cse6-container">
        <h1 className="print-cse6-h1">Choose Your Subject</h1>
        <Link to="/ml">
          <button className="print-cse6-subbutton">Machine Learning</button>
        </Link>
        <Link to="/ai">
          <button className="print-cse6-subbutton">Artificial Intelligence</button>
        </Link>
        <Link to="/flat">
          <button className="print-cse6-subbutton">Formal Languages and Automata Theory</button>
        </Link>
        <Link to="/fsd">
          <button className="print-cse6-subbutton">Full Stack Development</button>
        </Link>
        <Link to="/iot">
          <button className="print-cse6-subbutton">Internet of Things</button>
        </Link>
      </div>
    </div>
  );
}

export default PrintCse6Subs;
