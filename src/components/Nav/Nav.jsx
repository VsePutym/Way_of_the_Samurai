import s from './Nav.module.css';

const Nav = () => {
    return <nav className= {s.nav}>
        <ul>
            <li>
                <a className= {s.item} href="#s">Profile</a>
            </li>
            <li>
                <a  className= {s.item} href="#s">Messages</a>
            </li>
            <li>
                <a className= {s.item} href="#s">News</a>
            </li>
            <li>
                <a className= {s.item} href="#s">Music</a>
            </li>
            <li>
                <a className= {s.item} href="#s">Settings</a>
            </li>
        </ul>
    </nav>
};

export default Nav;