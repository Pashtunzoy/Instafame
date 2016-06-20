import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from '../reducers/indexReducer';
import reduxImmutableStateInvarient from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import api from '../middleware/api';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk,reduxImmutableStateInvarient(), api),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
