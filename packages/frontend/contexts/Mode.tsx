import { createContext } from 'react';

const Mode = createContext<{
  mode: 'light' | 'dark';
  setMode: (newMode: 'light' | 'dark') => void;
}>({ mode: 'light', setMode: () => {} });

export default Mode;
