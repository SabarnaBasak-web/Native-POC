// ...
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import blogReducer from './reducer/BlogReducers';
// ...
import rootSaga from './sagas/BlogSagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(blogReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

// const action = type => store.dispatch({type});

// rest unchanged
export default store;
