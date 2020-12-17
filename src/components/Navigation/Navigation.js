import React from 'react';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
//import Friends from './Friends/Friends';

function Navigation () {
    return (
                <nav className={s.navigation}>
                    <div className={s.item}>
                        <NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/Messages" activeClassName={s.active}>Messages</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/News" activeClassName={s.active}>News</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/Users" activeClassName={s.active}>Users</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/Friends" activeClassName={s.active}>Friends</NavLink>
                    </div>
                </nav>   
    )
}

export default Navigation;