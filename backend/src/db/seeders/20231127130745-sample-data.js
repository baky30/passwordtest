const db = require('../models');
const Users = db.users;

const Organizations = db.organizations;

const OrganizationsData = [
  {
    name: 'Theodosius Dobzhansky',
  },

  {
    name: 'Nicolaus Copernicus',
  },

  {
    name: 'Marcello Malpighi',
  },

  {
    name: 'Theodosius Dobzhansky',
  },

  {
    name: 'Ludwig Boltzmann',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setOrganization) {
    await User3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User4 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (User4?.setOrganization) {
    await User4.setOrganization(relatedOrganization4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('organizations', null, {});
  },
};
