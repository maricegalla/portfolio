import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Error from './pages/NotFound';


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/portfolio/" element={<Main />} />
      <Route path="*" element={<Error />} />
    </Switch>
  );
}

export default Routes;
