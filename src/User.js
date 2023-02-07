import React from 'react'

const User = (props) => {
    console.warn("Heyyy",props)
 const {data}= props

  return (
    <div>
      <h1>Name-{data.name}</h1>
      <h1>Age-{data.age}</h1>
    </div>
  )
}

export default User
