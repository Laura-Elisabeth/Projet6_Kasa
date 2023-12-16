import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  margin: 4px;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: #FF6060;
    border-radius: 30px; 
  `};
  &:hover {
    text-decoration: underline;
  }
`