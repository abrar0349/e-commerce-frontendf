import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
// import App from './App';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { store } from './store/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store = {store}>    
      <RouterProvider router = {router}/> 
    </Provider>

  </React.StrictMode>
);


