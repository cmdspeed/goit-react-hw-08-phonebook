import { styled } from 'styled-components';

import { LoginBtn, RegisterBtn } from 'components/Buttons/Buttons.styled';

const Wrapper = styled.div`
  max-width: 320px;
  margin: 30% auto;
  font-size: 1.5rem;
`;

export const AuthNav = () => {
  return (
    <Wrapper>
      <LoginBtn to="/login">Log In</LoginBtn>
      <RegisterBtn to="/register">Register</RegisterBtn>
    </Wrapper>
  );
};
