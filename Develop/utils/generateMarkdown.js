// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      console.log("https://img.shields.io/badge/license-MIT-blue");
      break;
    case "Apache 2.0":
      console.log("https://img.shields.io/badge/license-Apache%202.0-blue");
      break;
    case "GPL 3.0":
      console.log("https://img.shields.io/badge/license-GPL%203.0-blue");
      break;
    case "BSD 3":
      console.log("https://img.shields.io/badge/license-BSD%203-blue");
      break;
  }
}

"MIT", "Apache 2.0", "GPL 3.0", "BSD 3";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Github] (#github)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ##Github
  ${data.github}

  ## Questions
  Please feel free to contact me at ${data.questions} for any questions.
`;
}

module.exports = generateMarkdown;
