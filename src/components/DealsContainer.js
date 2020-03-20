// External
import React, { useMemo } from 'react';
import { Grid } from '@material-ui/core';

// Internal
import GameDeal from './GameDeal';
import { gamesInfos } from '../services/constants';

const DealsContainer = () => {
  const games = useMemo(() => gamesInfos.map(game => (
    <GameDeal
      game={game}
    />
  )), []);

  return(
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      className='deals-container'
    >
      {games}
    </Grid>
  );
};

export default DealsContainer;
