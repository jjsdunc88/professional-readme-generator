// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === undefined) {
    return "";
  }

  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (license === 'APACHE 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  } else if (license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
  } else {
    return "";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === undefined) {
    return "";
  }

  if (license === 'MIT') {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === 'APACHE 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3') {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  } else {
    return "";
  }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

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

  ${renderLicenseBadge(data.projectLicense)}
  ${renderLicenseLink(data.projectLicense)}


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
