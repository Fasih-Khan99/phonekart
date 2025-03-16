import { StrictMode } from 'react'   //Tool for highlighting potential problems in React App (like unsafe lifecycle methods). 
//CreateRoot creates root container in React 18 (new rendering method), replaces the older ReactDOM.render() used in React 17.
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'   //Entire UI is rendered dynamically by App.jsx component.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
