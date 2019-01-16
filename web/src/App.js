import React, { useEffect } from 'react';
import { Router } from '@reach/router'

import Barbell from './components/Barbell';
import Home from './components/Home';
import Macros from './components/Macros';
import WarmupInput from './components/WarmupInput';
import Workouts from './components/Workouts';

const HomeRoute = () => (
  <div className="app__home-container">
    <div className="app__home-center">
      <Home />
    </div>
  </div>
);

const MacrosRoute = () => (
  <div className="app__macros-container">
    <Macros />
  </div>
);

const WarmupInputRoute = () => (
  <div className="app__warmup-container">
    <WarmupInput />
  </div>
);

const BarbellRoute = () => (
  <div className="app__barbell-container">
    <Barbell />
  </div>
)
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
        <MacrosRoute path="/macros" />
        <WarmupInputRoute path="/warmup" />
        <WorkoutRoute path="/workouts" />
        <BarbellRoute path="/barbell" />
      </Router>
    </div>
  );
}

export default App;
