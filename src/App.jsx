import { useState } from 'react';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import { ToggleProvider } from './context/ToggleContext';

const App = () => {
  return (
    <ToggleProvider>
      <div className='flex w-full'>
        <Sidebar />
        <Home />
      </div>
    </ToggleProvider>
  );
};

export default App;
