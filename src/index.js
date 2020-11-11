// Dependencies
const { v4 } = require('uuid');
const config = require('config');
const postModel = require('./post-model');
const knex = require('knex');

// Main script
(async () => {
  try {
    const knexInstance = knex(config.get('database'));
    const postList = [];

    for(let i = 1; i < 10; i++) {
      postList.push({ id: v4(), username: v4() });
    }

    // All this posts will have the same order
    await postModel.query(knexInstance).insertAndFetch(postList);
  } catch (error) {
    console.error('Error while trying to test transaction on model plugins', { error });
  }

  process.exit(0);
})();