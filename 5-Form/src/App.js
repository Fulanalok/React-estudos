import MyForm from "./components/MyForm";
import "./components/MyForm.css";

function App() {
  return (
    <div className="App">
      <h2> Form </h2>
      <MyForm
        user={{
          name: "Josias",
          email: "josias@gmail.com",
          bio: "sou um programador",
          role: "admin ",
        }}
      />
    </div>
  );
}

export default App;
