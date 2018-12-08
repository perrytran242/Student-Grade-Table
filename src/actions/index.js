import { db } from '../firebase';
import { reset, clearFields } from 'redux-form'
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

export const getGradeAverage = () => dispatch => {
    let sumOfGrades = 0;
    const dbRef = db.ref('/students');
    

    dbRef.once('value').then( (snapshot) => {
        const val = snapshot.val();

        const grade = Object.keys(val).map(key => {
            return parseInt(val[key].grade);
        });

        for ( let i = 0; i < grade.length; i++) {
            sumOfGrades = sumOfGrades + grade[i];
        }

        let gradeAverage = sumOfGrades / grade.length;

        dispatch({
            type: types.GET_GRADE_AVERAGE,
            payload: gradeAverage.toFixed(2)
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

export const getStudentInfo = (id) => dispatch => {
    const dbRef = db.ref(`/students/${id}`);

    dbRef.once('value').then( (snapshot) => {
        const val = snapshot.val();

        dispatch({
            type: types.GET_STUDENT_INFO,
            payload: val
        });
    });
}


export function openModal() {
    return {
        type: types.OPEN_DELETE_MODAL,
        payload: true,
    }
}

export function closeModal() {
    return {
        type: types.CLOSE_DELETE_MODAL,
        payload: false,
    }
}