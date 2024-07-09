import React from 'react';
import './Box.css'; // Import your CSS file for styling

// Functional component representing a box
function Box(props) {
  return (
    <div className="box">
      {props.children}
    </div>
  );
}

export default Box;
