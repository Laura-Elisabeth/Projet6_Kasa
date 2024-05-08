import { useState } from 'react';
import styled from 'styled-components';
import './collapse.scss'

const AboutDescription = styled.div`
    height: ${props => props.value ? '100%' : '0px'};
    opacity: ${props => props.value ? '1' : '1'};
    background-color: rgba(246, 246, 246, 1);
    color: rgba(255, 96, 96, 1);
    font-family: Montserrat;
    font-weight: 200;
    font-size: 28px;
    padding: 1rem; 
    border-radius: 10px;

    .description_text {
        transform-origin: ${props => props.value ? '100% 0%' : '0% 100%'};
        transform: ${props => props.value ? 'scaleY(1)' : 'translateY(-100%)'};
        transition: transform 500ms linear; 
        opacity: ${props => props.value ? '1' : '0'}
    }

    transform-origin: ${props => props.value ? '100% 0%' : '100% 0%'};
    transform: ${props => props.value ? 'scaleY(1)' : 'scaleY(0)'};
    transition: transform 500ms linear; 
`

const Box = styled.div`
    & > .fa-chevron-up {
        transform:  ${props => props.value ? 'rotate(180deg)' : 'rotate(360deg)'};
        transition: ${props => props.value ? 'transform 600ms ease-in-out' : ' transform 300ms ease-in-out'};
        }
`

function Collapse({title, description}){
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='about-block'>
        <div className='about-list'>
            <ul className='about-wrapper'>
                <li className='about-title'>
                    {title}
                    <button className='about-button'
                    onClick={() => {isOpen===false ? setIsOpen(true): setIsOpen(false)}}
                    >
                    <Box className="box" value={isOpen}>
                        <i className="fa-solid fa-chevron-up"></i>
                    </Box>
                    </button>
                </li>
                <AboutDescription
                    value={isOpen}>
                        <p className="description_text" value={isOpen}>{description}</p>
                </AboutDescription>   
            </ul>
        </div>
        </div>
    )
}


export default Collapse
