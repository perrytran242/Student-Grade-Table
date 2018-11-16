import { db } from '../firebase';
import types from './types';

export const getStudentList = () => dispatch => {
    const dbRef = db.ref('/students')

    dbRef.once('value').then( (snapshot) => {
        const val = snapshot.val();

        dispatch({
            type: types.GET_STUDENT_LIST,
            payload: val
        });
    });
}

export const addStudent = (name, grade, subject) => dispatch => {
    const dbRef = db.ref('/students');

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

export const updateStudentInfo = (name, grade, subject, id) => dispatch => {
    const dbRef = db.ref(`/students/${id}`);

    dbRef.update({
        name: name,
        grade: grade,
        subject: subject
    }).then( () => {
        console.log('DATA IS UPDATED');
    }).catch( (error) => {
        console.log("ERROR:", error);
    });    
}

export const deleteStudent = (id) => dispatch => {
    const dbRef = db.ref(`/students/${id}`);
    dbRef.remove();
}

export function openDeleteModal() {
    return {
        type: types.OPEN_DELETE_MODAL,
        payload: true,
    }
}

export function closeDeleteModal() {
    return {
        type: types.CLOSE_DELETE_MODAL,
        payload: false,
    }
}