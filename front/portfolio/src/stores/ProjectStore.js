import projectReducer from  '../reducers/projectReducer';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default createStore(projectReducer, applyMiddleware(thunk));
