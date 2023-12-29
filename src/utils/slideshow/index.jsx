import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Slide = styled.div`
    display: flex; 
    justify-content: center; 
    margin: 2rem
`

const SlideImage = styled.img` 
    pointer-events: none;
    height: 300px;
    width: 100%;
    object-fit: cover;
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
    bottom: 400px;
    right: 40px;
    cursor: pointer;
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
    bottom: 400px;
    left: 55px;
    cursor: pointer;
`

function Slideshow({pictures}) {
    const [index, setIndex] = useState(0);

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

    return (
        index<1 ? (
            <Slide>
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
            </Slide>
            )
        )
    ) 
}

export default Slideshow