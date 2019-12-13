import axios from 'axios'

export const GET_SMURFS_START = 'GET_SMURFS_START'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL'

export const CREATE_SMURFS_START = 'CREATE_SMURFS_START'
export const CREATE_SMURFS_SUCCESS = 'CREATE_SMURFS_SUCCESS'
export const CREATE_SMURFS_FAIL = 'CREATE_SMURFS_FAIL'

export const UPDATE_SMURFS_START = 'UPDATE_SMURFS_START'
export const UPDATE_SMURFS_SUCCESS = 'UPDATE_SMURFS_SUCCESS'
export const UPDATE_SMURFS_FAIL = 'UPDATE_SMURFS_FAIL'

export const DELETE_SMURFS_START = 'DELETE_SMURFS_START'
export const DELETE_SMURFS_SUCCESS = 'DELETE_SMURFS_SUCCESS'
export const DELETE_SMURFS_FAIL = 'DELETE_SMURFS_FAIL'


export const getSmurfs = () => dispatch => {
    dispatch({type: GET_SMURFS_START})
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type: GET_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err =>{
            dispatch({type: GET_SMURFS_FAIL, payload: err})
        })
}

export const createSmurfs = (smurfValue) => dispatch => {
    dispatch({type: CREATE_SMURFS_START})
    axios
        .post('http://localhost:3333/smurfs', smurfValue)
        .then(res => {
            dispatch({type: GET_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err =>{
            dispatch({type: CREATE_SMURFS_FAIL, payload: err})
        })
}

export const deleteSmurf = (id) => dispatch => {
    dispatch({type: DELETE_SMURFS_START})
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
        dispatch({type: DELETE_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: DELETE_SMURFS_FAIL, payload: err})
    })
}