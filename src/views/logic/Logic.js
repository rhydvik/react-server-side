import React from 'react';
import {NavLink} from 'react-router-dom';

const Logic = () => {
  return (
    <div>
      <h1>Plane page without code spitting</h1>
      <p>This will alwasy be added inside bundle js</p>
      <p>Will be the face when loaded directly</p>

      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default Logic;
