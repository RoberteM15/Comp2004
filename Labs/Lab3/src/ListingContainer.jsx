import Listing from "./Listing";

export default function ListingContainer() {
  return (
    <div className="ListingContainer">
      <Listing
        pic="src/assets/1.jpg"
        country="Indonesia"
        location="Gili Air Hotel"
        rating={4.8}
        price={589}
      />
      <Listing
        pic="src/assets/2.jpg"
        country="Seychelles"
        location="Hilton Resort"
        rating={4.2}
        price={629}
      />
      <Listing
        pic="src/assets/3.jpg"
        country="US Virgin Islands"
        location="Goa Resort"
        rating={3.5}
        price={485}
      />
      <Listing
        pic="src/assets/4.jpg"
        country="Bahamas"
        location="Kuredu Resort"
        rating={4.1}
        price={729}
      />
      <Listing
        pic="src/assets/5.jpg"
        country="Mauritius"
        location="Trou D'eau Douce"
        rating={4.9}
        price={877}
      />
      <Listing
        pic="src/assets/6.jpg"
        country="Bermuda"
        location="Staniel Cay Hotel"
        rating={3.2}
        price={365}
      />
      <Listing
        pic="src/assets/7.jpg"
        country="France"
        location="Trou-Aux-Biches"
        rating={3.3}
        price={499}
      />
    </div>
  );
}
