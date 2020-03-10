import axios from 'axios';

const getScrapedGame = async () => {
  const gameName = 'the-legend-of-zelda-breath-of-the-wild';
  const response = await axios.get(`http://localhost:5000/${gameName}`);
  const { data } = response;
  return data;
};

export default getScrapedGame;
