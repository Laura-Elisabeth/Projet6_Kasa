import styled from 'styled-components';
import { StyledLink } from '../../utils/style/Atoms';
import Banner from '../../components/Banner/banner';
import Card from '../../components/Card/card';
import { accomodationList } from '../../datas/accomodations';
import BannerPic from '../../assets/BannerPic.png';
import './home.scss';


function Home() {
  const title='Chez vous, partout et ailleurs'

  return (
    <div className='home-wrapper'>

      <Banner 
        title={title}
        photo={BannerPic}
      />
      
      <div className='card-container'>
        {accomodationList.map(({id, title, cover}, accomodationNumber) => (
          <StyledLink to={`/accomodation/${accomodationNumber}`}
          >
          <Card  
              key={`${title}-${accomodationList.id}`}
              title={title}
              picture={cover}
          />
          </StyledLink>
          ))}
      </div>  

    </div>
  )
}

export default Home;
