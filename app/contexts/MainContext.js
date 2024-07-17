import React, {createContext, useContext, useMemo, useState} from 'react';
const context = createContext();

export const MainContextProvider = props => {
  const [data, setData] = useState({});
  console.log(data, 'MainContext.js');

  const value = useMemo(() => {
    return {
      data: data,
      setData: setData
    };
  }, [
    data,
    setData
  ]);

  return <context.Provider value={value}>{props.children}</context.Provider>;
};

export const useMainContext = () => {
  const value = useContext(context);
  if (value === undefined)
    throw new Error('Tried to use context without a provider');
  return value;
};
