import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './services/redusers'
import { BrowserRouter as Router } from 'react-router-dom';

window.onclose = () => {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
  }
};

const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render(
  <React.StrictMode>
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>
</React.StrictMode>
    
);