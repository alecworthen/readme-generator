// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install it?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please input the usage:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide your licenses:'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide the contributions:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How was it tested?'
    },
    {
        type: 'input',
        name: 'git',
        message: 'Please provide your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email:'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Use the fs module to write data to a file
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${fileName} has been created successfully!`);
    });
}

// TODO: Create a function to initialize app
function init() {
    // Use inquirer to prompt the user with questions
    inquirer.prompt(questions).then((answers) => {
        // Generate README content based on user answers
        const readmeContent = `
# ${answers.name}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contribute}

## Tests
${answers.tests}

## Questions
If you have any questions, feel free to contact me:
- GitHub: [${answers.git}](https://github.com/${answers.git})
- Email: ${answers.email}
`;

        // Specify the file name (e.g., README.md) and call the writeToFile function
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
