const Employee = require('./Employee');


const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (response) => 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
</head>
<body>
    <div>
        <h1 style="text-align: center;"> My Team </h1>
    </div>
</body>
</html>
${response.managerName}
${response.managerId}
${response.managerEmail}
${response.managerOfficeNumber}
`


function writeToFile(fileName, data) {
    
    
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html')
);
}
let name = [];
let id = [];
let email = [];
let officeNumber = [];
let github = [];
let school = [];


inquirer
.prompt([
    {
    type: 'input',
    name: 'managerName',
    message: "Enter the name of the manager. ",
    },
    {
        type: 'input',
        name: 'managerId',
        message: "Enter the id of the manager. ",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Enter the email of the manager. ",
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "Enter the office number of the manager. ",
    },
])
.then((response) => {
    const readmeGen = generateHTML(response);
    writeToFile('index.html', readmeGen);
});



// function employeeChecker(){
    

//     .then((response) => {
//         console.log(response.numberOfEmployees)

//         for(let i = 0; i < response.numberOfEmployees; i++){
//             name.push(`name${i+1}`);
//             id.push(`id${i+1}`);
//             email.push(`email${i+1}`);
//         }

//         inquirer
//         .prompt([
//             {
//             type: 'input',
//             name: ,
//             message: "Enter the name of the employee",
//             },
//         ])

//         console.log(name);
//         // const readmeGen = generateHTML(response);
//         // writeToFile('index.html', readmeGen);
        
//     });
// }

// employeeChecker();