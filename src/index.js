import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import 'normalize.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* PersistGate - гарантує, що ініціалізація програми буде відкладена до моменту заповнення програми даними */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
  </React.StrictMode>
);
