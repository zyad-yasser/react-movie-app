import React from 'react';
import { GeneralLayout } from '../../layouts/general-layout/general.layout';
import { Router } from '../../router';
import './app.component.sass';

function App() {
  return (
    <div className="App">
      <GeneralLayout>
        <Router />
      </GeneralLayout>
    </div>
  );
}

export default App;
