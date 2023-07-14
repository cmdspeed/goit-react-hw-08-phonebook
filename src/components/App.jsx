import { Link, Route, Routes } from 'react-router-dom';

import { ContactsList } from './ContactsList/ContactsList';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';
import { Home } from './Home/Home';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

import { useAuth } from 'hooks';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import css from './App.module.css';
import { UserMenu } from 'UserMenu/UserMenu';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <div className={css.topMenu}>
          <div>
            <Link to="/" className={css.logo}>
              Phonebook
            </Link>
          </div>
          <div>{isLoggedIn ? <UserMenu /> : ''}</div>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsList />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterForm />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginForm />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          ></Route>
        </Routes>
      </>
    )
  );
};
