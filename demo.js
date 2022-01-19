const axios = require('axios');
const Portfolio = require('./src/Portfolio')
const Stock = require('./src/Stock')

// Since we need a way to validate the profit method
// This class fetches real data from the alphavantage api
async function getTimeSeries(symbol) {
  return axios.get('https://www.alphavantage.co/query', {
    params: {
      symbol: symbol,
      function: 'TIME_SERIES_DAILY',
      apikey: 'YZIT1VN1UVR92CIL',
      outputsize: 'compact' // last 100 data points
    },
  })
    .then(response => response.data['Time Series (Daily)'])
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const portfolio = new Portfolio()

// we obtain real data for some stocks stocks
stockCodes = ['IBM', 'SBUX']

stockCodes.forEach(stockCode => {
  getTimeSeries(stockCode)
    .then(timeSeries => {
      const stock = new Stock(stockCode, timeSeries)

      // We assign an arbitrary number of shares
      const stockShares = getRandomInt(30)

      portfolio.addStock(stock, stockShares)

      checkResults()
    })
})

function checkResults() {
  const profit = portfolio.profit('2022-01-04', '2022-01-10')
  const annualizedReturn = portfolio.annualizedReturn('2022-01-04', '2022-01-10')

  const useDebugger = 'breakpoint here so the variables above are initialized'
}

