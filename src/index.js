const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');


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
    <div style="background-color:lightpink;">
        <h1 style="text-align: center;"> My Team </h1>
    </div>
    <div class="Manager" style="width: 400px; height: 250px; position: relative; background-color: lightgray; padding: 10px;">
        <h2>Manager</h2>
        <h3>Name: ${response.managerName}</h3>
        <h3>Id: ${response.managerId}</h3>
        <h3>Email: ${response.managerEmail}</h3>
        <h3>Office Number: ${response.managerOfficeNumber}</h3>
    </div>
    <div class="Engineer" style="width: 400px; height: 250px; position: relative; background-color: lightgreen; padding: 10px;">
        <h2>Engineer</h2>
        <h3>Name: ${response.engineerName}</h3>
        <h3>Id: ${response.engineerId}</h3>
        <h3>Email: ${response.engineerEmail}</h3>
        <h3>Github Profile: <a href="https://github.com/${response.engineerGithub}/">${response.engineerGithub}/</a></h3>
        <h3 href="github.com/${response.engineerGithub}/">Github Profile: github.com//</h3>
    </div>
    <div class="Intern" style="width: 400px; height: 250px; position: relative; background-color: lightblue; padding: 10px;">
        <h2>Intern</h2>
        <h3>Name: ${response.internName}</h3>
        <h3>Id: ${response.internId}</h3>
        <h3>Email: ${response.internEmail}</h3>
        <h3>School Profile: ${response.internSchool}</h3>
    </div>
</body>
</html>
`;


function writeToFile(fileName, data) {
    
    
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html')
);
}


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
    /*
    How I intend to code it:
    {
    type: 'input',
    name: Manager(name),
    message: "Enter the name of the manager. ",
    },
    {
        type: 'input',
        name: Manager(id),
        message: "Enter the id of the manager. ",
    },
    {
        type: 'input',
        name: 'Manager(email)',
        message: "Enter the email of the manager. ",
    },
    {
        type: 'input',
        name: 'Manager(officeNumber)',
        message: "Enter the office number of the manager. ",
    },
    */
    /*
        This portion is not how I attended to add the code.
        Im just trying to satisfy the user stories to the best I can.
    */
        {
            type: 'input',
            name: 'engineerName',
            message: "Enter the name of the engineer. ",
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Enter the id of the engineer. ",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Enter the email of the engineer. ",
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Enter the github of the engineer. ",
        },
        {
            type: "confirm",
            name: "moreEngineers",
            message: "Are there more engineers?",
        },
        {
            type: 'input',
            name: 'internName',
            message: "Enter the name of the intern. ",
        },
        {
            type: 'input',
            name: 'internId',
            message: "Enter the id of the intern. ",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Enter the email of the intern. ",
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Enter the school of the intern. ",
        },
        {
            type: "confirm",
            name: "moreInterns",
            message: "Are there more interns?",
          },
])
.then((response) => {
    // Below is how I intended to implement the code but I ran into many errors
    // const EngineerIntern = [
    //     {
    //         type: "input",
    //         name: Engineer(name),
    //         message:"Enter the name of the engineer"
    //     },
    //     {
    //         type: "input",
    //         name: Engineer(id),
    //         message:"Enter the id of the engineer"
    //     },
    //     {
    //         type: "input",
    //         name: Engineer(email),
    //         message:"Enter the email of the engineer"
    //     },
    //     {
    //         type: "input",
    //         name: Engineer(github),
    //         message:"Enter the github of the engineer"
    //     },
    //     {
    //         type: "confirm",
    //         name: "moreEngineers",
    //         message:"Are you done entering engineers?"
    //     },
    // ];
    // const Interns = [
    //     {
    //         type: "input",
    //         name: Intern(name),
    //         message:"Enter the name of the intern"
    //     },
    //     {
    //         type: "input",
    //         name: Intern(id),
    //         message:"Enter the id of the intern"
    //     },
    //     {
    //         type: "input",
    //         name: Intern(email),
    //         message:"Enter the email of the intern"
    //     },
    //     {
    //         type: "input",
    //         name: Intern(school),
    //         message:"Enter the school of the intern"
    //     },
    //     {
    //         type: "confirm",
    //         name: "moreInterns",
    //         message:"Are you done entering interns?"
    //     },
    // ];
    // function getEngineerIntern(){
    //     return inquirer.prompt(EngineerIntern).then((response) =>{
    //         if(response.moreEngineers){
    //             return response;
    //         }
    //         else if(response.moreInterns){
    //             return response;
    //         }
    //         else{
    //             return getEngineers();
    //         }
    //     });
    // }
    // getEngineers();
        const readmeGen = generateHTML(response);
        writeToFile('../index.html', readmeGen);
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