import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Header from "./components/Header.js";
import Intro from "./components/Intro.js";
import Footer from "./components/Footer.js";
import Text from "./components/WelcomeText";

function App() {
  return (
    <div className="App">
      <Container>
        <Route
          exact
          path="/"
          render={(props) => {
            return (
              <div>
                <Text></Text>
                <Header></Header>
                <Intro></Intro>
                <Footer></Footer>
              </div>
            );
          }}
        />
      </Container>
    </div>
  );
}

export default App;
