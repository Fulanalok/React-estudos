// components
import FirstComponent from "./components/FirstComponents"
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Event";
import Challenge from "./components/Challenge";

// styles css
import './App.css';

function App() {
  return (
    <div className="App">  
    <h1> Fundamentos React  </h1>
    <FirstComponent/>
    <TemplateExpressions/>
    <MyComponent/>
    <Challenge/>
    <Events/>
    </div>
  );
}

export default App;
