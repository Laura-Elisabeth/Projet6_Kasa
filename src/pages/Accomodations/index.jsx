import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { accomodationList } from '../../datas/accomodations';
import Collapse from '../../utils/collapse'
import Slideshow from '../../utils/slideshow';
import Rating from '../../utils/rating';
import Error from '../Error';

const AccomodationAdd = styled.div`
    display: flex; 
    flex-direction: column;
    margin-bottom: 1rem;
`
const AccomodationBlock1 = styled.div`
    display: flex;
    justify-content: space-between; 
    margin: 0rem 2rem 1.5rem 2rem;
    @media only screen and (max-width: 767px) {
        flex-direction: column;   
    }
`

const AccomodationSubBlock1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media only screen and (max-width: 767px) {
        margin-bottom: 1rem;
    }
`

const AccomodationTitle = styled.h2`
    font-family: Montserrat;
    color: #FF6060;
    font-weight: 500;
    font-size: 40px;
    margin: 0 0 0rem 0;
`

const AccomodationLocation = styled.div`
    font-family: Montserrat;
    color: #FF6060;
    font-weight: 200;
`

const AccomodationTagList = styled.div`
    display: flex;
    font-family: Montserrat;
    color: white;
    font-weight: 200;
    gap: 1rem; 
`

const AccomodationTag = styled.a`
    font-size: 13px;
    font-weight: 500;
    background-color: #FF6060;
    border-radius: 15px;
    padding: 8px 25px 8px 25px;
    margin: 1rem 0 0rem 0; 
` 

const AccomodationSubBlock2 = styled.div`
    display: flex;
    flex-direction: column;
    position: right;
    gap: 1rem;
    height: 100%;

    @media only screen and (max-width: 767px) {
        flex-direction: row-reverse;  
        justify-content: space-between; 

    }
`

const AccomodationHost = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #FF6060;
`

const HostName = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Montserrat;
    font-weight: 200;
    margin: 0.75rem;
`

const HostImage = styled.img`
    border-radius: 100px;
    width: 5rem; 
    height: 5rem;
`

const AccomodationRating = styled.div`
    display: flex;
    flex-direction: row-reverse;
    font-size: 30px;
    height: fit-content;
`

const AccomodationBlock2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    margin: 0rem 1rem 0rem 1rem;

    @media only screen and (max-width: 767px) {
        flex-direction: column;   
    }
`

const Description = styled.div`
    width: 50%;

    @media only screen and (max-width: 767px) {
        width: 100%; 
    }
`

const Equipments = styled.div`
    width: 50%;

    @media only screen and (max-width: 767px) {
        width: 100%; 
    }
`

const EquipmentList = styled.ul`
    list-style: none;
`

function Accomodation() {
    const { accomodationNumber } = useParams();
    
    console.log(accomodationNumber)

    const AccomodationIndex = Object.keys(accomodationList).reduce(function(total, cur, i) {
        total[i] = cur;
        return total;
      }, {});
    
    console.log(AccomodationIndex)
    console.log(accomodationNumber)
                            
    const LastAccomodation = accomodationList.length - 1;
    console.log(LastAccomodation);

    const accomodation = ((accomodationNumber <= LastAccomodation) && (accomodationNumber >= 0)) ? (accomodationList.find((accomodation, i) => AccomodationIndex[i] === accomodationNumber)) : null
        
    /* const biggerThan0 = accomodationNumber >= 0;
    const smallerThanLast = accomodationNumber <= LastAccomodation;
    const rightRange = biggerThan0 && smallerThanLast
    const displayAccomodation = accomodationList.find((accomodation, i) => AccomodationIndex[i] === accomodationNumber);
    const accomodation = rightRange ? displayAccomodation : null */

    /* console.log(biggerThan0)
    console.log(smallerThanLast) */
    console.log(accomodation)

    if (accomodation === null) {
        return (
            <Error />
        )
    } else {
        return (
            <AccomodationAdd>
                <Slideshow         
                    pictures={accomodation.pictures}
                />
                <AccomodationBlock1>    
                    <AccomodationSubBlock1>
                        <AccomodationTitle>
                            {accomodation.title}
                        </AccomodationTitle>
                        <AccomodationLocation>
                            {accomodation.location}
                        </AccomodationLocation>
                        <AccomodationTagList>
                            {(accomodation.tags).map((tag) => (
                                <AccomodationTag>
                                    {tag} 
                                </AccomodationTag>      
                            ))}
    
                        </AccomodationTagList> 
                    </AccomodationSubBlock1>   
                    <AccomodationSubBlock2>
                        <AccomodationHost>
                            <HostName>
                                <div>{accomodation.host.name.split(' ')[0]}</div>
                                <div>{accomodation.host.name.split(' ')[1]}</div>
                            </HostName>
                            <HostImage 
                                src={accomodation.host.picture} alt=' ' 
                            />
                        </AccomodationHost>
                        <AccomodationRating>
                            <Rating 
                                rating={accomodation.rating}
                            />
                        </AccomodationRating>
                    </AccomodationSubBlock2>
                </AccomodationBlock1>
                <AccomodationBlock2>
                    <Description>
                    <Collapse 
                        title='Description'
                        description={accomodation.description}
                    />
                    </Description>
                    <Equipments>
                    <Collapse 
                        title='Équipements'
                        description={
                            <EquipmentList>
                            {(accomodation.equipments).map((equipment) => (
                                <li>
                                    {equipment}      
                                </li>
                            ))}
                            </EquipmentList>
                        }
                    />
                    </Equipments>
                </AccomodationBlock2>
            </AccomodationAdd>   
        )
    }
}

export default Accomodation