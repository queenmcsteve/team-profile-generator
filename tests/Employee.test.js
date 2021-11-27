const Employee = require("../lib/Employee");

test("Can create Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Can set name via constructor", () => {
  const name = "Steve";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor", () => {
  const id = 666;
  const e = new Employee("Steve", id);
  expect(e.id).toBe(id);
});

test("Can set email via construcotr", () => {
  const testEmail = "steve@steve.steve";
  const e = new Employee("Steve", 666, testEmail);
  expect(e.email).toBe(testEmail);
});

test("Can get name via getName()", () => {
  const testName = "Steve";
  const e = new Employee(testName);
  expect(e.getName()).toBe(testName);
});

test("Can get id via getId()", () => {
  const testValue = 666;
  const e = new Employee("Steve", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testEmail = "steve@steve.steve";
  const e = new Employee("Steve", 666, testEmail);
  expect(e.getEmail()).toBe(testEmail);
});

test("getRole() should return 'Employee'", () => {
  const testRole = "Employee";
  const e = new Employee("Steve", 666, "steve@steve.steve");
  expect(e.getRole()).toBe(testRole);
});
