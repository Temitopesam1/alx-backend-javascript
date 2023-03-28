export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  try {
    if (position > 10) {
      throw new RangeError('Position outside range');
    } else {
      view.setInt8(position, value);
      return view;
    }
  } catch (error) {
    console.log(error);
  }
}
