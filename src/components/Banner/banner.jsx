import './banner.scss';


function Banner({photo,title}) {
    
    return (
        <div className='banner-container'>
            <img src={photo} alt="nature landscape"/>
            <div className='banner-overlay'>
            <h1 className='banner-title'>{title}</h1>
            </div>
        </div>       
    )
}

export default Banner