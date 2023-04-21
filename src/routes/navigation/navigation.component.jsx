import {Outlet} from "react-router-dom";
import {Fragment, useContext} from 'react';
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.styles'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {setCurrentUser} from '../../store/user/user.action';
import {CartContext} from "../../contexts/cart.context";

import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";


const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const {isCartOpen} = useContext(CartContext);
    const dispatch = useDispatch();


    const signOutHandler = () => {
        localStorage.removeItem('currentUsername');
        dispatch(setCurrentUser(null));

    }


    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo/>
                </LogoContainer>
                {currentUser !== null &&
                    <h3>Welcome back, {currentUser}</h3>}
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser !== null ?
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