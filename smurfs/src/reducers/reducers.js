import {
  FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL,
  POST_DATA_START, POST_DATA_SUCCESS, POST_DATA_FAIL
} from '../actions/actions.js'

// postData = {
//   name: "Brainey",
//   age: 200,
//   height: "5cm",
// }


const initialState = {
  smurfs: [],
  isFetching: false,
  error: null,
}

export const reducer = (state = initialState, action) => {

  switch(action.type) {
    case FETCH_DATA_START:
      return{
        ...state,
        smurfs: [],
        isFetching: true,
        error: null, 
      }
    case FETCH_DATA_SUCCESS:
      return{
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: null,
      }
    case FETCH_DATA_FAIL:
      return{
        ...state,
        smurfs: [],
        isFetching: false,
        error: action.payload,
      }
    case POST_DATA_START:
      return{
        ...state,
        smurfs: [],
        isFetching: false,
        error: null,
      }
    case POST_DATA_SUCCESS:
      return{
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isFetching: false,
        error: null,
      }
    case POST_DATA_FAIL:
      return{
        ...state,
        smurfs: [],
        isFetching: false,
        error: action.payload,
      }
    default:
      return state;
  }

}