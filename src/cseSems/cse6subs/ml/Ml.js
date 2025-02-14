import React from 'react';
import { Link } from 'react-router-dom';
import './Ml.css';  // Import the ml.css file

function Ml() {
  return (
    <div className="ml-container">
      <div className="container">
        <Link to="/typesofmachinelearning">
          <button className="Topicbutton" data-tooltip="Types of Machine Learning">
           Unit-1 : Types of Machine Learning
          </button>
        </Link>
        <Link to="/multilayerperception">
          <button className="Topicbutton" data-tooltip="Multi-layer Perception">
          Unit-2 : Multi-layer Perceptron
          </button>
        </Link>
        <Link to="/learningwithtrees">
          <button className="Topicbutton" data-tooltip="Learning with Trees">
          Unit-3 : Learning with Trees
          </button>
        </Link>
        <Link to="/dimensionallyreduction">
          <button className="Topicbutton" data-tooltip="Dimensionality Reduction">
          Unit-4 : Dimensionality Reduction
          </button>
        </Link>
        <Link to="/reinforcementlearning">
          <button className="Topicbutton" data-tooltip="Reinforcement Learning">
          Unit-5 : Reinforcement Learning
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Ml;
