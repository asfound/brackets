module.exports = function check(str, bracketsConfig) {
  // define 'closed' pairs in config
  const pairs = [];
  for (let pair of bracketsConfig) {
    pairs.push(pair.join(""));
  }

  // copy the str for checking
  let given = str;

  // check: remove 'closed' pairs to find 'open' stray brackets
  for (let i = given.length; i > 1; i -= 2) {
    for (let pair of pairs) {
      given = given.replace(pair, "");
    }
  }

  // check if any 'open' stray brackets left
  return given.length === 0;
};

// console.log(
//   check("[]()", [
//     ["(", ")"],
//     ["[", "]"],
//   ])
// );

// ("()");
// ("(())");
// ("(())()");
// ("()(");
// ("())");
// (")(()");
// ("()()()");

// ("((()(()()((()))))()))");
