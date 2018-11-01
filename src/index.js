import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import think from './middleware/think';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';

const store = createStore(rootReducer, {}, applyMiddleware(think));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
