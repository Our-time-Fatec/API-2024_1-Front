import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from './components/Header/header.tsx';
import Footer from './components/Footer/footer.tsx';


export default function App() {
  return (
    <Router>  
      <div className='App'>
        <Header/>
          <Switch>
          </Switch>
        <Footer/>
      </div>
    </Router> 
  );
}
