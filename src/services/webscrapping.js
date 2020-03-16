import axios from 'axios';

const getScrapedGame = async (gameUrl) => {
  const response = await axios.get(`http://localhost:5000/${gameUrl}`);
  return response.data;
};

export default getScrapedGame;
