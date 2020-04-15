// eslint-disable-next-line max-len
// TODO:    - Help function that strips punctuation, include options to include numeric, standard punctuation
//          - Combine kabob and snake
// Challenge #1

function capitalize(str) {
  return (str.substring(0, 1)).toUpperCase().concat(str.substring(1));
}

// console.log("capitalize('hello') ", capitalize('hello'));

//  Challenge #2
function allCaps(str) {
  return str.toUpperCase(str);
}

function capitalizeWords(str) {
  return (str.split(' ')).map(capitalize).join(' ');
}

function removeExtraSpaces(str, joiner = ' ') {
  return (str.trim()).split(' ').map((word) => word.trim()).filter((elem) => elem !== '')
    .join(joiner);
}


function kabobCase(str) {
  return removeExtraSpaces((str.toLowerCase()).replace(/[^a-zA-Z ]/g, ''), '-');
}


function snakeCase(str) {
  return removeExtraSpaces((str.toLowerCase()).replace(/[^a-zA-Z ]/g, ''), '_');
}

function camelCase(str) {
  const res = str.split(' ');
  for (let i = 0; i < res.length; i++) {
    if (i === 0) {
      const remChars = res[i].substring(1);
      const firstChar = res[i].substring(0, 1).toLowerCase();
      res[i] = firstChar.concat(remChars);
    } else {
      res[i] = capitalize(res[i]);
    }
  }
  return res.join('');
}

export {
  capitalize,
  allCaps,
  kabobCase,
  camelCase,
  snakeCase,
  capitalizeWords,
};

// module.exports.capitalize = capitalize;
// module.exports.allCaps = allCaps;
// module.exports.capitalizeWords = capitalizeWords;
// module.exports.removeExtraSpaces = removeExtraSpaces;
// module.exports.kabobCase = kabobCase;
// module.exports.snakeCase = snakeCase;
// module.exports.camelCase = camelCase;
