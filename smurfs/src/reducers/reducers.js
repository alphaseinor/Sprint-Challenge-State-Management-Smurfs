import {
  FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL,
  POST_DATA_START, POST_DATA_SUCCESS, POST_DATA_FAIL
} from '../actions/actions.js'

const initialState = {
  smurfs: [],
  isFetching: false,
  error: null,
  isGargamel: false,
}

export const reducer = (state = initialState, action) => {

  switch(action.type) {
    case FETCH_DATA_START:
      return{
        ...state,
        smurfs: [],
        isFetching: true,
        error: null,
        isGargamel: false,
      }
    case FETCH_DATA_SUCCESS:
      return{
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: null,
        isGargamel: false,
      }
    case FETCH_DATA_FAIL:
      return{
        ...state,
        smurfs: [],
        isFetching: false,
        error: action.payload,
        isGargamel: false,
      }
    case POST_DATA_START:
      return{
        ...state,
        smurfs: [],
        isFetching: false,
        error: null,
        isGargamel: true,
      }
    case POST_DATA_SUCCESS:
      return{
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isFetching: false,
        error: null,
        isGargamel: false,
      }
    case POST_DATA_FAIL:
      return{
        ...state,
        smurfs: [],
        isFetching: false,
        error: action.payload,
        isGargamel: false,
      }
    default:
      return state;
  }

}