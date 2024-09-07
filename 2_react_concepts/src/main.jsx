import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalState from './context/index.jsx';
// import { GlobalContext } from './context/index.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // <App />
  <GlobalState>
    <App />
  </GlobalState>
);

// the application is run twice so remove the StrictMode to avoid that.