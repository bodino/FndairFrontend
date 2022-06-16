import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { connectors } from './hooks/wagmi';
import {RecoilRoot} from 'recoil';
import {client} from './hooks/wagmi.js'

import {WagmiConfig, Provider } from 'wagmi'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <WagmiConfig client={client}>

        <App />
        </WagmiConfig>
      </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
