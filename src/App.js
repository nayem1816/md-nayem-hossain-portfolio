import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import MouseParticles from "react-mouse-particles";

function App() {
  return (
    <Router>
      <div className="background-style">
        <MouseParticles g={1} color="random" cull="col,image-wrapper" />
        <div style={{height:'70px'}} className="">
          <Header></Header>
        </div>
        <MainContainer></MainContainer>
      </div>
    </Router>
  );
}

export default App;
