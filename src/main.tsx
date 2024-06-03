import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { config } from './components/QdtComponent/index.tsx';
import './custom.css'

const qlikTenantUrl = `https://${config.host}`;
const authUrl = `${qlikTenantUrl}/login`;
const currentUrl = window.location.href;

// Check if user is authenticated
fetch(`${qlikTenantUrl}/api/v1/users/me`, {
  credentials: 'include',
  headers: {
    'qlik-web-integration-id': config.webIntegrationId,
  },
}).then(isAuthenticated => {
  if (!isAuthenticated) {
    // Redirect to Qlik SaaS login page
    const loginUrl = `${authUrl}?returnto=${encodeURIComponent(currentUrl)}&qlik-web-integration-id=${config.webIntegrationId}`;
    window.location.href = loginUrl;
    // console.log(loginUrl)
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
