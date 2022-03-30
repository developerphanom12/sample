import React from 'react';
import App from './app/App';

import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom/client';

// ReactDOM.render(
//   <React.StrictMode>

//           <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.createRoot(document.querySelector('#root') as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
