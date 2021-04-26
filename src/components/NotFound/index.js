import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div>
      Not found, go to <Link to='/home'>home</Link>
    </div>
  );
};

export default NotFound;
