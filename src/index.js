const inquirer = require("inquirer");
const fs = require("fs");

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

const engineer = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the engineers name?",
    // when(answers) {
    //   return answers.addEmployee === "Engineer";
    // },
  },
  {
    type: "input",
    name: "engineerID",
    message: "What is the engineers ID?",
    // when(answers) {
    //   return answers.addEmployee === "Engineer";
    // },
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the engineers email?",
    // when(answers) {
    //   return answers.addEmployee === "Engineer";
    // },
  },
  {
    type: "input",
    name: "engineerGitHub",
    message: "What is the engineers GitHub username?",
    // when(answers) {
    //   return answers.addEmployee === "Engineer";
    // },
  },
];

const intern = [
  {
    type: "input",
    name: "interName",
    message: "What is the interns name?",
    // when(answers) {
    //   return answers.addEmployee === "Intern";
    // },
  },
  {
    type: "input",
    name: "interID",
    message: "What is the interns ID?",
    // when(answers) {
    //   return answers.addEmployee === "Intern";
    // },
  },
  {
    type: "input",
    name: "interEmail",
    message: "What is the interns email?",
    // when(answers) {
    //   return answers.addEmployee === "Intern";
    // },
  },
  {
    type: "input",
    name: "interSchool",
    message: "What is the interns school?",
    // when(answers) {
    //   return answers.addEmployee === "Intern";
    // },
  },
];

const name = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "list",
    name: "repeat",
    message: "repeat?",
    choices: ["yes", "no"],
  },
];

function getNames(previousAnswers = []) {
  return inquirer.prompt(name).then((answers) => {
    const allAnswers = [...previousAnswers, answers];
    if (answers.repeat === "yes") {
      return getNames(allAnswers);
    }

    return allAnswers;
  });
}

function getManagerInfo() {
  return inquirer.prompt(managerInfo).then((answers) => {
    getAnotherEmployee([answers]).then((answers) => {
      return answers;
    });
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
  return inquirer.prompt(engineer).then((answers) => {
    return getAnotherEmployee([...employees, answers]);
  });
}

function getIntern(employees = []) {
  return inquirer.prompt(intern).then((answers) => {
    return getAnotherEmployee([...employees, answers]);
  });
}

// getManagerInfo().then().catch();
// getAnotherEmployee().then().catch();
// getEngineer().then().catch();
// getIntern().then().catch();

getManagerInfo([])
  .then((answers) => console.log(answers))
  .catch(console.error);

// inquirer
//   .prompt(questions, engineer, intern, addMoreEmployees)
//   .then(
//     (answers) => {
//     if (answers.addEmployee === "Engineer") {
//       return addEngineer();
//     }
//   })
//   .prompt(addMoreEmployees);

// function addEngineer(){
//     return inquirer.prompt(engineer).then((answers) => {
//         if ()
//     })
// }

/*
run out manager questions 
then run the would you like to add employee question
then if Q === engineer then run the engineer quetsions 
else if Q === intern then run the intern questions 
else end the application and create the html file.
*/

//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
