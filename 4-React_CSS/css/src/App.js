import './App.css';
import MyComponent from './components/MyComponent';

import {useState} from "react"
import Title from './components/Title';

function App() {

  const n = 9
  const [name] = useState("Lucas")

  const redTitle = true

  return (   
  <div className="App">
    {/* CSS global*/}
    <h1> css  </h1>
    {/*CSS de componente*/}
    <MyComponent/>
    <p> Esse paragrafo eh do App.js </p>
    {/* Inline CSS*/}
    <p style={{ 

      color: "blue ", 
      padding: "25px",
       borderTop:"2px solid red"
       }}> 
       
       esse elemento foi estilizado com inline 
       </p>

       <p style={{ 
  
  color: "magenta ", 
  padding: "25px",
   borderTop:"2px solid red"
   }}> 
   
   esse elemento foi estilizado com inline
    </p>
    {/*css inline dinamico*/}
    <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})} >Css dinamico
    </h2>

    <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})} >Css dinamico
    </h2>

    <h2 style={name === "Lucas" ? ({color: "green", backgroundColor:"#000"})
     : null
     }
     >
      Teste nome 
    </h2>
     {/*classe dinamica*/}
     <h2 
     className={redTitle ? "red-title" : "title"}> Este titulo vai ter classe dinamica 
     </h2>
     {/*CSS modules*/}
     <Title/>

</div>
);
};

export default App;
