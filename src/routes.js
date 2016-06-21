import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import PhotosPage from './components/photos/PhotosPage';
import Post from './components/photos/Post';
import Profile from './components/Profile';
import AuthForms from './components/AuthForms';

export default (
  <Route path="/" components={App}>
    <IndexRoute component={PhotosPage} />
    <Route path="post/:id" component={Post} />
    <Route path="profile" component={Profile} />
    <Route path="/auth" component={AuthForms} />
  </Route>
);

/* <IndexRoute component={HomePage} /> */
