import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Horarios from './Horarios';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
<Horarios/>
  </StrictMode>
);
