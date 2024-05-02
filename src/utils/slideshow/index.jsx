import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Slide = styled.div`
    display: flex; 
    justify-content: center; 
    margin: 2rem;
    border-radius: 25px;
    box-shadow: 2px -2px 2px rgba(0.1, 0.1, 0.1, 0.1);
`

const SlideImage = styled.img` 
    pointer-events: none;
    height: 420px;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
`

const SlideNextButton = styled.button`
    display: flex;
    justify-content: flex-end;
    color: white;
    text-decoration: none;
    background: none;
    border: none;
    font-size: 48px;
    line-height: 300px;
    position: absolute;
    bottom: 360px;
    right: 40px;
    cursor: pointer;

    @media only screen and (max-width: 767px) {
        bottom: 420px;
    }
`

const SlidePreviousButton = styled.button`
    display: flex;
    justify-content: flex-end;
    color: white;
    text-decoration: none;
    background: none;
    border: none;
    font-size: 48px;
    line-height: 300px;
    position: absolute;
    bottom: 360px;
    left: 45px;
    cursor: pointer;

    @media only screen and (max-width: 767px) {
        bottom: 420px;
    }
`

function Slideshow({pictures}) {
    const [index, setIndex] = useState(0);
    
    console.log(pictures)

    const counter = pictures.reduce((n, picture) => {
        if (picture){
            return n+1
        }

        return n
    }, 0);

    console.log(counter)

    useEffect(() => {
        console.log(pictures[index]);
    }, [index]);

    if (counter === 1){
        return (
            <Slide>
            <SlideImage
                src={pictures[index]} 
                alt=' '
            /> 
            </Slide> 
        )
    } else {
    return (
        index<1 ? (
            <Slide>
            <SlidePreviousButton 
                    onClick={() => setIndex(counter-1)}
                >
                    <i class="fa-solid fa-chevron-left"></i>
            </SlidePreviousButton>
            <SlideImage
                src={pictures[index]} 
                alt=' '
            />    
            <SlideNextButton 
                onClick={() => setIndex(index+1)}
            >
                <i class="fa-solid fa-chevron-right"></i>
            </SlideNextButton> 
            </Slide> ) : (
                index<(counter-1) ? (
            <Slide>
                <SlidePreviousButton 
                    onClick={() => setIndex(index-1)}
                >
                    <i class="fa-solid fa-chevron-left"></i>
                </SlidePreviousButton>
                <SlideImage
                    src={pictures[index]} 
                    alt=' '
                />
                <SlideNextButton 
                    onClick={() => setIndex(index+1)}
                >
                    <i class="fa-solid fa-chevron-right"></i>
                </SlideNextButton> 
            </Slide> ) : (
                <Slide>
                <SlidePreviousButton 
                    onClick={() => setIndex(index-1)}
                >
                    <i class="fa-solid fa-chevron-left"></i>
                </SlidePreviousButton>
                <SlideImage
                    src={pictures[index]} 
                    alt=' '
                />
                <SlideNextButton 
                    onClick={() => setIndex(0)}
                >
                    <i class="fa-solid fa-chevron-right"></i>
                </SlideNextButton> 
            </Slide>
            )
        )
    ) 
    }
}

export default Slideshow