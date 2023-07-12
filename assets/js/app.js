import { createRoot } from 'react-dom/client';
import React from 'react';
import store from './store'
import {Provider} from 'react-redux'
import {MemoryRouter} from 'react-router-dom';

import * as actionCreators from './actions/conversation'

import App from './components/App';

store.dispatch(actionCreators.setUsername(document.querySelector('#app').dataset.username));

const container = document.getElementById('app');
const root = createRoot(container);

root.render((
    <Provider store={store}>
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    </Provider>
));