

function Rating({ rating }){
    const range = [1, 2, 3, 4, 5]

    return (
        <div>
            {range.map((rangeElem) => 
                rating >= rangeElem ? 
                (<span key={rangeElem.toString()}><i class="fa-solid fa-star"></i></span>) :
                <i class="fa-regular fa-star"></i>
            )}
        </div>
    )
}

export default Rating