import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../../utils/style/Atoms';
import Logo from '../../assets/LOGO.png'
import { useState, useEffect } from 'react';

const HeaderContainer = styled.header`
    display: flex; 
    justify-content: space-between;
    margin: 3rem 3rem 0rem 3rem;

    @media only screen and (max-width: 767px) {
        margin: 1rem 2rem 0rem 2rem;
    }
`

const HomeLogoContainer = styled.div`
    display: flex; 
`

export const HomeLogo = styled.img`
    padding: 0.5rem; 
    width: 10rem;
    height: 3.5rem;

    @media only screen and (max-width: 767px) {
        width: 6rem;
        height: 2rem;
    }
`

const NavContainer = styled.nav`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;   
`

const NavOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Montserrat;
    &:hover {
        text-decoration: underline #FF6060;
    };
    & > a {
        font-size: 24px;
        font-weight: 500;
        margin-left: 2rem;
    }

    @media only screen and (max-width: 767px) {
        & > a {
            flex-direction: column;
            font-size: 12px;;
        }
    }
`

export function Header() {
    const [isActive, setIsActive] = useState(false);

    return (
        <HeaderContainer>
            <HomeLogoContainer>
                <HomeLogo src={Logo} />
            </HomeLogoContainer>
            <NavContainer>
                <NavOptions>
                    <StyledLink to='/' $isFullLink>
                        Accueil
                    </StyledLink>
                </NavOptions>
                <NavOptions>
                    <StyledLink to='/about' $isFullLink>
                        À Propos
                    </StyledLink>
                </NavOptions>
            </NavContainer>
        </HeaderContainer>
    )
}

