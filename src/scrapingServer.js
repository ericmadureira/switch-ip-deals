import express from 'express';
import axios from 'axios';
import baseContentUrl from './services/constants';
import cors from 'cors';

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.get('/:gameName', async (req, res) => {
  const gameName = req.params.gameName;
  const url = `${baseContentUrl}/${gameName}`;
  const response = await axios.get(url);
  res.send(response.data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
