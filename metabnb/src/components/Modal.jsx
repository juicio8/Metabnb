import React from 'react'

export default function Modal(props) {
 
    return (
       <div className="modal">
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-header__text">Connect Wallet</div>
            <div onClick={props.active}><img className="x" src="/x.svg" alt="cancel modal"/></div>
          </div>
          <div className="modal-body">
            <p className="modal-body__leading">Choose your preferred wallet.</p>
            <a className="currency">
              <div className="currency-container">
                <img src="/metam.svg" alt="meta mask"/>
                <p>Metamask</p>
              </div>
              <div>
                <img className="arrow" src="/arrow.svg"/>
              </div>
            </a>
            <a className="currency">
              <div className="currency-container">
                <img src="/walletconnect.svg" alt="wallet connect"/>
                <p>Wallet connect</p>
              </div>
              <div>
                <img className="arrow" src="/arrow.svg"/>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
}