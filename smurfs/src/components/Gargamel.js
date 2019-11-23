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

  const handleChange = (name, e) => {
    setValue({...value, [name]: e.target.value})
  }

  return (
    <section>
      <form>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={value.name}
          onChange={e=>handleChange(e.target.name, e)}
        ></input>
        <label>Age: </label>
        <input
          type="text"
          placeholder="Age"
          name="Age"
          value={value.age}
          onChange={e=>handleChange(e.target.age, e)}
        ></input>
        <label>Height: </label>
        <input
          type="text"
          placeholder="Height"
          name="height"
          value={value.height}
          onChange={e=>handleChange(e.target.height, e)}
        ></input>
        <input type="submit" value="Gilgamesh-it!" />
      </form>
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