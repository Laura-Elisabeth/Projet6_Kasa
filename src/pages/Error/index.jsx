import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const ErrorWrapper = styled.div`
    margin: 30px; 
    display: flex; 
    flex-direction: column;
    align-items: center;
`

const ErrorTitle = styled.h1`
    font-family: Montserrat;
    font-weight: 700;
    font-size: 100px;
    color: rgba(255, 96, 96, 1);
`

const ErrorSubtitle = styled.h2`
    font-family: Montserrat;
    font-weight: 300;
    color: rgba(255, 96, 96, 1);
`

function Error() {
    return (
        <ErrorWrapper> 
            <ErrorTitle>404</ErrorTitle>
            <ErrorSubtitle>
                Oups! La page que vous demandez n'existe pas.
            </ErrorSubtitle>
            <StyledLink to='/'>
                Retour à la page d'accueil
            </StyledLink>
        </ErrorWrapper>
    )
}

export default Error