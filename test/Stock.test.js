const Stock = require('../src/Stock')


describe('An object of the Stock class', () => {

  // data from https://finance.yahoo.com/quote/AAPL/history
  const stockCode = 'AAPL'
  const prices = {
    '2021-01-25': 142.04,
    '2022-01-24': 157.38,
  }
  const stock = new Stock(stockCode, prices)

  test('has a price method', () => {
    expect(stock).toHaveProperty('price')
  })

  test('correctly returns its price on a given date', () => {
    expect(stock.price('2022-01-24')).toBeCloseTo(157.38, 5);
  })
});