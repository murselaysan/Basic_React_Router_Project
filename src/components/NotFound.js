import React from 'react';

import {Link} from 'react-router-dom';

const NotFound = () => (
  <div>
    <h2>Error 404! Page Not found</h2>
    Got to <Link to="/">My Home page!</Link>
  </div>
);

export default NotFound;