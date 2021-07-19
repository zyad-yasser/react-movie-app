import React from 'react';
import { RouterProps } from '../types/misc';
import { Route } from 'react-router-dom';
import { routes } from './routes';

export const Router = (props: RouterProps) => (
  <>
    {routes.map(({ path, component: Comp, exact, data }, key) => (
      <Route
        key={key}
        exact
        path={path}
        render={(props) => <Comp {...props} data={data} />}
      />
    ))}
  </>
);
