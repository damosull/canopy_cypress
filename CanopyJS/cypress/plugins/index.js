const cucumber = require('cypress-cucumber-preprocessor').default;

// eslint-disable-next-line no-unused-vars
module.exports = (on, config, text1) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber());

  on('task', {
    setVal: (val) => {
      return (text1 = val);
    },
    getVal: () => {
      return text1;
    }
  });
};