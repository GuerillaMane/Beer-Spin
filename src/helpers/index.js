export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function extendArray(array) {
  let arrCopy = [...array],
    res = [];
  for (let i = 0; i < 60; i++) {
    res = res.concat(...arrCopy);
  }
  return res;
}
