import axios from 'axios';
import { db } from '../firebase';
import types from './types';

export const getStudentList = () => dispatch => {
    const dbRef = db.ref('/student')

    dbRef.on('value', (snapshot) => {
        console.log("DB SNAPSHOT:", snapshot.val());

        dispatch({
            type: types.GET_STUDENT_LIST,
            payload: snapshot.val(),
        });
    });
    return dbRef;
}