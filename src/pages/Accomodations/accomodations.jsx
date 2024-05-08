import { useParams } from 'react-router-dom';
import { accomodationList } from '../../datas/accomodations';
import Collapse from '../../utils/collapse/collapse.jsx'
import Slideshow from '../../utils/slideshow/slideshow.jsx';
import Rating from '../../utils/rating/rating.jsx';
import Error from '../Error/error';
import './accomodations.scss';

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
    
    console.log(accomodation)

    if (accomodation === null) {
        return (
            <Error />
        )
    } else {
        return (
            <div className='accomodation-add'>
                <Slideshow         
                    pictures={accomodation.pictures}
                />
                <div className='accomodation-block-1'>    
                    <div className='accomodation-sub-block-1 '>
                        <h2 className='accomodation-title'>
                            {accomodation.title}
                        </h2>
                        <div className='accomodation-location'>
                            {accomodation.location}
                        </div>
                        <div className='accomodation-tag-list'>
                            {(accomodation.tags).map((tag) => (
                                <p className='accomodation-tag' href=" ">
                                    {tag} 
                                </p>      
                            ))}
                        </div> 
                    </div>   
                    <div className='accomodation-sub-block-2'>
                        <div className='accomodation-host'>
                            <div className='host-name'>
                                <div>{accomodation.host.name.split(' ')[0]}</div>
                                <div>{accomodation.host.name.split(' ')[1]}</div>
                            </div>
                            <img className='host-image' 
                                src={accomodation.host.picture} alt=' ' 
                            />
                        </div>
                        <div className='Accomodation-rating'>
                            <Rating 
                                rating={accomodation.rating}
                            />
                        </div>
                    </div>
                </div>
                <div className='accomodation-block-2'>
                    <div className='description'>
                    <Collapse 
                        title='Description'
                        description={accomodation.description}
                    />
                    </div>
                    <div className='equipments'>
                    <Collapse 
                        title='Équipements'
                        description={
                            <ul className='equipment-list'>
                            {(accomodation.equipments).map((equipment) => (
                                <li>
                                    {equipment}      
                                </li>
                            ))}
                            </ul>
                        }
                    />
                    </div>
                </div>
            </div>   
        )
    }
}

export default Accomodation