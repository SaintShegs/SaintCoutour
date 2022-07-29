import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './pages/Homepage';
import {useDispatch, useSelector} from "react-redux";
import {calculateTotal} from './features/cartSlice'
import { useEffect } from 'react';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import About from './pages/About';



function App() {
  const dispatch=useDispatch();
  const {cart}=useSelector(state=>state.cart);



useEffect(()=>{
  dispatch(calculateTotal());
},[cart,dispatch])


  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>

          <Route path='/contact' component={Contact}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/about' component={About}/>
        </Switch>
      
        <Newsletter/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
