import React from 'react'

const Smurf = (props) => {
  const {smurf} = props

  return (
    <div>
      <h3>{smurf.name}</h3>
      <ul>
        <li>{`Age: ${smurf.age}`}</li>
        <li>{`Height: ${smurf.height}`}</li>
      </ul>
    </div>
  )
}

export default Smurf