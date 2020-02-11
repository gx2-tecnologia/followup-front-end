import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from 'routes/listRoutes';

export default function Routes() {
  return (
    <Switch>
      {routes.map((item, index) => (
        <Route path={item.path} exact component={item.component} key={index} />
      ))}
    </Switch>
  );
}
