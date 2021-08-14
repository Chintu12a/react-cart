import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import About from './pages/About'
import Home from './pages/Home'
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import Products from './components/Products';
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './CartContext';

const App = () => {

    const [cart, setCart] = useState({})
    useEffect(() => {
        // Fetch cart from local storage
        const cart = window.localStorage.getItem('cart');
        setCart(JSON.parse(cart))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <>
            <Router>
                <CartContext.Provider value={ {cart, setCart} }>
                    <Navigation />
                    <Switch>
                        <Route path='/' component={Home} exact></Route>
                        {/* <Route path='/about' component={About}></Route> */}
                        <Route path='/products' component={Products} exact></Route>
                        <Route path='/products/:_id' component={SingleProduct}></Route>
                        <Route path='/cart' component={Cart}></Route>
                    </Switch>
                </CartContext.Provider>
            </Router>
        </>
    )
}

export default App
