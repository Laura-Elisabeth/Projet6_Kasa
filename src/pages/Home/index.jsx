import { useParams } from 'react-router-dom';
import { useContext } from "react"
import styled from 'styled-components';
import { StyledLink } from '../../utils/style/Atoms'
import { AccomodationContext } from '../../utils/context'
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import { accomodationList } from '../../datas/accomodations';
import Accomodation from '../Accomodations';
import BannerPic from '../../assets/background-banner.png';

const HomeWrapper = styled.div`
  display: flex; 
  justify-content: center;  
  flex-direction: column;
  margin: 1rem;
  gap: 1.5rem;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  align-items: center; 
  justify-items: center;
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  gap: 2rem;
  padding: 1rem; 
  border-radius: 25px;
  background-color: rgba(246, 246, 246, 1);
`

function Home() {
  const title='Chez vous, partout et ailleurs'

  return (
    <HomeWrapper>

      <Banner 
        title={title}
        photo={BannerPic}
      />
      
      <CardContainer>
        {accomodationList.map(({id, title, cover}, accomodationNumber) => (
          <StyledLink 
          to={`/accomodation/${accomodationNumber}`}
          >
          <Card  
              key={id}
              title={title}
              picture={cover}
          />
          </StyledLink>
          ))}
      </CardContainer>  

    </HomeWrapper>
  )
}

export default Home;
