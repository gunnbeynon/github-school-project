// Create a new class called "Student" with properties for name, age, and grade level
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

// Create a new class called "School" with a property for an array of students
class School {
  constructor() {
    this.students = [];
  }

  // Add a new student to the school's roster
  addStudent(student) {
    this.students.push(student);
  }

  // Return an array of students in the school who are above a certain age
  getStudentsAbove(age) {
    return this.students.filter((s) => s.age > age);
  }
}

// Create a new instance of the "School" class and add some students to it
const school = new School();
school.addStudent(new Student("Alice", 12, 3));
school.addStudent(new Student("Bob", 15, 4));
school.addStudent(new Student("Charlie", 18, 5));

// Print out the names of the students above a certain age
console.log(school.getStudentsAbove(16).map((s) => s.name));
