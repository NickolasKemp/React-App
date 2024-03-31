import React, { createContext, useEffect, useState } from 'react';
import App from '../App';

export const AppContext = createContext<any>(null)
const Context = () => {

  return (
    <AppContext.Provider value={ { } }>
      <App />
    </AppContext.Provider>
  );
};

export default Context;