import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {smurfFetch} from '../actions/actions.js'
import Smurf from './Smurf.js'
import Gargamel from './Gargamel.js'

const Smurfs = (props) => {
  const {smurfs, isFetching, isGargamel, error} = props
  console.log(smurfs)

  useEffect(() => {
    props.smurfFetch()
  })

  return (
    <section>
      <Gargamel />
      {error && <p>{error}</p>}
      {(isFetching  || isGargamel) ? <p>...Gargamel Created New Smurf!...</p> : smurfs.map(smurf => (
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
    error: state.error,
  }
}


export default connect(mapStateToProps, {smurfFetch})(Smurfs)