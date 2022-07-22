const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

const managerInfo = [
  {
    type: "input",
    name: "managerName",
    message: "What is your name?",
    validate(answer) {
      if (!answer) {
        return "Please, fill your name!";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "managerID",
    message: "What is your ID?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is your office number?",
  },
];

const addMoreEmployees = [
  {
    type: "list",
    name: "addEmployee",
    message: "Do you want to add another employee?",
    choices: ["Engineer", "Intern", "Finish building team"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the engineers name?",
  },
  {
    type: "input",
    name: "engineerID",
    message: "What is the engineers ID?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the engineers email?",
  },
  {
    type: "input",
    name: "engineerGitHub",
    message: "What is the engineers GitHub username?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the interns name?",
  },
  {
    type: "input",
    name: "internID",
    message: "What is the interns ID?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the interns email?",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is the interns school?",
  },
];

function getManagerInfo() {
  return inquirer.prompt(managerInfo).then((answers) => {
    return getAnotherEmployee([{...answers, role: "Manager"}]).then(
      (answers) => {
        return answers;
      }
    );
  });
}

function getAnotherEmployee(employees = []) {
  return inquirer.prompt(addMoreEmployees).then((answers) => {
    if (answers.addEmployee === "Engineer") {
      return getEngineer(employees);
    } else if (answers.addEmployee === "Intern") {
      return getIntern(employees);
    }

    return employees;
  });
}

function getEngineer(employees = []) {
  return inquirer.prompt(engineerQuestions).then((answers) => {
    return getAnotherEmployee([...employees, {...answers, role: "Engineer"}]);
  });
}

function getIntern(employees = []) {
  return inquirer.prompt(internQuestions).then((answers) => {
    return getAnotherEmployee([...employees, {...answers, role: "Intern"}]);
  });
}

const employeeInformation = getManagerInfo([])
  .then((answers) => {
    console.log("Hello", answers);
    const myTeam = answers.map((employee) => {
      if (employee.role === "Manager") {
        const manager = new Manager(
          employee.managerName,
          employee.managerID,
          employee.managerEmail,
          employee.managerOfficeNumber
        );
        return manager;
      }
      if (employee.role === "Engineer") {
        const engineer = new Engineer(
          employee.engineerName,
          employee.engineerID,
          employee.engineerEmail,
          employee.engineerGitHub
        );
        return engineer;
      }
      if (employee.role === "Intern") {
        const intern = new Intern(
          employee.internName,
          employee.internID,
          employee.internEmail,
          employee.internSchool
        );
        return intern;
      }
      throw new Error("employee role not found.");
    });

    let innerHTML = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/dist/output.css" rel="stylesheet" />
        <title>Document</title>
      </head>
      <body>
        <h1
          class="w-full py-10 text-3xl font-bold text-center text-green-700 underline bg-green-300 test-lg">
          My Team!
        </h1>
        <div class="flex flex-wrap p-3 place-content-center">`;
    myTeam.forEach((employee) => {
      if (employee.getRole() === "Manager") {
        const managerName = employee.getName();
        const managerRole = employee.getRole();
        const managerID = employee.getId();
        const managerEmail = employee.getEmail();
        const mngOfficeNumber = employee.getOfficeNumber();
        let ManagerCard = `<div class="w-1/4 m-12 border-2 drop-shadow-lg bg-slate-100">
        <div class="w-full p-3 font-bold text-green-700 bg-green-300">
        <h2 class="py-2 text-2xl">${managerName}</h2>
        <div>
        <h3 class="flex text-xl">
        ${managerRole}
        </h3>
        </div>
        </div>
        <div class="mx-4 my-8 border-2 divide-y bg-slate-50">
        <div class="flex p-2"><p class="">ID:</p><p> &nbsp${managerID}</p> </div>
        <div class="flex p-2"><p class="">Email:</p><p> &nbsp<a href = "mailto: ${managerEmail}">Send Email</a></p> </div>
        <div class="flex p-2"><p class="">office number:</p><p> &nbsp${mngOfficeNumber}</p> </div>
        </div>
        </div>`;
        innerHTML += `${ManagerCard}`;
      }
      if (employee.getRole() === "Engineer") {
        const engineerRole = employee.getRole();
        const engineerName = employee.getName();
        const engineerEmail = employee.getEmail();
        const engineerGitHub = employee.getGithub();
        const engineerID = employee.getId();
        let engineerCard = `<div class="w-1/4 m-12 border-2 drop-shadow-lg bg-slate-100">
      <div class="w-full p-3 font-bold text-green-700 bg-green-300">
        <h2 class="py-2 text-2xl">${engineerName}</h2>
        <div>
          <h3 class="flex text-xl">
            ${engineerRole}
          </h3>
        </div>
      </div>
      <div class="mx-4 my-8 border-2 divide-y bg-slate-50">
        <div class="flex p-2"><p class="">ID:</p> <p>&nbsp${engineerID}</p></div>
        <div class="flex p-2"><p class="">Email:</p> <p></p>&nbsp<a href = "mailto: ${engineerEmail}">Send Email</a></div>
        <div class="flex p-2"><p class="">GitHub:</p> <p>&nbsp <a target="_blank" href="https://github.com/?user=${engineerGitHub}">GitHub</a></p></div>
      </div>
    </div>`;
        innerHTML += `${engineerCard}`;
      }
      if (employee.getRole() === "Intern") {
        const internRole = employee.getRole();
        const internName = employee.getName();
        const internEmail = employee.getEmail();
        const internSchool = employee.getSchool();
        const internID = employee.getId();
        let internCard = `<div class="w-1/4 m-12 border-2 drop-shadow-lg bg-slate-100">
        <div class="w-full p-3 font-bold text-green-700 bg-green-300">
        <h2 class="py-2 text-2xl">${internName}</h2>
        <div>
        <h3 class="flex text-xl">
        ${internRole}
        </h3>
        </div>
      </div>
      <div class="mx-4 my-8 border-2 divide-y bg-slate-50">
      <div class="flex p-2"><p class="">ID:</p> <p> &nbsp${internID}</p></div>
      <div class="flex p-2"><p class="">Email:</p> <p></p> &nbsp<a href = "mailto: ${internEmail}">Send Email</a></div>
      <div class="flex p-2"><p class="">School:</p> <p> &nbsp${internSchool}</p></div>
      </div>
      </div>`;
        innerHTML += `${internCard}`;
      }
    });
    innerHTML += ` </div>
    </html>`;

    fs.writeFile("indexTemplate.html", innerHTML, (err) =>
      err ? console.error(err) : console.log("Your HTML file has been created!")
    );
  })
  .catch(console.error);
