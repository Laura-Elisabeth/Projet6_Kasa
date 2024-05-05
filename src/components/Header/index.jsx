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

    & > a:hover, a:focus, a:active {
        color: #FF6060;
        text-decoration: none;
    }
    & > a {
        text-decoration: none;
        transition: color 0.1s, background-color 0.1s;
    }
    & > a {
        position: relative;
        display: block;
        padding: 16px 0;
        margin: 0 12px;
        line-height: 8px;
        transition: color 0.1s,background-color 0.1s,padding 0.2s ease-in;
        color: #FF6060;
    }
    & > a::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 2px;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: #FF6060;
        transform-origin: right top;
        transform: scale(0, 1);
        transition: color 0.1s,transform 0.2s ease-out;
    }
    & > a:active::before {
        background-color: #FF6060;
    }
    & > a:hover::before, a:focus::before {
        transform-origin: left top;
        transform: scale(1, 1);
    }

    @media only screen and (max-width: 767px) {
        & > a {
            flex-direction: column;
            font-size: 12px;;
        }
    }
`

export function Header() {

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

