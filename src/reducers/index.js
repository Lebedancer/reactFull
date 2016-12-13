import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import numAjaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courseReducer,
    authorReducer,
    numAjaxCallsInProgress
});

export default rootReducer;
