import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    const[name,setName] = useState("Joao")

  return ( 
  <div>
    <h1>
        Isso sera exibido?
    </h1>
    {x && <p> Se x for true, sim! </p>}
    {!x && <p>Agora x eh falso </p>}
    {name === "Lucas" ? (
        <div>
            <p>O nome eh Lucas </p>
            </div>
    ) : (
        <div>
            <p> Nome nao encontrado </p>
            </div> 
    )} 
    <button onClick={() => setName("Lucas")}> Clica aqui </button>
    </div>
  )
}

export default ConditionalRender;