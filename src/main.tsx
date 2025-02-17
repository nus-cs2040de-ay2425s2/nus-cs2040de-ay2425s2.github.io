import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Get root element
const rootElement = document.getElementById('root')

// Ensure root element exists
if (!rootElement) {
  throw new Error('Root element not found. Make sure there is a div with id "root" in index.html')
}

// Create and render app
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
