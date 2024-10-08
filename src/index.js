import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from './components/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider basename="/goit-react-hw-08-phonebook">
      <App />
    </ThemeProvider>
  </Provider>
);
