import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { store } from "./store";
import { BrowserRouter } from 'react-router-dom';

// import firebase from "firebase/app";
// import "firebase/auth";

// firebase.initializeApp({
//   apiKey: "AIzaSyD5jEq1xq2lAfVCueJ_VKg2SyOQF-xk5cw",
//   authDomain: "countries-8046e.firebaseapp.com",
//   projectId: "countries-8046e"
// })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
