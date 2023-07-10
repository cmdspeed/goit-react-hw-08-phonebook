import { Route, Routes } from 'react-router-dom';
import { ContactsList } from './ContactsList/ContactsList';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';
import { Home } from './Home/Home';
import { AuthNav } from './AuthNav/AuthNav';

export const App = () => {
  return (
    <>
      <AuthNav />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/contacts" Component={ContactsList}></Route>
        <Route path="/register" Component={RegisterForm}></Route>
        <Route path="/login" Component={LoginForm}></Route>
      </Routes>
    </>
  );
};
