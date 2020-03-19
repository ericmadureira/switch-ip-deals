// External
import React, { useMemo } from 'react';
import { Grid } from '@material-ui/core';

// Internal
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
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      {games}
    </Grid>
  );
};

export default DealsContainer;
