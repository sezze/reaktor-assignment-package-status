import React from 'react'

function User ({ user: { name, email } }) {
  return (
    <span>
      <span>{name}</span> <a href={email}>{email}</a>
    </span>
  )
}

export default User
