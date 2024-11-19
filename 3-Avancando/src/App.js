import { Fragment, useState, useEffect } from 'react';
import './App.css';

import Megadeth from './assets/megadeth.jpeg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = "Joao"
  const [username] = useState("Julia")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "Renault", color: "Branco", newCar: false, km: 12345},
    {id: 3, brand: "Chevrolet", color: "Verde", newCar: false, km: 45143},
  ]

function showMessage() {
  console.log("Evento de componentes, pai!")
}

const [message, setMessage ] = useState("");

const handleMessage = (msg) => {
  setMessage(msg);
};

const users = [
  {id: 1, name:"Lucas", job: "Programador", age: 19 },
  {id: 2, name:"Julia", job: "Diplomata", age: 18 },
  {id: 3, name:"Vitor", job: "Academico", age: 20 },
  {id: 4, name:"Fernando", job: "Aluno", age: 16 },
]

  return (
    <div className="App">
    <h1> Avancando </h1>
    {/*imagem em public */}
    <div>
    <img src="/Yuta.jpg" alt="Okkotsu" />
    </div>
     {/* imagem em src */}
     <div>
      <img src={Megadeth} alt="Rock" />
     </div>
     <ManageData/>
     <ListRender/>
     <ConditionalRender/>
     {/*props*/}
     <ShowUserName name={username} />
     {/*destructuring*/}
     <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
     {/*reaproveitando*/}
     <CarDetails brand="Ford" color="vermelho" km={0} newCar={true}/>
     <CarDetails brand="Fiat" color="branco" km={5000} newCar={false} />
     {/*loop em array de objetos*/}
     {cars.map((car) => (
      <CarDetails
      key={car.id}
       brand={car.brand}
       color={car.color} 
       km={car.km}
       newCar={car.newCar}
        />
     ))}
     {/* fragment */}
     <Fragments propFragments="teste" />    
     {/*children*/}
     <Container myValue= "legal">
     <p> esse eh o conteudo </p>
      </Container>
      {/* executar funcao */}
      <ExecuteFunction myFunction = {showMessage}/>
      {/*state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* desafio*/}
      {users.map((user) => (
        <UserDetails 
         key={user.id}
         name={user.name} 
         job={user.job} 
         age={user.age}/>
      ))}
    </div> 
  );
}

export default App;
