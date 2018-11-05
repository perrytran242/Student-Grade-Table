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

export const addStudent = (name, grade, subject) => dispatch => {
    const dbRef = db.ref('/students');
    console.log(dbRef);

    dbRef.push({
        name: name,
        grade: grade,
        subject: subject
    }).then( () => {
        console.log('DATA IS SAVED');

    }).catch( (error) => {
        console.log("Error:", error);
    });
}