export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    array = [`${appendString} ${idx}`];
  }

  return array;
}
