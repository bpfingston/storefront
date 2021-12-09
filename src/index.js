import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store/index';
// import reportWebVitals from './reportWebVitals';
import { CategoryProvider } from './store/category'

ReactDOM.render(
    <React.StrictMode>
      <Provider Store={Store()}>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

// reportWebVitals();