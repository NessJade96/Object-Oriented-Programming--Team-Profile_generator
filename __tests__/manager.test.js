const Manager = require("../src/manager");

describe("Manager", () => {
  describe("getRole", () => {
    it("should return the role of the Manager", () => {
      const user = "Manager";
      const result = new Manager().getRole();
      expect(result).toEqual(user);
    });
  });
  describe("Manager info", () => {
    it("should return the manager's information", () => {
      const officeNumber = "0735269150";
      const name = "TestName";
      const id = 1234;
      const email = "test@email.com";
      const manager = new Manager(name, id, email, officeNumber);
      expect(manager.getOfficeNumber()).toEqual(officeNumber);
      expect(manager.getEmail()).toEqual(email);
      expect(manager.getName()).toEqual(name);
      expect(manager.getId()).toEqual(id);
    });
  });
});
