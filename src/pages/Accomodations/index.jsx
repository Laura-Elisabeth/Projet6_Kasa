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
    margin: 0rem 2rem 0rem 2rem;
`

const AccomodationSubBlock1 = styled.div`
    display: flex;
    flex-direction: column;
`

const AccomodationTitle = styled.h2`
    font-family: Montserrat;
    color: #FF6060;
    font-weight: 200;
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
    background-color: #FF6060;
    border-radius: 10px;
    padding: 8px;
    margin: 1rem 0 1rem 0; 
` 

const AccomodationSubBlock2 = styled.div`
    display: flex;
    flex-direction: column;
`

const AccomodationHost = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    color: #FF6060;
`

const HostName = styled.a`
    font-family: Montserrat;
`

const HostImage = styled.img`
    border-radius: 100px;
    width: 6rem; 
    height: 6rem;
`

const AccomodationRating = styled.div`
    display: flex;
`

const AccomodationBlock2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    margin: 0rem 1rem 0rem 1rem;
`

const Description = styled.div`
    width: 50%;
`

const Equipments = styled.div`
    width: 50%;
`

const EquipmentList = styled.ul`
    list-style: none;
`

function Accomodation() {
    const { accomodationNumber } = useParams();
    
    const AccomodationIndex = Object.keys(accomodationList).reduce(function(total, cur, i) {
        total[i] = cur;
        return total;
      }, {});
    
    console.log(AccomodationIndex)
    console.log(accomodationNumber)
                            
    const LastAccomodation = Object.keys(accomodationList)[Object.keys(accomodationList).length - 1];
    console.log(LastAccomodation);

    const accomodation = accomodationNumber <= LastAccomodation && accomodationNumber >= 0 ? 
        accomodationList.find((accomodation, i) => AccomodationIndex[i] === accomodationNumber) : 
        null 
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
                                    {tag } 
                                </AccomodationTag>      
                            ))}
    
                        </AccomodationTagList> 
                    </AccomodationSubBlock1>   
                    <AccomodationSubBlock2>
                        <AccomodationHost>
                            <HostName>
                                {accomodation.host.name}
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