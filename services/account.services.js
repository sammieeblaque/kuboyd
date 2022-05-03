const { faker } = require("@faker-js/faker");

module.exports = {
  generateAccount: () => {
    const accountNumber = faker.finance(10);
    return accountNumber;
  },
};
