import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import logout from '../img/logout.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.userMenu}>
      <p className={css.userWelcome}>
        Welcome, <span className={css.userName}>{user.name}</span>
      </p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.logOutBtn}
      >
        <div className={css.logoutContainer}>
          <img src={logout} alt="logout" className={css.logoutPhoto} />
          logout
        </div>
      </button>
    </div>
  );
};
