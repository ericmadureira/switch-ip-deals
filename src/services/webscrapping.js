import axios from 'axios';
import sourceUrl from 'constants';

export const getGameInfo = () => axios.get(`${sourceUrl}/the-legend-of-zelda-breath-of-the-wild`);
