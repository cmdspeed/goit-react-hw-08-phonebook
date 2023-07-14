import css from './Home.module.css';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../../UserMenu/UserMenu';
import { useAuth } from 'hooks';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <h1 className={css.welcome}>
        Welcome, please login to your&nbsp;
        <span className={css.logo}>Phonebook</span>
      </h1>
      <div>{!isLoggedIn ? <AuthNav /> : <UserMenu />}</div>
    </>
  );
};
