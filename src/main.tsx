import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './styles/index.css'
import App from './App'

const el = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

if (el.hasChildNodes()) hydrateRoot(el, app)
else createRoot(el).render(app)
