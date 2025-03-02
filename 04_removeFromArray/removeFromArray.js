const removeFromArray = function (arr, ...args) {
  //   //   arr2 = arr;
  //   args.forEach((arg) => {
  //     console.log(arg);
  //     arr = arr.filter((x) => x !== arg);
  //   });
  //   return arr;

  return arr.filter((x) => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
