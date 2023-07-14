import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { SiginBtn, RegisterBtn } from 'components/Buttons/Buttons.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <section className={css.section}>
      <h2 className={css.title}>Please enter e-mail and password</h2>
      <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
        <input type="email" name="email" placeholder="Adress e-mail" />
        <input type="password" name="password" placeholder="password" />
        <SiginBtn>log in</SiginBtn>
      </form>
      <RegisterBtn className={css.RegisterBtn} to="/register">
        Create new account
      </RegisterBtn>
    </section>
  );
};
