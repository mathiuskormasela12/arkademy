export default (initialValue, lastValue, dataArray) => {
  return dataArray
    .filter(item => item >= initialValue && item <= lastValue)
    .sort((min, max) => min - max);
}