import React from 'react';
import featureimage from "../images/Frame 19.png";

function Features() {
  return (
    <div id='features'>
        <div className='features-model'>
            <img src={featureimage} alt='feature-image' />
        </div>
        <div className='features-text'>
            <h2>Features</h2>
            <h3>This Application <span>Software</span>is Art</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, 
             sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <button>View More Features</button>
        </div>
    </div>
  )
}

export default Features;