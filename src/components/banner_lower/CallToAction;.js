import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import "./banner.css"

const CallToAction = () => {
  return (
    <section className="cta">
      <h1>Download our app and get your laundry done with a tap of a button.</h1>
      <Link to="/contactus" className="cta-btn">Download</Link> {/* Use Link instead of anchor tag */}
    </section>
  );
}

export default CallToAction;
