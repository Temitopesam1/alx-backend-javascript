export default function getStudentIdsSum(studentsArray) {
  return studentsArray.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
