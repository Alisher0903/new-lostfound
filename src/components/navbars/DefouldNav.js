import React, { useState } from 'react';
import "./defouldNav.scss";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { byId } from '../api/api';

export const DefouldNav = () => {

    const goLoginPage = () => byId("login").click();

    return (
        <>
            <Link id='login' to="/login"></Link>
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
                                <Icon icon="ri:search-line" width="30" />
                                <h4 onClick={goLoginPage}>Sign in</h4>
                                <h4>Sign up</h4>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
