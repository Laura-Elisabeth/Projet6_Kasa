import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/defaultPicture.png'
import styled from 'styled-components'

const CardTitle = styled.h2`
    color: white;
    font-family: Montserrat;
    font-size: 15px;
    text-align: left;
    text-wrap: wrap;
    margin: 1rem;

    &:hover { 
        & > .title_space {
            text-shadow: 1px 1px 2px pink, 0 0 1em grey, 0 0 0.2em pink;
            font-size: 17px;
        }
    }
`
const Div = styled.div`
    display: flex;
    flex-direction: column-reverse;
  
    @media only screen and (max-width: 767px) {
        
    }
`

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background: linear-gradient(180deg, rgba(255, 200, 200, 0) 0%, rgba(255, 96, 96, 1) 100%);
    background-image: url(${props => props.value});
    background-size: cover;
    border-radius: 10px;
    aspect-ratio: 1/1;
    background-color: rgba(255, 96, 96, 1);

    @media only screen and (max-width: 767px) {
        aspect-ratio: 4/3;
        padding: 1rem;
    }
`

function Card({title, picture}) {
    return (
        <CardWrapper value={picture}>
            <Div>
            <CardTitle>
                <div class="title_space">
                    {title}
                </div>
            </CardTitle>
            </Div>
        </CardWrapper>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired, 
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: '',
    picture: DefaultPicture, 
}

export default Card