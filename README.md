## Summary
This app looks for deals of Nintendo Switch 1st party games, like Super Mario Odissey and Legend of Zelda: Breath of the Wild.

## How it works
We access another websites to look for the best price of the listed games. To do so we request the content of these sites and get exactly the part where it displays the price. However we can't directly request the html content from the client (React app) because the browser block CORS ([more here](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)). So we create a NodeJS server which will retrieve the data and give it back, so we can parse it and display the prices.

## How to run
- clone repo
- run `yarn run-app` to run both React client and Node server
- the app will be displayed at `localhost:3000`

## Libs
- [Cheerio](https://github.com/cheeriojs/cheerio) (html parse)
- [Puppeteer](https://github.com/puppeteer/puppeteer) (headless browser)

## References
- [About scraping a SPA](https://medium.com/@andrejsabrickis/scrapping-the-content-of-single-page-application-spa-with-headless-chrome-and-puppeteer-d040025f752b)

## Purpose
Learn a bit of scraping and practice JS/React/Node.
