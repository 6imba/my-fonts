import './Header.css'
import Menu from './Menu/Menu';
import FontCategory from './FontCategory/FontCategory';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <div className='header'>
            <div class="header-logo">
            <Link to="/" className="header-icon">
                <img src="https://cdn.shopify.com/s/files/1/0568/7164/9450/files/header_logo.svg?v=1653037224" alt="header Logo" loading="lazy" role="img"/>
            </Link>
            </div>
            <div class="header-nav">
                <div className="header-form">
                    <div className="header-form-field">
                        <div className='header-form-select'>All fonts <i class="fa-solid fa-caret-down"></i> </div>
                        <input className='header-form-input' type="text" placeholder='Search over 130,000 fonts... and counting! ' />
                    </div>
                    <button className='header-form-btn'>Search</button>
                </div>
                <div className='header-subscription'>
                    Subscription Plans
                    <i class="fa-solid fa-arrow-right"></i>    
                </div>
                <Menu/>
                <div className='header-right'>
                <div className='log-cart'>
                    <a href="" className="header-logs">Log in / Sign up</a>
                    <a href="" className="header-cart">0 item, $0.00 
                        <i class="fa-solid fa-cart-shopping cart-logo"></i>
                    </a>
                </div>
            </div>

            </div>
        </div>
        <FontCategory/>
    </>
    )
}

export default Header