// External
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card } from '@material-ui/core';

// Internal
import getScrapedGame from '../services/webscrapping';
import parseScrapedData from '../services/helpers';
import { gameBuyUrl } from '../services/constants';
import styles from './GameDeal.css';

const GameDeal = ({ game }) => {
  const [gamePrice, setGamePrice] = useState('');
  // later implement loader
  const { name, url, primaryColor } = game;
  const gameBuyLink = gameBuyUrl(url);

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
    <Card className='game-card' style={{ background: primaryColor }}>
      <p>
        <span className='game-title'>{name}</span>
      </p>
      <p>
        <span>Best Price: </span>
        <span>{gamePrice}</span>
      </p>
      <p>
      <Button
        variant='contained'
        color='primary'
        background='black'
        href={gameBuyLink}
        target={'_blank'}
      >
        Buy it
      </Button>
      </p>
    </Card>
  );
};

export default GameDeal;
