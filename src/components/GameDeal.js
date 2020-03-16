import React, { useCallback, useEffect, useState } from 'react';
import getScrapedGame from '../services/webscrapping';
import parseScrapedData from '../services/helpers';
import styles from './GameDeal.css';

const GameDeal = ({ game }) => {
  const [gamePrice, setGamePrice] = useState('');
  // later implement loader
  const { name, url } = game;

  const fetchData = useCallback(async () => {
    const scrapedHtmlBody = await getScrapedGame(url);
    return scrapedHtmlBody;
  }, [url]);

  useEffect(() => {
    fetchData()
    .then(data => {
      setGamePrice(parseScrapedData(data));
    })
    .catch(e => console.log('PROMISE ERROR: ', e));
  }, [fetchData, gamePrice]);

  return(
    <div className='game-deal-container'>
      <div className='game-deal'>
        <p>
          <span>{name}</span>
        </p>
        <p>
          <span>Best Price: </span>
          <span>{gamePrice}</span>
        </p>
        <p>
          <span>Where to buy it: </span>
          <span><a href={url}>Link</a></span>
        </p>
      </div>
    </div>
  );
};

export default GameDeal;
