import { API } from "../Api/api";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const GET_SEARCHING_ID = 'GET_SEARCHING_ID';
const GET_TICKETS_SUCCESS = 'GET_TICKETS_SUCCESS';

let initialState = {
    initialized: false,
    searchId: null,
    tickets: null,
}

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case GET_SEARCHING_ID:
            return {
                ...state,
                searchId: action.payload
            }

            case GET_TICKETS_SUCCESS:
                return {
                    ...state,
                    tickets: action.payload
                }
        default:
            return state
    }
}

export const setInitializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
export const getSearchingIdSuccess = (id) => ({ type: GET_SEARCHING_ID, payload: id });
export const getTicketsSuccess = (data) => ({ type: GET_TICKETS_SUCCESS, payload: data });



export const getSearchId = () => {
    return async dispatch => {
       let id = await API.getSearchId()
        dispatch(getSearchingIdSuccess(id.data.searchId))
        dispatch(getTickets(id.data.searchId))

    }
}

export const getTickets = (id) => {
    return async dispatch => {
       let data = await API.getTickets(id)
       dispatch(getTicketsSuccess(data.data.tickets))
       dispatch(setInitializedSuccess()) 
    }
}

export default appReduser;