import './styles.css'

function Rating({ rating }){
    const range = [1, 2, 3, 4, 5]

    return (
        <div class="rating">
            {range.map((rangeElem) => 
                rating >= rangeElem ? 
                (<span key={rangeElem.toString()}><i class="fa-solid fa-star"></i></span>) :
                <span><i class="fa-regular fa-star"></i></span>
            )}
        </div>
    )
}

export default Rating