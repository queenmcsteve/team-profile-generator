//format manager card
const generateManager = function (manager) {
  return `<div class="card m-1" style="width: 18rem">
    <div class="card-header">
    <h3> ${manager.name} </h3>
    <h4>Manager<h4>
    </div>
    <div class="card-body">
      <p class="card-text">ID:${manager.id}</p>
      <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
      <p class="card-text">Office No: ${manager.officeNumber}</p>
    </div>
    </div>`;
};
//format engineer cards
const generateEngineer = function (engineer) {
  return `<div class="card m-1" style="width: 18rem">
  <div class="card-header">
  <h3> ${engineer.name} </h3>
  <h4>Engineer<h4>
  </div>
    <div class="card-body">
      <p class="card-text">ID: ${engineer.id}</p>
      <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
      <p class="card-text">Github: <a href="https://github.com/${engineer.github}" target=_blank>${engineer.github}</a></p>
    </div>
    </div>`;
};

//format intern cards
const generateIntern = function (intern) {
  return `<div class="card m-1" style="width: 18rem">
  <div class="card-header">
  <h3> ${intern.name} </h3>
  <h4>Intern</h4>
  </div>
  <div class="card-body">
    <p class="card-text">ID: ${intern.id}</p>
    <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p class="card-text">Github: ${intern.school}</p>
  </div>
</div>`;
};

//format data into html
generateHTML = (data) => {
  pageArray = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    if (role === "Manager") {
      const managerCard = generateManager(employee);
      pageArray.push(managerCard);
    }
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      pageArray.push(engineerCard);
    }
    if (role === "Intern") {
      const internCard = generateIntern(employee);
      pageArray.push(internCard);
    }
  }
  const employeeCards = pageArray.join("");
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!--bootstrap css-->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <title>Team Profile</title>
    </head>
    <body>
      <main>
        <div class="bg-dark text-secondary px-4 py-5 text-center">
          <div class="py-5">
            <h1 class="display-5 fw-bold text-white">Team Profile</h1>
          </div>
        </div>
        <div class="container">
          <div class="row d-flex justify-content p-3" id="team-cards">
            <!-- TEAM CARDS HERE -->
            ${employeeCards}
          </div>
        </div>
      </main>
      <!--bootstrap js-->
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>`;
};

module.exports = generateHTML;
