import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';

import App from './App';
import PrivateRoute from './components/PrivateRoute';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import AboutScreen from './screens/AboutScreen';
//ulazna tacka app
//pravimo ruter (prikazuje komp na osnovu url)
//index nam je za  home screen to da prikaze
//RouterProvider koristi ruter koji smo napravili da prikaze odg komp
//Provajder omogucava svim el u njemu pristup storu
//root je div i index.html gde se uctitava React app
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Javne rute */}
      <Route index element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/about" element={<AboutScreen />} />

      {/* Zaštićene rute — samo ulogovani korisnici */}
      /* za demonstraciju izgleda ekrana samo obrisemo da 
            je privatna ruta i stavimo u browser /ekran */
      <Route >
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
//povezujemo redux store sa react komponentama