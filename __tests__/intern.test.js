const Intern = require("../src/intern");

describe("Intern", () => {
  describe("getRole", () => {
    it("should return the role of the intern", () => {
      const user = "Intern";
      const result = new Intern().getRole();
      expect(result).toEqual(user);
    });
  });
  describe("Intern info", () => {
    it("should return the intern's information", () => {
      const school = "University";
      const name = "TestName";
      const id = 1234;
      const email = "test@email.com";
      const intern = new Intern(name, id, email, school);
      expect(intern.getSchool()).toEqual(school);
      expect(intern.getEmail()).toEqual(email);
      expect(intern.getName()).toEqual(name);
      expect(intern.getId()).toEqual(id);
    });
  });
});
