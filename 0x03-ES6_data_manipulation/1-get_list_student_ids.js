export default function getListStudentIds(studentsArray) {
  const ID_ARRAY = [];
  if (!Array.isArray(studentsArray)) {
    return ID_ARRAY;
  }
  const STUDENTS_MAP = new Map();
  for (let index = 0; index < studentsArray.length; index += 1) {
    STUDENTS_MAP.set(index, studentsArray[index]);
  }
  for (const VALUE of STUDENTS_MAP.values()) {
    ID_ARRAY.push(VALUE.id);
  }
  return ID_ARRAY;
}
