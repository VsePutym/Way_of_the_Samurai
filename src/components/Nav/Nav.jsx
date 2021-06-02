import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return <nav className= {s.nav}>
        <ul>
            <li>
                <NavLink className= {s.item} activeClassName ={s.active} to ="/profile">Profile</NavLink>
            </li>
            <li>
                <NavLink  className= {s.item} activeClassName ={s.active} to ="/dialogs">Messages</NavLink>
            </li>
            <li>
                <NavLink className= {s.item} activeClassName ={s.active} to ="/news">News</NavLink>
            </li>
            <li>
                <NavLink className={s.item} activeClassName={s.active} to="users">Users</NavLink>
            </li>
            <li>
                <NavLink className= {s.item} activeClassName ={s.active} to="/music">Music</NavLink>
            </li>
            <li>
                <NavLink className= {s.item} activeClassName ={s.active} to="/settings">Settings</NavLink>
            </li>
            <li>
                <NavLink className= {s.item} activeClassName ={s.active} to="/photos">Photos</NavLink>
            </li>
        </ul>
    </nav>
};

export default Nav;