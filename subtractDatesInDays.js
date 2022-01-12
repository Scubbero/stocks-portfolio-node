const MILLISECONDS_IN_A_DAY = (1000 * 3600 * 24)

function subtractDatesInDays(fromDate, toDate) {
  const millisecondsDiff = toDate.getTime() - fromDate.getTime();
  const daysDiff = millisecondsDiff / MILLISECONDS_IN_A_DAY;

  return daysDiff
}

module.exports = subtractDatesInDays