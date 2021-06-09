import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';

function App() {
  return (
    <main>
      <div>Hello, TrybeWallet!</div>
      <Switch>
        <Route
          exact
          path="/"
          render={ Login }
        />
      </Switch>
    </main>
  );
}

export default App;
