import { StyledLink } from '../../utils/style/Atoms'
import './error.scss'


function Error() {
    return (
        <div className='error-wrapper'> 
            <h1 className='error-title'>404</h1>
            <h2 className='error-subtitle'>
                Oups! La page que vous demandez n'existe pas.
            </h2>
            <StyledLink to='/' className='back-home'>
                <h3>
                    Retour à la page d'accueil
                </h3>
            </StyledLink>
        </div>
    )
}

export default Error