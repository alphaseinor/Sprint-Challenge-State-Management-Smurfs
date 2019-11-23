import React, {useState} from 'react'
import {connect} from 'react-redux'
import {gargamel} from '../actions/actions.js'


const Gargamel = (props) => {
  const {gargamel, isGargamel, smurfs} = props

  const [value, setValue] = useState({
    name: '',
    age: '',
    height: '',
  })

  return (
    <section>

    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    isGargamel: state.isGargamel,
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, {gargamel})(Gargamel)