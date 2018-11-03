import { db } from '../firebase';
import types from './types';

export const getStudentList = () => dispatch => {
    const dbRef = db.ref('/students')

    dbRef.once('value').then( (snapshot) => {
        const val = snapshot.val();

        dispatch({
            type: types.GET_STUDENT_LIST,
            payload: val,
        });
    });

}