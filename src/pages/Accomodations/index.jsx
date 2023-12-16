import styled from 'styled-components';
import { AccomodationContext } from "../../utils/context"
import { useContext } from "react"
import { useParams } from 'react-router-dom';
import { accomodationList } from '../../datas/accomodations';


function Accomodation() {
    const { accomodationNumber } = useParams();
    
    const AccomodationIndex = Object.keys(accomodationList).reduce(function(total, cur, i) {
        total[i] = cur;
        return total;
      }, {});
    
    console.log(AccomodationIndex)
    console.log(accomodationNumber)
                            
    const accomodation = accomodationList.find((accomodation, i) => AccomodationIndex[i] === accomodationNumber) 
    console.log(accomodation)
    
    return (

        <div>
            {accomodation.title}
            <img src={accomodation.cover} alt=''/>
            {accomodation.description}
        </div>       
    )
}

export default Accomodation