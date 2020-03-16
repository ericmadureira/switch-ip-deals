// External
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card } from '@material-ui/core';

// Internal
import getScrapedGame from '../services/webscrapping';
import parseScrapedData from '../services/helpers';
import { baseContentUrl } from '../services/constants';

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
    <Card style={{background: '#3CADD5', padding: '0 15px'}}>
      <p>
        <span>{name}</span>
      </p>
      <p>
        <span>Best Price: </span>
        <span>{gamePrice}</span>
      </p>
      <p>
      <Button variant='contained' color='primary' href={`${baseContentUrl}/${url}`} target={'_blank'}>
        Buy it
      </Button>
      </p>
    </Card>
  );
};

export default GameDeal;
