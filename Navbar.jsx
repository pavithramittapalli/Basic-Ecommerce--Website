import image5 from './assets/image5.webp';

function Navbar({ cartCount }) {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={image5} alt="logo" className="logo-image" />
            </div>
            <ul className="nav-links">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
                <li><a className="direct-links" href="login.html">Login</a></li>
                <li><a className="direct-links" href="signup.html">Signup</a></li>
            </ul>
            <div className="cart">
                🛒
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
        </nav>
    );
}

export default Navbar;
