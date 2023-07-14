import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const LoginBtn = styled(NavLink)`
  color: white;
  background: var(--brandColor);
  display: flex;
  max-width: 320px;
  margin: 10px auto;
  text-decoration: none;
  place-content: center;
  padding: 20px;
  &:hover {
    opacity: 0.8;
  }
`;

export const RegisterBtn = styled(NavLink)`
  color: white;
  background: green;
  display: flex;
  max-width: 320px;
  margin: 10px auto;
  text-decoration: none;
  place-content: center;
  padding: 20px;
  &:hover {
    opacity: 0.8;
  }
`;

export const SiginBtn = styled.button`
  color: white;
  background: var(--brandColor);
  place-content: center;
  &:hover {
    opacity: 0.8;
  }
`;
