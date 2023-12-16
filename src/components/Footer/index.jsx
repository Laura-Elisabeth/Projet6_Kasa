import styled from 'styled-components';
import Logo from '../../assets/logo_footer.png'
import { HomeLogo } from '../Header'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: black;
`

const FooterText = styled.h2`
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
    color: white;
`

function Footer() {
    return (
        <FooterContainer>
            <HomeLogo src={Logo}/>
            <FooterText><span>&#169;</span> 2020 Kasa. All rights reserved</FooterText>
        </FooterContainer>
    )
}

export default Footer