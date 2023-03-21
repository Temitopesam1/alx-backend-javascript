export default function appendToEachArrayValue(array, appendString) {
  //let keys = array.keys();
  for (let idx of array.keys()) {
    array[idx] = `${appendString}${array[idx]}`;
  }

  return array;
}
