'use strict'

class Stock {
  #code
  #prices

  // prices have the form #prices[date] = price
  constructor(code, prices) {
    this.#code = code
    this.#prices = prices
  }

  get code() {
    return this.#code
  }

  price(date) {
    const askedPrice = this.#prices[date]

    if (askedPrice === undefined) {
      throw `There is no data for the date: ${date}`;
    }

    return askedPrice
  }
}

module.exports = Stock