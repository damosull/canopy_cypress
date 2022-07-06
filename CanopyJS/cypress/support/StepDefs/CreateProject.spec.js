import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import CreateProjectPage from '../PageObjects/CreateProjectPage';

const createProjectPage = new CreateProjectPage();

When('User select {string} after clicking on create project option', projectType => {
  createProjectPage.create_ProjectID();
  createProjectPage.selectProjectFromCreateDD(projectType);
});

When('Create Project Modal should be displayed', () => {
  createProjectPage.checkForCreateProjectModal();
});

When('user enters {string} inside Project Name text box', (projectName) => {
  createProjectPage.setProjectName(projectName);
});

When('clicking {string} calendar icon user selects {string} {string} {string} as year month and date', (dateType, year, month, day) => {
  createProjectPage.setProjectDate(dateType, year, month, day);
});

When('user clicks the {string} drop down and selects {string}', (dropdownName,value) => {
  createProjectPage.setDropdownValue(dropdownName,value);
});

When('clicks on {string} check box', (checkboxName) => {
  createProjectPage.setcheckBoxValue(checkboxName);
});

When('user enters {string} inside {string} {string} text box',(value, fieldName, type)=>{
  createProjectPage.setTextboxValue(value, fieldName, type);
});

When('user enters {string} inside {string} {string} text area',(value, fieldName, type)=>{
  createProjectPage.setTextAreaValue(value, fieldName, type);
});

When('user enters {string} inside {string} {string} multi checkbox dropdown',(value, fieldName, type)=>{
  createProjectPage.setMultiCheckbox(value, fieldName, type);
});

Then('user clicks {string} button after filling form',(name)=>{
  createProjectPage.clickOnButton(name);
});