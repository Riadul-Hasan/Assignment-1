const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier !== undefined) {
    return value * multiplier;
  } else return value * 2;
};

console.log(multiplyValue(10))
console.log(multiplyValue(10, 5))
console.log(multiplyValue(7, 0))

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value == "boolean") {
    if (!value) return "Inactive";
    else return "Active";
  }
  return value;
}

console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));

type Cordinate = readonly [number, number, string];

function formatCoordinate(cor: Cordinate): string {
  const [latitude, longtitude, locationName] = cor;
  return `Location: ${locationName} (${latitude}, ${longtitude})`;
}

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]))
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]))




function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];

  for (const arr of arrays) {
    for (const element of arr) {
      result.push(element);
    }
  }
  return result;
}

console.log(concatenateArrays(["a", "b"], ["c", "d"]))
console.log(concatenateArrays([1, 2], [3, 4], [5]))

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(course: Course[], minStudents: number): Course[] {
  const newArr: Course[] = [];
  for (const element of course) {
    if (element.isPublished == true && minStudents <= element.students)
      newArr.push(element);
  }

  return newArr;
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];
console.log(getPopularCourses(courses, 80))

function pluckValues<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  const newArr: T[K][] = [];
  for (const item of arr) {
    newArr.push(item[key]);
  }
  return newArr;
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

console.log(pluckValues(users, "name"))
console.log(pluckValues(users, "id"))

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Alice", 50000, "Engineering")
console.log(manager.getDetails())
console.log(manager.getRoleInfo())



function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Error: Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
}

async function main() {
  try {
    console.log(await validateAgeAsync(20));
  } catch (error) {
    console.log((error as Error).message);
  }

  try {
    console.log(await validateAgeAsync(15));
  } catch (error) {
    console.log((error as Error).message);

  }
}

main();
