import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import Sidedrawer from './components/Sidedrawer'
import { useState } from 'react';



function App() {
    const [sideToggle, setSideToggle] = useState(false);
    console.log(sideToggle)
    return (
        <Router>
            <div className="app">
                <Navbar click={() => setSideToggle(true)} />
                <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
                <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
                <main>
                    <Switch>
                        <Route exact path="/" component={HomeScreen}/>
                        <Route exact path="/product/:id" component={ProductScreen} />
                        <Route exact path="/cart" component={ CartScreen}/>
                       
                    </Switch>
                </main> 


            </div>
        </Router>
  );
}

export default App;
