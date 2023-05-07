const connection = require('../config/connection');
const { Thoughts, Users } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thoughts.deleteMany({});

  // Drop existing users
  await Users.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    // Get some random reaction objects using a helper function that we imported from ./data
    const reactions = getRandomReactions(20);

    const username = getRandomName();
    const email = fullName.split(' ')[0];
    const thoughts = fullName.split(' ')[1];
    const friends = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    users.push({
      username,
      email,
      thoughts,
      friends,
    });
  }

  // Add users to the collection and await the results
  await Users.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thoughts.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    users: [...users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
