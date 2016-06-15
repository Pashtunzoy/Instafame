import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import PhotosPage from './components/photos/PhotosPage';
import Post from './components/photos/Post';

export default (
  <Route path="/" components={App}>
    <IndexRoute component={PhotosPage} />
    <Route path="post/:id" component={Post} />
  </Route>
);

/* <IndexRoute component={HomePage} /> */
