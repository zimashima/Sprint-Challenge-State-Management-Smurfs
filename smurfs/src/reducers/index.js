import { 
    GET_SMURFS_SUCCESS, 
    GET_SMURFS_START, 
    GET_SMURFS_FAIL,

    CREATE_SMURFS_START,
    CREATE_SMURFS_SUCCESS,
    CREATE_SMURFS_FAIL,

    DELETE_SMURFS_START,
    DELETE_SMURFS_SUCCESS,
    DELETE_SMURFS_FAIL
    
} from "../actions"

export const initialState = {
    smurfArray: null,
    isFetching: false,
    isUpdating: false,
    isDeleting: false,
    error: null
}

export const smurfsReducers = (state = initialState, action) => {
    switch(action.type){

        case GET_SMURFS_START:
            return {
                ...state,
                isFetching: true
            }
        
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                smurfArray: action.payload,
                isFetching: false
            }

        case GET_SMURFS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case CREATE_SMURFS_START:
            return {
                ...state,
                isUpdating: true
            }
            
        case CREATE_SMURFS_SUCCESS:
            return {
                ...state,
                smurfArray: action.payload,
                isUpdating: false
            }
    
        case CREATE_SMURFS_FAIL:
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            }
            case DELETE_SMURFS_START:
                return {
                    ...state,
                    isUpdating: true
                }
                
            case DELETE_SMURFS_SUCCESS:
                return {
                    ...state,
                    smurfArray: action.payload,
                    isUpdating: false
                }
        
            case DELETE_SMURFS_FAIL:
                return {
                    ...state,
                    isUpdating: false,
                    error: action.payload
                }


        
        default:
            return state
    }
}