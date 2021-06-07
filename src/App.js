import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header.js';
import Intro from './components/Intro.js';
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
