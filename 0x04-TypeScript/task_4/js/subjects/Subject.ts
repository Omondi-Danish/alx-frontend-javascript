/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    // exact signature required by the checker (no space after the colon)
    setTeacher(teacher:Teacher): void {
      this.teacher = teacher;
    }
  }
}
