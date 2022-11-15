import React from "react"
import Footer from "./Footer"
import data from "./homeData.js"
import star from "./utils"

export default function Home() {
  let grid = data.map(des => 
    <div key={des.id} className="adventure--card">
            <div className="card--poster">
              <img className="adventure--poster" src={`/${des.poster}`}/>
            </div>
            <div className="adventure--flex"><p>{des.name}</p> <p className="price">{des.price}</p></div>
            <div className="adventure--flex"><p>{des.location}</p> <p>{des.stay}</p></div>
            <div className="card--star-container">{star(des.star)}</div>
    </div>)
  return (
    <div>
      <section id="hero" className="section--hero">
        <div className="hero--text">
          <h2 className="hero--text__title">
            Rent a <span className="rougue">Place</span> away from{" "}
            <span className="rougue">Home</span> in the{" "}
            <span className="rougue">Metaverse</span>
          </h2>

          <p className="hero--text__leading">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form className="hero--text__form">
            <input className="form--input" type="text" placeholder="Search for location"/>
            <button className="submit">Search</button>
          </form>
        </div>
        <div className="hero--img">
            <div className="hero--img1">
                <img className="hero--img1__1" src="/header--section1.svg" alt="" />
                <img className="hero--img1__2"src="/header--section2.svg" alt="" />

            </div>
            <div className="hero--img2">
                <img className="hero--img2__1" src="/header--section3.svg" alt="" />
                <img className="hero--img2__2" src="/header--section4.svg" alt="" />

            </div>
        </div>
      </section>
      <div className="section--border">
        <div><img src="/mbtoken.svg"/></div>
        <div><img src="/metamask.svg"/></div>
        <div><img src="/opensea.svg"/></div>
      </div>
      <section className="adventure">
        <h3 className="adventure--heading">Inspiration for your next adventure</h3>
        <div className="adventure--grid">
          {grid}
        </div>
      </section>
      <section className="learn-more">
        <div className="learn-more--writeups">
          <div className="writeups--div">
          <h3 className="writeups--heading">Metabnb NFTs</h3>
          <p className="writeups--leading">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
          <a className="learn-more--button">Learn more</a>
          </div>
        </div>
        <div className="learn-more--img">
          <img src="/nfts.svg" alt="" />
        </div>
        <div></div>
      </section>
    </div>
  );
}
