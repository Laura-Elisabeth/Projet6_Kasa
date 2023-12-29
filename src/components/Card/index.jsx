import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/defaultPicture.png'
import styled from 'styled-components'

const CardTitle = styled.h2`
    color: white;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 70%;
    align-self: left;
    position: absolute; 
    line-height: 430px;
    margin-left: 1rem;
`

const CardImage = styled.img`
    height: 100%;
    width: 100%;
    align-self: center; 
    border-radius: 10px;
    aspect-ratio: 3/2;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
    padding: 13px;
    background: linear-gradient(180deg, rgba(255, 200, 200, 0) 0%, rgba(255, 96, 96, 1) 100%);
    border-radius: 10px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    };
`

function Card({title, picture}) {
    return (
        <CardWrapper>
            <CardImage src={picture} alt="accomodation" />
            <CardTitle>{title}</CardTitle>
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