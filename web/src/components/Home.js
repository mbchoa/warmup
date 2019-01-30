import React from 'react';
import { Link } from '@reach/router';

import '../styles/home.scss';

const Home = () => (
  <div className="home">
    <Link className="home__warmup-link" to="/warmup">Warmup</Link>
    <Link className="home__macro-link" to="/macros">Macros</Link>
    <Link className="home__barbell-link" to="/barbell">Barbell</Link>
    <Link className="home__workouts-link" to="/workouts">Workouts</Link>
  </div>
);

export default Home;
