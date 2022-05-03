const encryption = require("../middleware/encryption");
const { faker } = require("@faker-js/faker");
const userModels = require("../models/user.models");

const generatData = async () => {
  const seedData = [
    {
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      password: encryption.encryptPassword(faker.internet.password),
      role: Number("1"),
    },
  ];
  for (let i = 0; i <= 8; i++) {
    await userModels.delteMany({});
    await userModels.insertMany(seedData);
    console.log(seedData);
  }
};
