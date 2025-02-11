Cypress Cucumber Example
This project demonstrates how to set up Cypress with the Cucumber preprocessor for BDD (Behavior-Driven Development) testing. It includes examples of running tests with custom steps and reading test data from a JSON file.

Prerequisites
Node.js (v16 or higher)
npm or yarn (package manager)
Setup
Clone the repository or download the project files.
Install the required dependencies:

npm install

Run the tests:

npx cypress open
This will open the Cypress Test Runner. Choose your desired browser and run the tests.

Project Structure
cypress/ — Contains the tests, features, and support files.
e2e/ — Folder containing your feature files and step definitions.
support/ — Custom commands and setup configuration.
loginData.json — JSON file that contains login credentials for the tests.
