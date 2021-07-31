import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import Products from './components/Products';

const App = () => {
    return (
        <>
            <Router>

            <Navigation/>
                <Switch>
                    <Route path='/' component={Home} exact></Route>
                    {/* <Route path='/about' component={About}></Route> */}
                    <Route path='/products' component={Products}></Route>
                    <Route path='/cart' component={Cart}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
