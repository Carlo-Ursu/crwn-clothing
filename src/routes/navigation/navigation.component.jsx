import {Outlet} from "react-router-dom";
import {Fragment, useContext} from 'react';
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.styles'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {UserContext} from "../../contexts/user.context";
import {CartContext} from "../../contexts/cart.context";

import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles";


const Navigation = () => {
    const {setCurrentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    const signOutHandler = () => {
        localStorage.removeItem('currentUsername');
        setCurrentUser(null);
    }


    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo/>
                </LogoContainer>
                {localStorage.getItem('currentUsername') !== null &&
                    <h3>Welcome back, {localStorage.getItem('currentUsername')}</h3>}
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        localStorage.getItem('currentUsername') !== null ?
                            <NavLink to='/login' onClick={signOutHandler}> SIGN OUT </NavLink>
                            : <NavLink to='/login'> SIGN IN </NavLink>
                    }
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;