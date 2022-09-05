import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
          <App />
        </MuiPickersUtilsProvider>
    </Provider>
      
      
  </React.StrictMode>
);


