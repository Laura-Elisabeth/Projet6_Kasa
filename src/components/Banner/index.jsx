import styled from 'styled-components';

const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    background-position: bottom;
    width: 100%;
    height: 10rem;
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 25px;
    background-color: rgba(246, 246, 246, 1);
    mix-blend-mode: darken;

    display: inline-block;
    overflow: hidden;
    position: relative;
`

const BannerTitle = styled.h1`
    display: block;
    color: white;
    font-family: Montserrat;
    font-size: 48px;
    line-height: 68px;
    letter-spacing: 0em;
    text-align: center;
`

const BannerImage = styled.img`
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
`


function Banner({photo,title}) {
    return (
        <BannerContainer>
            <BannerImage src={photo} alt='Banner'/>
            <BannerTitle>{title}</BannerTitle>
        </BannerContainer>       
    )
}

export default Banner