import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <div className={s.logo}>
            <img src='https://purepng.com/public/uploads/thumbnail//google-stadia-logo-hd4.png' alt='logo'></img>
        </div>
    </header>
};

export default Header;