exports.flatten = function flattenArray(array) {
  let workingArray = [...array];
  let resultArray = [];
  while (workingArray.length) {
    const lastItem = workingArray.pop();
    if (Array.isArray(lastItem)) {
      workingArray.push(...lastItem);
    } else {
      resultArray.push(lastItem);
    }
  }
  return resultArray.reverse();
};
