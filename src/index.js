
import ReactDOM from 'react-dom/client';
import '../src/main.css';
import App from '../src/App';

import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <Provider store={store}>
    
  <App />
  </Provider>


);


