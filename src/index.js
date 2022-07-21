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
        console.log(
          "🚀 ~ file: index.js ~ line 137 ~ myTeam ~ manager",
          manager
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
        console.log(
          "🚀 ~ file: index.js ~ line 148 ~ myTeam ~ engineer",
          engineer
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
        console.log("🚀 ~ file: index.js ~ line 159 ~ myTeam ~ intern", intern);
        return intern;
      }
      throw new Error("employee role not found.");
    });
    console.log("🚀 ~ file: index.js ~ line 175 ~ myTeam ~ myTeam", myTeam);
    console.log("check out my intern", myTeam[1].getName());

    const ManagerCard = `        <div class="w-1/4 m-12 border-2 drop-shadow-lg bg-slate-100">
    <div class="w-full p-3 font-bold text-green-700 bg-green-300">
      <h2 class="py-2 text-2xl">Vanessa</h2>
      <div>
        <h3 class="flex text-xl">
          Manager
        </h3>
      </div>
    </div>
    <div class="mx-4 my-8 border-2 divide-y bg-slate-50">
      <div class="flex p-2"><p class="">ID:</p><p></p> </div>
      <div class="flex p-2"><p class="">Email:</p><p></p> </div>
      <div class="flex p-2"><p class="">office number:</p><p></p> </div>
    </div>
  </div>`;
    const engineerCard = `          <div class="w-1/4 m-12 border-2 drop-shadow-lg bg-slate-100">
  <div class="w-full p-3 font-bold text-green-700 bg-green-300">
    <h2 class="py-2 text-2xl">Adam</h2>
    <div>           
      <h3 class="flex text-xl">
        Enigneer
      </h3>
    </div>
  </div>
  <div class="mx-4 my-8 border-2 divide-y bg-slate-50">
    <div class="flex p-2"><p class="">ID:</p> <p></p></div>
    <div class="flex p-2"><p class="">Email:</p> <p></p></div>
    <div class="flex p-2"><p class="">GitHub:</p> <p></p></div>
  </div>
</div>`;
    const internCard = `          <div class="w-1/4 m-12 border-2 drop-shadow-lg bg-slate-100">
    <div class="w-full p-3 font-bold text-green-700 bg-green-300">
      <h2 class="py-2 text-2xl">Sami</h2>
      <div>           
        <h3 class="flex text-xl">
          Intern
        </h3>
      </div>
    </div>
    <div class="mx-4 my-8 border-2 divide-y bg-slate-50">
      <div class="flex p-2"><p class="">ID:</p><p></p> </div>
      <div class="flex p-2"><p class="">Email:</p><p></p> </div>
      <div class="flex p-2"><p class="">School:</p><p></p> </div>
    </div>
  </div>`;
    const innerHTML = `<!DOCTYPE html>
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
        <div class="flex flex-wrap p-3 place-content-center">
        ${ManagerCard}
        ${engineerCard}
        ${internCard}

        </div>
    </html>`;
    fs.writeFile("indexTemplate.html", innerHTML, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  })
  .catch(console.error);
