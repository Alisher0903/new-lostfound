import React, {useState} from 'react';
import "./defouldNav.scss"
import { Link } from 'react-router-dom';

export const DefouldNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <section className="navigation">
            <div className="nav-container">
                <div className="brand">
                    <Link to="/">Lost and Found</Link>
                </div>
                <nav>
                    <div className="nav-mobile">
                        <Link id="nav-toggle" href="#!" onClick={toggleNav}><span></span></Link>
                    </div>
                    <ul className={`nav-list ${isNavOpen ? 'active' : ''}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};
