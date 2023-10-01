// creating listing to export into the listing container
export default function Listing({pic, country, location, rating, price}) {
    
    return (
        // creating a class to be able to change the listing
        <div className="Listing">
            <section>
            <img src={pic}  width="175px" />
            <h3 id="listingCountry">{country}</h3>
            <h4 id="listingLocation">{location}</h4>
            {/* adding a star to the rating */}
            <h4 id="starRating" > {rating} &#9733;</h4>
            <p id="listingPrice">{price}/night</p>
            </section>
        </div>
    );
}