import React, { useEffect } from 'react';

import PosedRouter from './PosedRouter';
import BarbellRoute from './routes/BarbellRoute';
import HomeRoute from './routes/HomeRoute';
import MacrosRoute from './routes/MacrosRoute';
import WarmupRoute from './routes/WarmupRoute';
import WorkoutsRoute from './routes/WorkoutsRoute';

import './styles/app.scss';

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
      <PosedRouter className="app__router">
        <HomeRoute path="/" />
        <MacrosRoute path="/macros" />
        <WarmupRoute path="/warmup" />
        <WorkoutsRoute path="/workouts" />
        <BarbellRoute path="/barbell" />
      </PosedRouter>
    </div>
  );
}

export default App;
