import { useState } from 'react';
import styled from 'styled-components';
import { accomodationList } from '../../datas/accomodations';


const AboutBlock = styled.div`
    display: flex; 
    margin: 0 0rem 0 0rem;
    justify-content: center; 
`

const AboutList = styled.ul`
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
`

const AboutWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center; 
`

const AboutTitle = styled.li`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    background-color: rgba(255, 96, 96, 1);
    color: rgba(246, 246, 246, 1);
    font-family: Montserrat;
    padding: 0.75rem; 
    border-radius : 10px;
    font-size: 30px;
    font-weight: 400;
`

const AboutDescription = styled.div`
    opacity: ${props => props.value ? '0' : '1'};
    background-color: rgba(246, 246, 246, 1);
    color: rgba(255, 96, 96, 1);
    font-family: Montserrat;
    font-weight: 200;
    font-size: 28px;
    padding: 1rem; 
    border-radius: 10px;

    transform-origin: 100% 0%;
    transform: ${props => props.value ? 'scaleY(0)' : 'scaleY(1)'};
    transition: transform 600ms; 
`

const AboutButton = styled.button`
    border: none; 
    background: none; 
    cursor: pointer; 
    color: white;
    font-size: 25px; 
`

const Box = styled.div`
    & > .fa-chevron-up {
        transform:  ${props => props.value ? 'rotate(360deg)' : 'rotate(180deg)'};
        transition: ${props => props.value ? 'transform 600ms ease-in-out' : ' transform 300ms ease-in-out'};
        }
`

function Collapse({title, description}){
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <AboutBlock>
        <AboutList>
            <AboutWrapper>
                <AboutTitle>
                    {title}
                    <AboutButton
                    onClick={() => {isOpen===false ? setIsOpen(true): setIsOpen(false)}}
                    >
                    <Box class="box" value={isOpen}>
                        <i class="fa-solid fa-chevron-up"></i>
                    </Box>
                    </AboutButton>
                </AboutTitle>
                <AboutDescription
                    value={isOpen} >
                        {description}
                </AboutDescription>   
            </AboutWrapper>
        </AboutList>
        </AboutBlock>
    )
}


export default Collapse