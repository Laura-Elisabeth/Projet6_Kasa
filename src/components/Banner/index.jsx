import styled from 'styled-components';

const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    width: 100%;
    height: 12rem;
    background-size: 100%;
    border-radius: 25px;

    background-image: url(${props => props.value});
    background-position: 50% 40%;
`

const BannerTitle = styled.h1`
    display: block;
    color: white;
    font-family: Montserrat;
    font-size: 48px;
    line-height: 110px;
    letter-spacing: 0em;
    text-align: center;

    @media only screen and (max-width: 767px) {
        font-size: 20px
    }
`

const BannerOverlay = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    background-position: bottom;
    width: 100%;
    height: 12rem;
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.4);
    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
    };
`

function Banner({photo,title}) {
    return (
        <BannerContainer value={photo}>
            <BannerOverlay>
            <BannerTitle>{title}</BannerTitle>
            </BannerOverlay>
        </BannerContainer>       
    )
}

export default Banner