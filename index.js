const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (response) => 
`Testing`;

function writeToFile(fileName, data) {
    
    
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html')
);
}

inquirer
.prompt([
    {
    type: 'input',
    name: 'title',
    message: "Enter the title of the page",
    },
])
.then((response) => {
    const readmeGen = generateHTML(response);
    writeToFile('index.html', readmeGen);
});


