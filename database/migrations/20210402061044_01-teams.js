
exports.up = function(knex) {
  return knex.schema.createTable('teams', tbl => {
      tbl.increments()

      tbl.string('name')
      tbl.string('teamName')
      tbl.string('city')
      tbl.string('firstYearofPlay')
      tbl.string('division')
      tbl.string('tier')


  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableifExists('teams')
  
};
