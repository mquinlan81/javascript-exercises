const repeatString = function (str, num) {
  let str2 = '';
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      str2 = str2 + str;
    }
  } else {
    return 'ERROR';
  }

  return str2;
};

// Do not edit below this line
module.exports = repeatString;
