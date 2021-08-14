import React from 'react'
import Footer from '../components/Footer';
import Products from '../components/Products';
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroBtn, HeroItems } from './HomeElement'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <HeroContainer>
            <HeroContent>
                    <HeroItems>
                        <HeroH1>Eat Pizza Ever</HeroH1>
                        <HeroP>Ready in 5 Minutes</HeroP>
                        <HeroBtn  ><Link to="/products">Place Order</Link></HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
            <div>
                <Products />
            </div>
            <Footer/>
        </>
    )
}

export default Home
