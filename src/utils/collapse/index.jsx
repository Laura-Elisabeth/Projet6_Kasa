import { useState } from 'react';
import styled from 'styled-components';
import { accomodationList } from '../../datas/accomodations';


const AboutBlock = styled.div`
    display: flex; 
    margin: 0 1rem 0 1rem;
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
    font-weight: 200;
`

const AboutDescription = styled.div`
    background-color: rgba(246, 246, 246, 1);
    color: rgba(255, 96, 96, 1);
    font-family: Montserrat;
    font-weight: 200;
    font-size: 35px;
    padding: 1rem; 
    border-radius : 10px;
`

const AboutButton = styled.button`
    border: none; 
    background : none; 
    cursor: pointer; 
    color: white;
`

function Collapse({title, description}){
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <AboutBlock>
        <AboutList>
        {isOpen ? (
            <AboutWrapper>
                <AboutTitle>
                    {title}
                    <AboutButton
                    onClick={() => setIsOpen(false)}
                    >
                    <i class="fa-solid fa-chevron-up"></i>
                    </AboutButton>
                </AboutTitle>
                <AboutDescription>
                    {description}
                </AboutDescription>
            </AboutWrapper>
        ) : (
            <AboutWrapper>
                <AboutTitle>
                    {title}
                    <AboutButton
                    onClick={() => setIsOpen(true)}
                    >
                    <i class="fa-solid fa-chevron-down"></i>
                    </AboutButton>
                </AboutTitle>
            </AboutWrapper>
        )}
        </AboutList>
        </AboutBlock>
    )
}

export default Collapse