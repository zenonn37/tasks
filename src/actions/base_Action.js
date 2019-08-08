import {
    ERRORS,
    LOADING,
    CLEAR,
    COMPLETE,

} from '../types/baseTypes'


export const loadingAction = () => {
    console.log('called loading action');
    return async dispatch => {
        dispatch({
            type: LOADING,
            payload: true
        })
    }

}