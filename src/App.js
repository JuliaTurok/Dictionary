import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Dictionary defaultKeyword = "sunset"/>
      <a className="link" href="https://github.com/JuliaTurok/Dictionary.git">
        open-source code
      </a>
    </div>
  );
}

 export default App;
