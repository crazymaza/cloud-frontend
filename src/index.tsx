import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './coponents/appComponent/App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import StepOne from './coponents/stepOne/StepOne';
import StepTwo from './coponents/stepTwo/StepTwo';
import StepThree from './coponents/stepThree/StepThree';
import Modal from './coponents/modal/Modal';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'first-step',
    element: <StepOne />
  },
  {
    path: 'second-step',
    element: <StepTwo />
  },
  {
    path: 'third-step',
    element: <StepThree />
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Outlet />
      <Modal />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
