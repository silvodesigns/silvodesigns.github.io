import './App.css';
import Header from './components/header.js';
import Menu from './components/menu.js';
import Intro from './components/Intro.js';
import Footer from './components/footer.js';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
      <Intro></Intro>
      <Footer></Footer>
    </div>
  );
}

export default App;
