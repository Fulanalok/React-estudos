import React from 'react'

const Fragments = ({propFragments}) => {
  return ( 
    <>
    <h2>Primeiro Titulo </h2>
    <h3>Segundo Titulo </h3>
    <h4>{propFragments} </h4>
    </>
  );
};

export default Fragments