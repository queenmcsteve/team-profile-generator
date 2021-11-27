const Manager = require("../Lib/Manager");
const Employee = require("../Lib/Employee");

test("Can set office number via constructor", () => {
  const testOffice = 777;
  const e = new Manager("Steve", 666, "steve@steve.steve", testOffice);
  expect(e.officeNumber).toBe(testOffice);
});

test("getRole() should return 'Manager'", () => {
  const testRole = "Manager";
  const e = new Manager("Steve", 666, "steve@steve.steve", 777);
  expect(e.getRole()).toBe(testRole);
});

test("Can get office number via getOffice()", () => {
  const testOffice = 777;
  const e = new Manager("Steve", 666, "steve@steve.steve", testOffice);
  expect(e.getOfficeNumber()).toBe(testOffice);
});
