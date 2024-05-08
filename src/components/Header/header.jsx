import React from 'react';
import { StyledLink } from '../../utils/style/Atoms';
import Logo from '../../assets/LOGO.png';
import styled from 'styled-components';
import './header.scss';

export const HomeLogo = styled.img`
    padding: 0.5rem; 
    width: 10rem;
    height: 3.5rem;

    @media only screen and (max-width: 767px) {
        width: 6rem;
        height: 2rem;
    }
`

export function Header() {

    return (
        <div className='header-container'>
            <div className='home-logo-container'>
                <HomeLogo src={Logo} />
            </div>
            <nav className='nav-container'>
                <div className='nav-options'>
                    <StyledLink to='/' $isFullLink>
                            Accueil
                    </StyledLink>
                </div>
                <div className='nav-options'>
                    <StyledLink to='/about' $isFullLink>
                            À Propos
                    </StyledLink>
                </div>
            </nav>
        </div>
    )
}

