import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  width: 100%;
  ${(props) =>
    props.$isFullLink &&
    `color: #FF6060;
    border-radius: 30px; 
    `
  };
`