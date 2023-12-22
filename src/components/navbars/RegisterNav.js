import React from 'react';
import { Link } from 'react-router-dom';
import { byId } from '../api/api';

export const RegisterNav = () => {

    const goLoginPage = () => byId("login").click();
    // const goRegisterPage = () => byId("register").click();

    return (
        <>
            <Link id='login' to="/login"></Link>
            {/* <Link id='register' to="/register"></Link> */}
            <header>
                <nav className='fixed-top'>
                    <div className='mobile_nav'></div>
                    <div className='destop_nav'>
                        <div className='container'>
                            <div className='nav_brand'>
                                <Link to="/">
                                    <span>Lost</span>
                                    <span>and</span>
                                    <span>Found</span>
                                </Link>
                            </div>
                            <div className='nav_search'>
                                {/* <Icon icon="ri:search-line" width="30" /> */}
                                <h4 onClick={goLoginPage}>Sign in</h4>
                                {/* <h4 onClick={goRegisterPage}>Sign up</h4> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
