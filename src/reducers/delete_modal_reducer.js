import types from '../actions/types';

const DEFAULT_STATE = {
    isOpen: false,
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.OPEN_DELETE_MODAL:
            return { ...state, isOpen: action.payload}
        case types.CLOSE_DELETE_MODAL:
            return { ...state, isOpen: action.payload}
        default:
            return state;
    }
}