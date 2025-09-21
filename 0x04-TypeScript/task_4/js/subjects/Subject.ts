/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    // Required setter method (exact signature)
    setTeacher(teacher:Teacher)
    void {
      this.teacher = teacher;
    }
  }
}
