import types from '../actions/types';

const DEFAULT_STATE = {
    studentList: [],
    studentInfo: null,
    gradeAverage: null,
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_STUDENT_LIST:
            return { ...state, studentList: action.payload}
        case types.GET_STUDENT_INFO:
            return { ...state, studentInfo: action.payload}
        case types.GET_GRADE_AVERAGE:
            return { ...state, gradeAverage: action.payload}
        default: 
            return state;
    }
}