import React from 'react';
import { RouterProps } from '../types/misc';

export const Router = (props: RouterProps) => (
    {routes.map(({ path, component: Comp, exact, data }, key) => (
      <Route
        key={key}
        exact
        path={path}
        render={(props) => <Comp {...props} data={data} />}
      />
    ))}
);
