import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

//la LA la la la la la la la la la! make fetch happen!

export const smurfFetch = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });

  axios.get('http://localhost:3333/smurfs')
      .then(res => {
          console.log(res.data);
          dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(error => {
          dispatch({ type: FETCH_DATA_FAIL, payload: error });
      })
}

// s*** we have to be Gargamel too?... hmmm I guess I could just make them all males and have a stork deliver them... decisions decisions...

