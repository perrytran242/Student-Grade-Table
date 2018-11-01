import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import studentReducer from './students_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    students: studentReducer,
});

export default rootReducer;
