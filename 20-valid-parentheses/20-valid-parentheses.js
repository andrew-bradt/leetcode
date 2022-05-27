/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (string) => {
  const openingClosingMap = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  };
  const stack = [];
  const isOpening = (char) => char === '(' || char === '{' || char === '[';
  const matchesLastOpeningBracket = (opening, closing) => openingClosingMap[opening] === closing;
  
  for (const currentBracket of string) {
    if (isOpening(currentBracket)) {
      stack.push(currentBracket);
    } else {
      const lastOpeningBracket = stack.pop();
      if (!matchesLastOpeningBracket(lastOpeningBracket, currentBracket)) return false;
    }
  }

  return stack.length === 0;
};