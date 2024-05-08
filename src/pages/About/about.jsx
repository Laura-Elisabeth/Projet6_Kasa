import Banner from '../../components/Banner/banner';
import BannerPic2 from '../../assets/AboutBanner.png';
import Collapse from '../../utils/collapse/collapse.jsx';
import { aboutInformations } from '../../datas/about';
import './about.scss'


function About() {

    return (
        <div className='about-section'>
            <Banner
            isHomeBanner={false}
            photo={BannerPic2}
            />
            <div className='about-collapse'>
            {aboutInformations.map(({title, description}, index) => (
            <Collapse 
            key={`${title}-${index}`}
            title={title}
            description={description}/>
            ))}
            </div>
        </div>
    )
}

export default About