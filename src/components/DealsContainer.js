import React from 'react';
import GameDeal from './GameDeal';
import styles from './DealsContainer.css';
import getScrapedGame from '../services/webscrapping';

const info = getScrapedGame();

const DealsContainer = () => (
  <div className='deals-container'>
    <GameDeal />
  </div>
);

export default DealsContainer;
