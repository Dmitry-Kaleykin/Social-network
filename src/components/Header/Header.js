import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header (props) {
    return (
    <header className={s.header}>
        <img src="https://www.interjet.com/images/img.jpg" alt="img" />
        <div className={s.login}>
            {props.isAuth 
                ? <div>
                    {props.login}
                    <button onClick={props.logoutThunkCreator}>Logout</button>
                  </div>
                : <NavLink to="/Login">Login</NavLink> }
        </div>
    </header>
    )
}

export default Header;