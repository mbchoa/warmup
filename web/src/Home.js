import React from 'react';
import { Link } from '@reach/router';

const Home = () => (
  <div className="home">
    <Link className="home__warmup-link" to="/warmup">Warmup</Link>
    <Link className="home__macro-link" to="/macros">Macros</Link>
    <div className="home__placeholder-left" />
    <div className="home__placeholder-right" />
  </div>
);

export default Home;
