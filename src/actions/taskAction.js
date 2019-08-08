import {

    GET_TASK,
    NEW_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    ERRORS

} from '../types/taskTypes'
import tasks from "../api/tasks";



const AUTH_TOKEN = localStorage.getItem("access_token");
tasks.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;

//new Task
export const newTask = (task) => {
    console.log(task);

    return async dispatch => {

        try {
            const res = await tasks.post('/tasks', task);
            dispatch({
                type: NEW_TASK,
                payload: res.data.data
            })
            console.log('success');



        } catch (error) {
            dispatch({
                type: ERRORS,
                payload: error.message
            })
            console.log('fail');

        }
    }
}
//update task
export const updateTask = (task) => {
    return async dispatch => {
        try {
            const res = await tasks.patch(`/tasks/${task.id}`, task)
            dispatch({
                type: UPDATE_TASK,
                payload: res.data.data
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
export const getTask = () => {
    return async dispatch => {
        try {
            const res = await tasks.get('/tasks')
            dispatch({
                type: GET_TASK,
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: ERRORS,
                payload: error.message
            })
        }
    }
}
//delete task
export const deleteTask = (id) => {
    return async dispatch => {
        const res = await tasks.delete(`/task/${id}`)
        try {
            dispatch({
                type: DELETE_TASK,
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: ERRORS,
                payload: error.message
            })
        }
    }
}