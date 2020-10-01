export function expensive(time: number) {
  const start = Date.now();
  let count = 0;
  while (Date.now() - start < time) {
    count++;
  }
  return count;
}
