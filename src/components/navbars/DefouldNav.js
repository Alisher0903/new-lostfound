import React, { useState } from 'react';
import "./defouldNav.scss";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { byId } from '../api/api';

export const DefouldNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    const goLoginPage = () => byId("login").click();
    const goRegisterPage = () => byId("register").click();

    return (
        <>
            <Link id='login' to="/login"></Link>
            <Link id='register' to="/register"></Link>
            <header>
                <nav className='fixed-top'>
                    <div className='mobile_nav p-3 d-md-none'>
                        <div className="mobilenav_box">
                            <div className="nav_brand">
                                <Link to="/">
                                    <span>Lost</span>
                                    <span>and</span>
                                    <span>Found</span>
                                </Link>
                            </div>
                            <div className="burger-menu" onClick={toggleNavbar}>
                                {isOpen ? '✕' : '☰'}
                            </div>
                        </div>
                        <div className="mobilenav_heddin">
                            <div className={isOpen ? 'nav-links-mobile show_mobile' : 'nav-links-mobile'}>
                                <ul>
                                    <li>
                                        <h4 onClick={goLoginPage}>Sign in</h4>
                                    </li>
                                    <li>
                                        <h4 onClick={goRegisterPage}>Sign up</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='destop_nav d-none d-md-inline'>
                        <div className='container py-4'>
                            <div className='nav_brand'>
                                <Link to="/">
                                    <span>Lost</span>
                                    <span>and</span>
                                    <span>Found</span>
                                </Link>
                            </div>
                            <div className='nav_search'>
                                <Icon icon="ri:search-line" width="30" />
                                <h4 onClick={goLoginPage}>Sign in</h4>
                                <h4 onClick={goRegisterPage}>Sign up</h4>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
