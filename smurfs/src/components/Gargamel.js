import React, {useState} from 'react'
import {connect} from 'react-redux'
import {gargamel} from '../actions/actions.js'


const Gargamel = (props) => {
  const {gargamel} = props

  const [value, setValue] = useState({
    name: '',
    age: '',
    height: '',
  })

  const handleChange = (name, e) => {
    setValue({...value, [name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    gargamel({
      name: value.name,
      age: value.age,
      height: value.height
    })
    setValue({
      name: '',
      age: '',
      height: '',
    })
  }

  return (
    <section>
      <article>
      <form onSubmit={e=>handleSubmit(e)}>
      <h2>Create-A-Smurf!</h2>
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
          name="age"
          value={value.age}
          onChange={e=>handleChange(e.target.name, e)}
        ></input>
        <label>Height: </label>
        <input
          type="text"
          placeholder="Height"
          name="height"
          value={value.height}
          onChange={e=>handleChange(e.target.name, e)}
        ></input>
        <input type="submit" value="Gilgameshit!" />
      </form>
      </article>
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