const Stock = require('../src/Stock')
const Portfolio = require('../src/Portfolio')

describe('An object of the Portfolio class', () => {

  // data from https://finance.yahoo.com/quote/AAPL/history
  const stockCode = 'AAPL'
  const prices = {
    '2021-01-25': 142.04,
    '2022-01-24': 157.38,
  }
  const stock = new Stock(stockCode, prices)

  const portfolio = new Portfolio()
  portfolio.addStock(stock, 1)

  test('has a profit method', () => {
    expect(portfolio).toHaveProperty('profit')
  })

  test('correctly returns its profit for a given period', () => {
    const profit = prices['2022-01-24'] - prices['2021-01-25']
    expect(portfolio.profit('2021-01-25', '2022-01-24')).toBeCloseTo(profit, 5);
  })

  test('has an annualized return method', () => {
    expect(portfolio).toHaveProperty('annualizedReturn')
  })

  test('correctly returns its annualized return for a given period', () => {
    const startingValue = prices['2021-01-25']
    const endingValue = prices['2022-01-24']
    const years = 1
    const expectedResult = (1 + (endingValue - startingValue) / startingValue) ** (1 / years) - 1
    expect(portfolio.annualizedReturn('2021-01-25', '2022-01-24')).toBeCloseTo(expectedResult, 5);
  })
});