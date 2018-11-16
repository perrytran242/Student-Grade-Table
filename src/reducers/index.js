import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import studentReducer from './students_reducer';
import deleteModal from './delete_modal_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    students: studentReducer,
    delete: deleteModal,
});

export default rootReducer;
