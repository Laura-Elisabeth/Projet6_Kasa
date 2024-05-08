import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/defaultPicture.png'
import './card.scss'


function Card({title, picture}) {
    return (
        <div className='card-wrapper'>
            <img src={picture} alt="accomodation cover"/>
            <div className='sub-wrapper'>
            <h2 className='card-title'>
                <div className="title_space">
                    {title}
                </div>
            </h2>
            </div>
        </div>
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