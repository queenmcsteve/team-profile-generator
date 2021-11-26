// required node modules
const inquirer = require("inquirer");
const fs = require("fs");

// required modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamArray = [];

// Manager questions
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the name of the manager of the team:",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number:",
      },
    ])
    .then((managerData) => {
      const { name, id, email, officeNumber } = managerData;
      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);
      console.log(manager);
      console.log(teamArray);
    });
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role",
        choices: ["Engineer", "Intern", "Finish Building Team"],
      },
    ])
    .then((employeeType) => {
      const { role } = employeeType;
      if (role === "Finish Building Team") {
        // return teamArray;
        console.log("team built");
        console.log(teamArray);
      } else if (role === "Engineer") {
        console.log(`${role} entered`);
        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "Enter the name of the employee:",
            },
            {
              type: "input",
              name: "id",
              message: "Enter the ID of the employee:",
            },
            {
              type: "input",
              name: "email",
              message: "Enter the employee's email:",
            },
            {
              type: "input",
              name: "github",
              message: "Enter the engineer's github username:",
            },
          ])
          .then((employeeData) => {
            let { name, id, email, github } = employeeData;
            let employee;
            employee = new Engineer(name, id, email, github);
            teamArray.push(employee);
            console.log(teamArray);
          })
          .then(addEmployee);
      } else if (role === "Intern") {
        console.log(`${role} entered`);
        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "Enter the name of the employee:",
            },
            {
              type: "input",
              name: "id",
              message: "Enter the ID of the employee:",
            },
            {
              type: "input",
              name: "email",
              message: "Enter the employee's email:",
            },
            {
              type: "input",
              name: "school",
              message: "Enter the intern's school:",
            },
          ])
          .then((employeeData) => {
            let { name, id, email, school } = employeeData;
            let employee;
            employee = new Intern(name, id, email, school);
            teamArray.push(employee);
            console.log(teamArray);
          })
          .then(addEmployee);
      }
    });
};

addManager().then(addEmployee);
