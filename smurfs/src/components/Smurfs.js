import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {smurfFetch} from '../actions/actions.js'
import Smurf from './Smurf.js'


const Smurfs = (props) => {
  const {smurfs, isFetching, isGargamel} = props

  useEffect(() => {
    props.smurfFetch();
  }, [])

  return (
    <section>
      {isFetching && <p>Stork Dropping Smurfs</p>}
      {isFetching && !isGargamel && 
        smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))
      }
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    isGargamel: state.isGargamel,
  }
}


export default connect(mapStateToProps, {smurfFetch})(Smurfs)