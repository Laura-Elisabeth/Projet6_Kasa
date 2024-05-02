import styled from 'styled-components';
import Banner from '../../components/Banner';
import BannerPic2 from '../../assets/AboutBanner.png';
import Collapse from '../../utils/collapse';
import { aboutInformations } from '../../datas/about';

const AboutSection = styled.div`
    display: flex; 
    justify-content: center;  
    flex-direction: column;
    gap: 1.5rem;
    margin: 1rem 2rem 2rem 2rem;
`

const AboutCollapse = styled.div`
    display: flex; 
    justify-content: center;  
    flex-direction: column;
    padding: 2rem 7rem 2rem 7rem;
    gap: 1.5rem;

    @media only screen and (max-width: 767px) {
        padding: 0rem; 
    }
`

function About() {

    return (
        <AboutSection>
            <Banner
            isHomeBanner={false}
            photo={BannerPic2}
            />
            <AboutCollapse>
            {aboutInformations.map(({title, description}) => (
            <Collapse 
            title={title}
            description={description}/>
            ))}
            </AboutCollapse>
        </AboutSection>
    )
}

export default About