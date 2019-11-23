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
}

export const reducer = (state = initialState, action) => {

  switch(action.type) {
    case FETCH_DATA_START:
      return{
        ...state,
        smurfs: []
      }
    case FETCH_DATA_SUCCESS:
      return{
        ...state,
        smurfs: action.payload
      }
    case FETCH_DATA_FAIL:
      return{
        ...state,
        smurfs: []
      }
    case POST_DATA_START:
      return{
        ...state,
        smurfs: []
      }
    case POST_DATA_SUCCESS:
      return{
        ...state,
        smurfs: [...state.smurfs, action.payload]
      }
    case POST_DATA_FAIL:
      return{
        ...state,
        smurfs: []
      }
    default:
      return state;
  }

}