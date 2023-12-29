import styled from 'styled-components';
import Banner from '../../components/Banner';
import BannerPic2 from '../../assets/AboutBanner.png';
import Collapse from '../../utils/collapse';
import { aboutInformations } from '../../datas/about';

const AboutSection = styled.div`
    display: flex; 
    justify-content: center;  
    flex-direction: column;
    margin: 1rem;
    gap: 1.5rem;
`

function About() {

    return (
        <AboutSection>
            <Banner
            isHomeBanner={false}
            photo={BannerPic2}
            />
            {aboutInformations.map(({title, description}) => (
            <Collapse 
            title={title}
            description={description}/>
            ))}
        </AboutSection>
    )
}

export default About