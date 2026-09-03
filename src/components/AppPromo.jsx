import React from 'react';
import { handleAppDownload, PLAYSTORE_LINK, APPSTORE_LINK } from '../utils/appLinks';
import playstoreIcon from '../assets/images/app-promo/playstore.webp';

export default function AppPromo() {
  return (
    <section className="app-promo-section" id="download-app">
      <div className="container">
        <div className="app-promo-content">
          <h2>Download the ReShine App</h2>
          <p>Book quick car & bike wash services right at your doorstep with a few taps.</p>
          <div className="app-promo-buttons">
            <a href={PLAYSTORE_LINK} target="_blank" rel="noopener noreferrer" onClick={handleAppDownload} className="store-btn">
              <img src={playstoreIcon} alt="Google Play" />
              <span>Get on Google Play</span>
            </a>
            <a href={APPSTORE_LINK} target="_blank" rel="noopener noreferrer" className="store-btn">
              <span>App Store</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
