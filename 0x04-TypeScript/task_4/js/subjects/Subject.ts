/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher:Teacher;

    // ✅ Explicitly type parameter & mark as public method
    public setTeacher(teacher:Teacher): void {
      this.teacher = teacher;
    }
  }
}
