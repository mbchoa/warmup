import React, { Fragment, useEffect } from 'react';
import { Router } from '@reach/router'

import Home from './Home';
import WarmupInput from './WarmupInput';
import Workouts from './Workouts';

const HomeRoute = () => (
  <div className="app__home-container">
    <div className="app__home-center">
      <Home />
    </div>
  </div>
)
const WarmupInputRoute = () => (
  <div className="app__warmup-container">
    <div className="app__warmup-center">
      <WarmupInput />
    </div>
  </div>
);

const WorkoutRoute = () => <Workouts />

const App = () => {
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      e.prompt();
      e.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
      });
    });
  })
  return (
    <div className="app">
      <Router className="app__router">
        <HomeRoute path="/" />
        <WarmupInputRoute path="/warmup" />
        <WorkoutRoute path="/workouts" />
      </Router>
    </div>
  );
}

export default App;
