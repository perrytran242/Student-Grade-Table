import axios from 'axios';
import types from './types';

const BASE_URL = 'http://s-apis.learningfuze.com/sgt/get';
const API_KEY = 'vlUhY1v3MX';

function formatPostData(data){
    const postData = new URLSearchParams();

    for(let [k, v] of Object.entries(data)){
        postData.append(k, v);
    }
    return postData;
}

export const getStudentList= () => async dispatch => {

    const postData = { api_key: API_KEY };
    try {
        const response = await axios.post(BASE_URL, formatPostData(postData));

        dispatch({
            type: types.GET_STUDENT_LIST,
            payload: response.data.data,
        });
    } catch(error) {
        console.log('error message:', error.message);
    }
}   