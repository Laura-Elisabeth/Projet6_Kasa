import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const ErrorWrapper = styled.div`
    margin: 50px; 
    display: flex; 
    flex-direction: column;
    align-items: center;
`

const ErrorTitle = styled.h1`
    font-family: Montserrat;
    font-weight: 700;
    font-size: 180px;
    color: rgba(255, 96, 96, 1);
    margin: 0;
`

const ErrorSubtitle = styled.h2`
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 300;
    color: rgba(255, 96, 96, 1);
    margin: 0;

    @media only screen and (max-width: 767px) {
      
    }
`

const BackHome = styled.h3`
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 200;
    color: rgba(255, 96, 96, 1);
    text-decoration: underline;
    margin-top: 6rem;
`

function Error() {
    return (
        <ErrorWrapper> 
            <ErrorTitle>404</ErrorTitle>
            <ErrorSubtitle>
                Oups! La page que vous demandez n'existe pas.
            </ErrorSubtitle>
            <StyledLink to='/'>
                <BackHome>
                    Retour à la page d'accueil
                </BackHome>
            </StyledLink>
        </ErrorWrapper>
    )
}

export default Error