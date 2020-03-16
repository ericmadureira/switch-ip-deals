import cheerio from 'cheerio';

const parseScrapedData = (scrapeddata) => {
  const $ = cheerio.load(scrapeddata);
  const parsedPrice = $('div.body-1:contains("BRL")')[0].childNodes[0].data;
  return parsedPrice;
};

export default parseScrapedData;
