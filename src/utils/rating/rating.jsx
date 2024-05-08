import './rating.scss'

function Rating({ rating }){
    const range = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {range.map((rangeElem) => 
                rating >= rangeElem ? 
                (<span key={rangeElem.toString()}><i className="fa-solid fa-star"></i></span>) :
                <span><i className="fa-regular fa-star"></i></span>
            )}
        </div>
    )
}

export default Rating