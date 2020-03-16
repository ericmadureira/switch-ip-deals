import express from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer';
import { baseContentUrl } from './services/constants';

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const spaFetch = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('.body-2', { timeout: 10000 });
    const result = await page.evaluate(() => {
      const body = document.querySelector('body').innerHTML;
      return body;
    });
    await browser.close();
    return result;
  } catch (error) {
    console.log(error)
   }
}

app.get('/:gameUrl', async (req, res) => {
  const gameUrl = req.params.gameUrl;
  const htmlBody = await spaFetch(`${baseContentUrl}/${gameUrl}`);
  res.send(htmlBody);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
