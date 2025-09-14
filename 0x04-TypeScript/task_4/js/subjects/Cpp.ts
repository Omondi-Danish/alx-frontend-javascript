// task_4/js/subjects/Cpp.ts

/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging to add a new property to Teacher
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (
        !this.teacher.experienceTeachingC ||
        this.teacher.experienceTeachingC <= 0
      ) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
