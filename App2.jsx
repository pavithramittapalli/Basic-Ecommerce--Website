import { useState } from 'react';
import Website from './Website';
import Navbar from './Navbar';
import item1 from './assets/image1.avif';
import item2 from './assets/image2.avif';
import item3 from './assets/image3.webp';
import item4 from './assets/image4.webp';
import Footer from './Footer';
function App2() {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <>
            <Navbar cartCount={cartCount} />
            <div className='container'>
                <Website image={item1} name="White Lenin Shirt" price="2000₹" button="Add to cart" onAddToCart={handleAddToCart} />
                <Website image={item2} name="Blue Lenin Shirt" price="1500₹" button="Add to cart" onAddToCart={handleAddToCart} />
                <Website image={item3} name="Headphones" price="5499₹" button="Add to cart" onAddToCart={handleAddToCart} />
                <Website image={item4} name="Moisturizer" price="499₹" button="Add to cart" onAddToCart={handleAddToCart} />
            </div>
              <Footer /> 
        </>
    );
}

export default App2;
