const Employee = require("../src/employee");

describe("Employee", () => {
  describe("getRole", () => {
    it("should return the role of the employee", () => {
      const user = "Employee";
      const result = new Employee().getRole();
      expect(result).toEqual(user);
    });
  });
  describe("employee values", () => {
    it("should return the employee key values", () => {
      const id = 1234;
      const name = "name";
      const email = "test@fake.com";
      const employee = new Employee(name, id, email);
      expect(employee.getId()).toEqual(id);
      expect(employee.getName()).toEqual(name);
      expect(employee.getEmail()).toEqual(email);
    });
  });
});
