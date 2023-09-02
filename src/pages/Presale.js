import React from 'react';

const Presale = () => (
  <section className=" min-h-[100vh] flex items-center justify-center">
    <h1>Own Your Favorite Club</h1>
    <p>
    Lorem Ipsum dolor set sebrum lit rop prub frim Lorem
    Ipsum dolor set sebrum lit rop prub frim Lorem
    Ipsum dolor set sebrum .
    </p>
    <div>
      <button type="button">WHITEPAPER</button>
    </div>
    <div>
      <h4>Presale Ends In:</h4>
      <div>Count down timmer</div>
      <ul>
        <li>Token Name: Footbucks</li>
        <li>Presale Supply: 100,000,000</li>
        <li>Presale Price: 1FB = 5.00BNB</li>
      </ul>
      <input type="text" placeholder="Enter BNB Amount" />
      <div>
        <span>Presale amount reached</span>
        <div>Progress Bar</div>
      </div>
      <button type="button">BUY FB TOKEN NOW</button>
    </div>
    <div>
      <h4>Referal</h4>
      <input type="text" readOnly placeholder="Referal Link" />
      <h4>No. Of Referal: 14</h4>
      <h5>Refreal Reward: Comming Soon...</h5>
    </div>
  </section>
);

export default Presale;
