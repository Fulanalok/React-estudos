import React from 'react';

export const Challenge = () => {
  const x = 5;
  const y = 8; 

  return (
    <div>
      <h1>X: {x}</h1>
      <h1>Y: {y}</h1>
      <button onClick={() => console.log(x + y )}>
        Clique aqui para somar
      </button>
    </div>
  );
};

export default Challenge;