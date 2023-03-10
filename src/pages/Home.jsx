import React from 'react';
import Card from '../components/Card';
import data from '../data/data';

export const Home = () => {
  return (
    <div>
      
      <section>
        <div className="section-left">
          <p>Subscribe To Our Newsletter</p>
        </div>
        <div className="section-right">
          <input
            className="section-input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email..."
          />
          <input
            className="section-input"
            type="submit"
            id="submit"
            defaultValue="Subscribe"
          />
        </div>
      </section>
      <div className="footer-top">
       {<Card/>}
      </div>
    </div>
  )
}
export default Home