import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../../utils/style/Atoms';
import Logo from '../../assets/LOGO.png'

const HeaderContainer = styled.header`
    display: flex; 
    justify-content: space-between;
    width: 100%;
`

const HomeLogoContainer = styled.div`
    display: flex; 
    padding: 20px; 
`

export const HomeLogo = styled.img`
    padding: 1rem; 
`

const NavContainer = styled.nav`
    padding: 30px;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;   
`

const NavOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem;
`

export function Header() {
    return (
        <HeaderContainer>
            <HomeLogoContainer>
                <HomeLogo src={Logo} />
            </HomeLogoContainer>
            <NavContainer>
                <NavOptions>
                <StyledLink to='/' $isFullLink>Accueil</StyledLink>
                <StyledLink to='/about' $isFullLink>À Propos</StyledLink>
                </NavOptions>
            </NavContainer>
        </HeaderContainer>
    )
}

