import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#fff' : 'transparent')};
`;

export const NavLinks = styled(LinkScroll)`
  color: #4973b9;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 0.8rem;
  font-family: futura;

  &.active {
    width: fit-content;
    height: 60px;
    -webkit-transform: skew(20deg);
    -ms-transform: skew(20deg);
    transform: skew(-15deg);
    background: #fad111;
  }
`;
