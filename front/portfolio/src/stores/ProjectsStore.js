import projectsReducer from  '../reducers/projectsReducer';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default createStore(projectsReducer, applyMiddleware(thunk));
