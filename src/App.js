import './App.css';
import ThebeComponent from "./components/ThebeComponent/ThebeComponent";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
        <NavBarComponent />
        <Container>
            <ThebeComponent />
        </Container>

    </div>
  );
}

export default App;
