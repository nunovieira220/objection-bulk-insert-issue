exports.up = async knex => {
  await knex.schema.createTable('post', table => {
    table.uuid('id').primary();
    table.string('username');
    table.integer('order');
  });
};

exports.down = async knex => {
  await knex.schema.dropTable('post');
};