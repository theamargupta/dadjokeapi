import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import jokesReducer from './Reducers/JokeReducer';

const configStore = () => {
  const store = createStore(jokesReducer, applyMiddleware(ReduxThunk));
  return store;
};
export default configStore;
