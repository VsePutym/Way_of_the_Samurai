import s from './HeaderInfo.module.css';
import {NavLink} from "react-router-dom";

const HeaderInfo = (props) => {
  return (
    <div className={s.test}>
      <button className={s.btn}>Contact us</button>
      <div className={s.loginBlock}>
        {props.isAuth ? <div className={s.LogIn}>{props.login }</div>   : <NavLink to='/login'>Login</NavLink>}
      </div>
    </div>

  );
}

export default HeaderInfo;