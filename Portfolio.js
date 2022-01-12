const subtractDatesInDays = require('./subtractDatesInDays')

class Portfolio {
  // An investment is an array of shares(value) for different stocks(key)
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

  annualizedReturn(fromDate, toDate) {
    const startingValue = value(fromDate)
    const endingValue = value(toDate)

    const daysBetween = subtractDatesInDays(new Date(toDate) - new Date(fromDate))
    const annualizedReturn = (endingValue / startingValue) ** (365 / daysBetween) - 1

    return annualizedReturn
  }

  value(date) {
    this.$stockInvestments.reduce((value, investment) => {
      const { stock, shares } = investment

      const stockPrice = stock.price(date)
      const investmentValue = stockPrice * shares

      return value + investmentValue
    }, 0);
  }

}