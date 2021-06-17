import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header.js';
import Intro from './components/Intro.js';
import Intro2 from './components/intro2.js'
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';



function App() {
  return (
    <div className="App">
      <Route exact path='/' render={props => {
        return <div>
          <Header></Header>
          <Menu></Menu>
          <Intro></Intro>
          <Intro2></Intro2>
          <Footer></Footer>
        </div>

      }} />

      <Route path='/work' render={props => {
        return <div>
          <Header></Header>
          <Menu></Menu>
          <Footer></Footer>
        </div>

      }} />

      <Route path='/resume' render={props => {
        return <div>
          <Header></Header>
          <Menu></Menu>
          <Footer></Footer>
        </div>

      }} />


      <Route path='/contact' render={props => {
        return <div>
          <Header></Header>
          <Menu></Menu>
          <Footer></Footer>
        </div>

      }} />


    </div>
  );
}

export default App;
