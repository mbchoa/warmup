import React, { useEffect } from 'react';
import { Router } from '@reach/router'

import BarbellRoute from './routes/BarbellRoute';
import HomeRoute from './routes/HomeRoute';
import MacrosRoute from './routes/MacrosRoute';
import WarmupRoute from './routes/WarmupRoute';
import WorkoutsRoute from './routes/WorkoutsRoute';

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
        <WarmupRoute path="/warmup" />
        <WorkoutsRoute path="/workouts" />
        <BarbellRoute path="/barbell" />
      </Router>
    </div>
  );
}

export default App;
