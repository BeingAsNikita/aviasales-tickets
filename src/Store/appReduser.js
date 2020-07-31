import { API } from "../Api/api";
import { filtration } from "../utils/filters";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const GET_SEARCHING_ID = 'GET_SEARCHING_ID';
const GET_TICKETS_SUCCESS = 'GET_TICKETS_SUCCESS';
const FILTER_SUCCESS = 'FILTER_SUCCESS';

let initialState = {
    initialized: false,
    searchId: null,
    tickets: [],
    stop: false,
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
                    tickets: state.tickets.concat(action.payload.data),
                    stop: action.payload.stop
                }
                
                case FILTER_SUCCESS: 
                return {
                    ...state,
                    tickets: filtration(action.payload, state.tickets)
                }
        default:
            return state
    }
}

export const setInitializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
export const getSearchingIdSuccess = (id) => ({ type: GET_SEARCHING_ID, payload: id });
export const getTicketsSuccess = (data, stop) => ({ type: GET_TICKETS_SUCCESS, payload: {data: data, stop: stop} });
export const filterSuccess = (filters) => ({ type: FILTER_SUCCESS, payload: filters });




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
      

        dispatch(getTicketsSuccess(data.data.tickets, data.data.stop))
       
       dispatch(setInitializedSuccess()) 
       
    }
}



export default appReduser;