import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <NavBar></NavBar>
      </header>
      <body>
        <ItemListContainer></ItemListContainer>
      </body>
    </div>
  );
}

export default App;
