const palindromes = function (str) {
  let forward = Array.from(str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')).join(
    ''
  );
  let backward = Array.from(str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))
    .reverse()
    .join('');

  return forward === backward;
};

// Do not edit below this line
module.exports = palindromes;
