const Engineer = require("../src/engineer");

describe("Engineer", () => {
  describe("getRole", () => {
    it("should return the role of the engineer", () => {
      const user = "Engineer";
      const result = new Engineer().getRole();
      expect(result).toEqual(user);
    });
  });
  describe("engineer info", () => {
    it("should return the engineer's information", () => {
      const github = "githubUser";
      const name = "TestName";
      const id = 1234;
      const email = "test@email.com";
      const engineer = new Engineer(name, id, email, github);
      expect(engineer.getGithub()).toEqual(github);
      expect(engineer.getEmail()).toEqual(email);
      expect(engineer.getName()).toEqual(name);
      expect(engineer.getId()).toEqual(id);
    });
  });
});
