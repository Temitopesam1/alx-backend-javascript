export default function getListStudents() {
  const STUDENTS = {
    firstStudent: { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    secondStudent: { id: 2, firstName: 'James', location: 'Columbia' },
    thirdStudent: { id: 5, firstName: 'Serena', location: 'San Francisco' },
  };
  const STUDENTS_ARRAY = [];
  const STUDENT_KEYS = Object.keys(STUDENTS);
  for (const KEY of STUDENT_KEYS) {
    STUDENTS_ARRAY.push(STUDENTS[KEY]);
  }
  return STUDENTS_ARRAY;
}
