import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,
createRoutesFromElements,
Route,
RouteProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import App from './App';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route path="/" element={<HomeScreen />}></Route> */}
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

