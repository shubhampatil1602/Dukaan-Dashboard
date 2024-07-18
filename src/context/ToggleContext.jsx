import { createContext, useState, useEffect } from 'react';
import { tableData } from '../data/table';

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(window.innerWidth >= 1024);
  const [search, setSearch] = useState('');
  const [tableDataState, setTableDataState] = useState(tableData);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ToggleContext.Provider
      value={{
        toggle,
        setToggle,
        search,
        setSearch,
        tableDataState,
        setTableDataState,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};
