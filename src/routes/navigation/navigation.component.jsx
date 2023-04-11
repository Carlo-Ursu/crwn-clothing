import {Outlet, Link} from "react-router-dom";
import {Fragment, useContext} from 'react';
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.styles.scss'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {UserContext} from "../../contexts/user.context";
import {CartContext} from "../../contexts/cart.context";


const Navigation = () => {
    const {setCurrentUser, currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    const signOutHandler = () => {
        setCurrentUser(null);
        localStorage.setItem('currentUsername', null);
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo/>
                </Link>
                {currentUser !== null && <h3>Welcome back, {currentUser}</h3>}
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? <Link className='nav-link' to='/login' onClick={signOutHandler}> SIGN OUT </Link>
                            : <Link className='nav-link' to='/login'> SIGN IN </Link>
                    }
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;