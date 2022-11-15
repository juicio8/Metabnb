import React from "react"
import stayData from "./placeStay"
import star from "./utils"

export default function Stay() {
  let stay = stayData.map((des) => (
    <div key={des.id} className="adventure--card">
      <div className="card--poster">
        <img className="adventure--poster" src={`/${des.poster}`} />
      </div>
      <div className="adventure--flex">
        <p>{des.name}</p> <p className="price">{des.price}</p>
      </div>
      <div className="adventure--flex">
        <p>{des.location}</p> <p>{des.stay}</p>
      </div>
      <div className="card--star-container">{star(des.star)}</div>
    </div>
  ));
  return (
    <div>
      <section className="section--place-to-stay">
        <div className="place-to-stay">
          <a>Resturant</a>
          <a>Cottage</a>
          <a>Castle</a>
          <a>fantasy city</a>
          <a>beach</a>
          <a>carbins</a>
          <a>Off-grid</a>
          <a>Farm</a>
          <a className="location"><p>Location</p> <img className="location-img" src="/setting-5.svg"/></a>
        </div>
      </section>
      <section className="adventure place-to-stay-grid">
        <div className="adventure--grid">{stay}</div>
        </section>
    </div>
  );
}
