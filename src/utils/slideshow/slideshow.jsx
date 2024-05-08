import { useState, useEffect } from 'react';
import './slideshow.scss';


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
            <div className='slide'>
            <img className='slide-image'
                src={pictures[index]} 
                alt=' '
            /> 
            </div> 
        )
    } else {
    return (
        index<1 ? (
            <div className='slide'>
            <button className='slide-previous-button' 
                    onClick={() => setIndex(counter-1)}
                >
                    <i className="fa-solid fa-chevron-left"></i>
            </button>
            <img className='slide-image'
                src={pictures[index]} 
                alt=' '
            />    
            <h1 className='image-number'>1/{counter}</h1>
            <button className='slide-next-button' 
                onClick={() => setIndex(index+1)}
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button> 
            </div> ) : (
                index<(counter-1) ? (
            <div className='slide'>
                <button className='slide-previous-button' 
                    onClick={() => setIndex(index-1)}
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <img className='slide-image'
                    src={pictures[index]} 
                    alt=' '
                />
                <h1 className='image-number'>{index+1}/{counter}</h1>
                <button className='slide-next-button' 
                    onClick={() => setIndex(index+1)}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button> 
            </div> ) : (
                <div className='slide'>
                    <button className='slide-previous-button' 
                        onClick={() => setIndex(index-1)}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <img className='slide-image'
                        src={pictures[index]} 
                        alt=' '
                    />
                    <h1 className='image-number'>{counter}/{counter}</h1>
                    <button className='slide-next-button' 
                        onClick={() => setIndex(0)}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button> 
                </div>
            )
        )
    ) 
    }
}

export default Slideshow