import React from 'react';
import { RouterProps } from '../types/router';
import { Redirect, Route } from 'react-router-dom';
import { routes } from './routes';

export const Router = (props: RouterProps) => (
  <>
    {routes.map(({ path, component: Comp, exact, data, redirect }, key) =>
      path === '*'
        ? (
          <Redirect to={ redirect! } />
        )
        : (
          <Route
            key={key}
            exact={exact}
            path={path}
            render={(props) => <Comp {...props} data={data} />}
          />
        )
    )}
  </>
);
