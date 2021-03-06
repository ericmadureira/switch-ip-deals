## Description
This app looks for deals of Nintendo Switch 1st party games, like Super Mario Odissey and Legend of Zelda: Breath of the Wild.

## How it works
We access another websites to look for the best price of the listed games. To do so we request the content of these sites and get exactly the part where it displays the price. However we can't directly request the html content from the client (React app) because the browser block CORS ([more here](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)). So we create a NodeJS server which will retrieve the data and give it back, so we can parse it and display the prices.

## How to run
1. Clone the repository, like `git clone git@github.com:ericmadureira/switch-ip-deals.git`
2. Run `yarn` to install dependencies
3. Run `yarn run-app` to run both React client and Node server
4. The app will be displayed at `http://localhost:3000`

## Libs
- [Cheerio](https://github.com/cheeriojs/cheerio) (html parsing)
- [Puppeteer](https://github.com/puppeteer/puppeteer) (headless browser)

## References
- [About scraping a SPA](https://medium.com/@andrejsabrickis/scrapping-the-content-of-single-page-application-spa-with-headless-chrome-and-puppeteer-d040025f752b)

## Purpose
To learn a bit of scraping, practice JS/React/Node and help my fellow gamers.
