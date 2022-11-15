import React from "react"
import {Link} from "react-router-dom"
import useDropdown from "./useDropdown"

export default function Navbar(props) {
    const {burger, dropdown} = useDropdown()
    
    return (
        <header className="navbar--container">
            <nav className="navbar">
                <div className="navbar--logo" >
                    <img src="/logo.svg"/>

                </div>
                <div className="navbar--links__container desktop">
                    <ul className="navbar--links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/place-to-stay">Place to Stay</Link></li>
                    <li><Link to="/">NFTs</Link></li>
                    <li><Link to="/">Community</Link></li>
                    </ul>
                </div>
                <div className="navbar--connect">
                    <button onClick={props.active}>Connect Wallet</button>
                </div>
                <div className="mobile">
                    <img className="burger" src="/bars-solid.svg" alt="dropdown" onClick={dropdown} />
                </div>
            </nav>
            {burger && <div className="navbar--links__container mobile">
                    <ul className="navbar--links">
                    <li><Link to="/"><img className="mobile--nav" src="/house-solid.svg" alt="home"/>Home</Link></li>
                    <li><Link to="stay"><img className="mobile--nav" src="/earth-americas-solid.svg" alt="home"/>Place to Stay</Link></li>
                    <li><Link to="#"><img className="mobile--nav" src="/nft-logo.svg" alt="home"/>NFTs</Link></li>
                    <li><Link to="#" className="last-item"><img className="mobile--nav" src="/group-arrows-rotate-solid.svg" alt="home"/>Community</Link></li>
                    </ul>
                </div>}
        </header>
    )

}