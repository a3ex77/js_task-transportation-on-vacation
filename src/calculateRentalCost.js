/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayCost = 40;
  const discountSevenDays = 50;
  const discountThreeDays = 20;

  if (days >= 7) {
    return oneDayCost * days - discountSevenDays;
  } else if (days >= 3 && days < 7) {
    return oneDayCost * days - discountThreeDays;
  } else {
    return oneDayCost * days;
  }
}

module.exports = calculateRentalCost;
