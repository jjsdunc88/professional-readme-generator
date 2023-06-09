//Function to return license badge
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
  } else if (license === 'None') {
    return 'None'
  } else {
    return "";
  }
}


//Function to return license link
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


//Function to generate markdown for README

function generateMarkdown(data) {

  return `# ${data.projectTitle} ${renderLicenseBadge(data.projectLicense)}
 
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

  This application is covered under the ${data.projectLicense} License. 

  Please see link for additional information:
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
