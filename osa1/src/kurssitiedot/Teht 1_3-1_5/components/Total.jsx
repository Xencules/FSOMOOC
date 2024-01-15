import React from 'react'

function Total(props) {

  let total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

export default Total