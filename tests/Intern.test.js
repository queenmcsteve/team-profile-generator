const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testSchool = "Hell";
  const e = new Intern("Steve", 666, "steve@steve.steve", testSchool);
  expect(e.school).toBe(testSchool);
});

test("getRole() should return 'Intern'", () => {
  const testRole = "Intern";
  const e = new Intern("Steve", 666, "steve@steve.steve", "Hell");
  expect(e.getRole()).toBe(testRole);
});

test("can get school via getSchool()", () => {
  const testSchool = "Hell";
  const e = new Intern("Steve", 666, "steve@steve.steve", "Hell");
  expect(e.getSchool()).toBe(testSchool);
});
