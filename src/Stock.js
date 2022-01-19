'use strict'

class Stock {
  #code
  #prices

  constructor(code, prices) {
    this.#code = code
    this.#prices = prices
  }

  get code() {
    return this.#code
  }

  price(date) {
    const priceData = this.#prices[date]

    if (priceData === undefined) {
      throw `There is no data for the date: ${date}`;
    }

    const askedPrice = parseFloat(priceData['4. close'])
    return askedPrice
  }
}

module.exports = Stock