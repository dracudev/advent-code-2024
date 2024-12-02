function prepareGifts(gifts) {
  //Delete duplicates
  const newGifts = [...new Set(gifts)];

  //Ascending order
  newGifts.sort((a, b) => a - b);

  return newGifts;
}

// Example
const giftList = [5, 3, 8, 3, 1, 5, 7, 2, 8, 1];
const preparedGifts = prepareGifts(giftList);
console.log(preparedGifts); // [1, 2, 3, 5, 7, 8]
