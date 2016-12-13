import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courseReducer,
    authorReducer,
    ajaxStatusReducer
});

export default rootReducer;
