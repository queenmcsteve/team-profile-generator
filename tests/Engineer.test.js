const Engineer = require("../lib/Engineer");

test("Can set Github username via constructor", () => {
  const testUser = "STEVE";
  const e = new Engineer("Steve", 666, "steve@steve.steve", testUser);
  expect(e.github).toBe(testUser);
});

test("getRole() should return 'Engineer'", () => {
  const testRole = "Engineer";
  const e = new Engineer("Steve", 666, "steve@steve.steve", "STEVE");
  expect(e.getRole()).toBe(testRole);
});

test("Can get GitHub username via getGithub()", () => {
  const testUser = "STEVE";
  const e = new Engineer("Steve", 666, "steve@steve.steve", testUser);
  expect(e.getGithub()).toBe(testUser);
});
