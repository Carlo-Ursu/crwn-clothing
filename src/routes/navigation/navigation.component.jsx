import { Outlet, Link } from "react-router-dom";
import {Fragment, useContext, useState} from 'react';
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.styles.scss'

import { UserContext } from "../../contexts/user.context";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = () => {
        setCurrentUser(null);
        localStorage.setItem('isLoggedIn', false);
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo />
                </Link>
                {currentUser && <h3 >Welcome back, {localStorage.getItem('currentUsername')}</h3>}
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? <Link className='nav-link' to='/login' onClick={signOutHandler}> SIGN OUT </Link>
                                    : <Link className='nav-link' to='/login'> SIGN IN </Link>
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;