'use strict'

const MILLISECONDS_IN_A_DAY = (1000 * 3600 * 24)

function subtractDatesInDays(fromDate, toDate, inclusive = true) {
  const millisecondsDiff = toDate.getTime() - fromDate.getTime()
  let daysDiff = millisecondsDiff / MILLISECONDS_IN_A_DAY

  if (inclusive) {
    daysDiff += 1
  }

  return daysDiff
}

module.exports = subtractDatesInDays