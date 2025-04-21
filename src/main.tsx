import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { StrictMode } from 'react'

import App from './App.tsx'
import '@/index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
