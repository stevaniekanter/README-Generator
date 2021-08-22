// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Project Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is licensed under the ${renderLicenseBadge(data.license)} license.

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.tests}
  

  ## Questions
  Please contact me at ${data.questions} for any questions.

  https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
