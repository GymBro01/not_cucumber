import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from './store';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Counter from "./components/counter";

const router = createBrowserRouter
(
  [
    {
      path: '/',
      element: <App />,
      children:
      [
        {path: '/', element: <Home />},
        // {path: '/counter', element: <Counter />}
      ],
    },
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render
(
<React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
</React.StrictMode>
);
