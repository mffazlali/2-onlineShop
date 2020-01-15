import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'primereact/components/dialog/Dialog.css';
import 'primereact/components/dropdown/Dropdown.css';
import '../node_modules/primeflex/primeflex.css';
import '../node_modules/primereact/resources/themes/nova-dark/theme.css';
import '../node_modules/primeicons/primeicons.css';
import foodBuilderReducer from './store/reducers/foodBuilder.reducer';
import authReducer from './store/reducers/auth.reducer';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
const rootReducers = combineReducers({
    foodBuilder: foodBuilderReducer,
    auth: authReducer
})

const store = createStore(rootReducers, enhancer);

const app = (
    <Provider store={store}>
        <React.Fragment>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.Fragment>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

