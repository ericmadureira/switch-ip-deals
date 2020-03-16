import React, { useMemo } from 'react';
import GameDeal from './GameDeal';
import { gamesInfos } from '../services/constants';
import styles from './DealsContainer.css';

const DealsContainer = () => {
  const games = useMemo(() => gamesInfos.map(game => (
    <GameDeal
      game={game}
    />
  )), []);

  return(
    <div className='deals-container'>
      {games}
    </div>
  );
};

export default DealsContainer;
