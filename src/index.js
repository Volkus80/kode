import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
html {
    height: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
