import {
    GET_PROJECTS,
    NEW_PROJECTS,
    DELETE_PROJECTS,
    UPDATE_PROJECTS,
    ERRORS,
} from '../types/taskTypes'

import tasks from "../api/tasks";
import { LOADING } from '../types/baseTypes';



const AUTH_TOKEN = localStorage.getItem("access_token");
tasks.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;


export const newProject = (data) => {

    return async dispatch => {
        dispatch({
            type: LOADING,
            payload: true
        })
        try {
            const res = await tasks.post('/projects', data)
            dispatch({
                type: NEW_PROJECTS,
                payload: res.data.data
            })
            dispatch({
                type: LOADING,
                payload: false
            })

        } catch (error) {
            dispatch({
                type: ERRORS,
                payload: error.message
            })
        }
    }
}
//get task
export const getProject = () => {

    return async dispatch => {
        dispatch({
            type: LOADING,
            payload: true
        })
        try {
            const res = await tasks.get('/projects')
            dispatch({
                type: GET_PROJECTS,
                payload: res.data.data
            })
            dispatch({
                type: LOADING,
                payload: false
            })

        } catch (error) {
            dispatch({
                type: ERRORS,
                payload: error.message
            })
        }
    }
}