import React, { useEffect } from 'react';

import WarmupInput from './WarmupInput';

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
      <div className="app__content">
        <WarmupInput />
      </div>
    </div>
  );
}

export default App;
