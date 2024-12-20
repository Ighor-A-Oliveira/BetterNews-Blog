import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRoutes from './AppRoutes.jsx';
import { BrowserRouter } from 'react-router-dom';
import GeneralProvider from './Contexts/GeneralContext.jsx';
import ScrollToTop from './Utils/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </GeneralProvider>
  </StrictMode>
);
