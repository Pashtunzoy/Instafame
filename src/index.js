/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import App from './components/App';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadPosts } from './actions/postActions';
import { loadComments } from './actions/commentActions';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(loadPosts());
store.dispatch(loadComments());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
    document.getElementById('app')
);
