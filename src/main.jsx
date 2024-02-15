
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-uj26lkcvapypybc8.us.auth0.com"
    clientId="h4F7L3ZxFsjRRne0to3YNQJfOLsnUyIp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
    <App />
    </Auth0Provider>,
)
