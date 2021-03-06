'use strict'

const subtractDatesInDays = require('./subtractDatesInDays')
class Portfolio {
  // An investment is an array that contains a stock and a number of shares for that stock
  // The array is filled with the following object { stock, shares }
  #stockInvestments

  constructor() {
    this.#stockInvestments = []
  }

  addStock(stock, shares) {
    this.#stockInvestments.push({ stock, shares })
  }

  profit(fromDate, toDate) {
    const startingValue = this.value(fromDate)
    const endingValue = this.value(toDate)

    const profit = endingValue - startingValue
    return profit
  }

  // About annualized return https://www.indeed.com/career-advice/career-development/how-to-calculate-annualized-return
  annualizedReturn(fromDate, toDate) {
    const startingValue = this.value(fromDate)
    const endingValue = this.value(toDate)

    const daysBetween = subtractDatesInDays(new Date(fromDate), new Date(toDate))
    const annualizedReturn = (1 + (endingValue - startingValue) / startingValue) ** (365 / daysBetween) - 1

    return annualizedReturn
  }

  // sum of the portfolio closing prices for the day
  value(date) {
    return this.#stockInvestments.reduce((value, investment) => {
      const { stock, shares } = investment

      const stockPrice = stock.price(date)
      const investmentValue = stockPrice * shares

      return value + investmentValue
    }, 0);
  }
}

module.exports = Portfolio