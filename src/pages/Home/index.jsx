import { useParams } from 'react-router-dom';
import { useContext } from "react"
import styled from 'styled-components';
import GlobalStyle from '../../utils/style/GlobalStyle';
import { StyledLink } from '../../utils/style/Atoms'
import { AccomodationContext } from '../../utils/context'
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import { accomodationList } from '../../datas/accomodations';
import Accomodation from '../Accomodations';
import BannerPic from '../../assets/BannerPic.png';

const HomeWrapper = styled.div`
  display: flex; 
  justify-content: center;  
  flex-direction: column;
  gap: 1.5rem;
  margin: 3rem;

  @media only screen and (max-width: 767px) {
    margin: 1.5rem 2rem 2rem 2rem;
  }
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
  border-radius: 25px;
  background-color: rgba(246, 246, 246, 1);

  margin-top: 1rem;
  padding: 1rem;

  height: 1000px;
  overflow: scroll;

  @media only screen and (max-width: 767px) {
    background-color: rgba(246, 246, 246, 0);
    grid-template-columns: none;
    padding: 0rem;
  }
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
          <StyledLink to={`/accomodation/${accomodationNumber}`}
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
