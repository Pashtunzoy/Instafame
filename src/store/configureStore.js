import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from '../reducers/indexReducer';
import reduxImmutableStateInvarient from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk,reduxImmutableStateInvarient()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
