import  { useState } from 'react'

const ListRender = () => {
const [list] = useState(["Matheus, Pedro,Josias, Julia"]);

const [users, setUsers] = useState([
    { id: 1, name: "Lucas", age: 19 },
    { id: 2, name: "Julia", age: 18 },
    { id: 3, name: "Fernando", age: 20 }
]);

const deletedRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
        console.log(prevUsers)
        return prevUsers.filter((user) => randomNumber !== user.id);
    });
};

  return (
  <div>
    <ul>
        {list.map((item, i) => (
            <li key={i}> {item} </li>
        ))}
    </ul>
    <ul> 
        {users.map((user) => (
            <li key={user.id}> 
            {user.name} - {user.age} 
            </li>
        ))}
    </ul>
    <button onClick= {deletedRandom}> Delete random user </button>
  </div>
   )
}

export default ListRender