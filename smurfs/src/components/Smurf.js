import React from 'react'

const Smurf = (props) => {
  const {smurf} = props
  console.log(`in Smurf`)
  console.log(props)
  return (
    <article>
      <h3>{smurf.name}</h3>
      <ul>
        <li>{`Age: ${smurf.age}`}</li>
        <li>{`Height: ${smurf.height}`}</li>
      </ul>
    </article>
  )
}

export default Smurf