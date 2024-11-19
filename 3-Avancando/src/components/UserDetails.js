import React from 'react'

const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p> idade: {age}</p>
        <p> Profissao: {job}</p>
        {age >= 18 ? (
        (<p> Pode tirar a habilitacao </p>)
        ) : (
        <p>Menor de idade</p>
    )}
    </div>
  )
}

export default UserDetails