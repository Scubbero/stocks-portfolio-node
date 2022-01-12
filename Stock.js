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
    const askedPrice = this.#prices.filter(price => price.date = date)
    return askedPrice
  }
}