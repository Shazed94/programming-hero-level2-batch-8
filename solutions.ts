function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier && multiplier !== 0) {
    return value * multiplier;
  } else if (multiplier == undefined) {
    return value * 2;
  } else {
    return 0;
  }
}


type Value = string | number | boolean;

function processInput(value: Value) {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
}

type Coordinate = readonly [number, number, string];

const formatCoordinate = (coordinate: Coordinate) => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    [],
  );
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number) {
  const returnCourses = courses.filter((course) => {
    if (course.isPublished === true && course.students >= minStudents) {
      return course;
    }
  });
  return returnCourses;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}


class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};
