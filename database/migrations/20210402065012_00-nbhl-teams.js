
exports.up = function(knex) {
  return knex.schema.createTable('nbhl-teams', (tbl) => {
      tbl.increments()
      tbl.string('name')
      tbl.string('teamName')
      tbl.string('city')
      tbl.string('firstYearofPlay')
      tbl.string('division')
      tbl.string('tier')
      tbl.string('timezone')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('nbhl-teams');
};
