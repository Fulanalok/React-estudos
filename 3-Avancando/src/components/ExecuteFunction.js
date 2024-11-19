import React from 'react'

const ExecuteFunction = ({myFunction}) => {
    
  return ( 
  <div>
   <button onClick={myFunction}> Clique para executar sua funcao </button>
    </div>
  )
}

export default ExecuteFunction