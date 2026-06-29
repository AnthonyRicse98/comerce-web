import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router'; // Importante importar esto
import AppRoutes from './ui/routes/Routes'; // Renombrado para claridad

import './index.less';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </StrictMode>,
  );
}