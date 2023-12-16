import styled from 'styled-components';
import BannerPic from '../../assets/background-banner.png';

const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    background-image: url(${BannerPic});
    background-position: bottom;
    width: 100%;
    height: 10rem;
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 25px;
    background-color: rgba(246, 246, 246, 1);
    mix-blend-mode: darken;
`

const BannerTitle = styled.h1`
    color: white;
    font-family: Montserrat;
    font-size: 48px;
    line-height: 68px;
    letter-spacing: 0em;
    text-align: left;
`


function Banner() {
    return (
        <BannerContainer>
            <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
        </BannerContainer>       
    )
}

export default Banner