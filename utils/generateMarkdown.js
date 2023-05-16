// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.projectTitle}
 
  ## Description

  ${data.projectDescription}

  ## Table of Contents

  
- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

  ## Installation

  ${data.projectInstallation}

  ## Usage

  ${data.projectUsage}

  ## License

  ${data.projectLicense}

  ## Contributing

  ${data.projectContributing}

  ## Tests

  ${data.projectTests}

  ## Questions

  ### Please see below for additional information about this project:

  [GitHub](https://github.com/${data.projectUsername})

  [Email](mailto:${data.projectEmail})
`;
}

module.exports = generateMarkdown;
