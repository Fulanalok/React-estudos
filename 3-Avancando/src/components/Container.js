
import React from 'react'

const Container = ({ children, myValue }) => {
  return (
    <div>
        <h2>esse eh o titulo do container</h2>
        {children}
        <p>O codigo ficou {myValue} </p>
    </div>
  )
}

export default Container