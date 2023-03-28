export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  return studentsArray.filter((student) => student.location === city).map((element) => {
    const studentGrade = newGrades.filter((grade) => element.id === grade.studentId);
    element.grade = studentGrade[0] ? studentGrade[0].grade : 'N/A';
    return element;
  });
}
