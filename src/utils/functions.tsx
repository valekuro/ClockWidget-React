//calculate a randomId
export function randomId(n: number, totalNumbers: number) {
  let i: number = 0;
  let ids = [];
  for (i = 0; i < n; i++) {
    ids.push(Math.round(Math.random() * totalNumbers + 1));
  }
  return ids;
}
