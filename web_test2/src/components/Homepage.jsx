import React from 'react'
import '../App.scss';
import MenuB from './MenuB';

function Homepage() {

  return (
    <div>
      <h1>Jelentkezés</h1>
      <MenuB />
      <div className="input">
        <input type="text" placeholder="Név" ></input>
        <input type="text" placeholder="Email cím" ></input>
        <input type="text" placeholder="Telefonszám" />
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <p>Elolvastam és elfogadom az <u>Adatkezelési Tájékoztatót.</u></p>
      </div>
      <button className="send_btn">Elküld</button>
    </div>
  )
}

export default Homepage
