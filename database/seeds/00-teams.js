
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nbhl-teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('nbhl-teams').insert([
        {
          id: 1,
          name: 'Buffalo 716ers',
          teamName: '716ers',
          city: 'Buffalo',
          firstYearofPlay: '2021',
          division: 'Buffalo',
          tier: '2',
          timezone: 'EST'
        },
        {
          id: 2,
          name: 'Buffalo Goodfellas',
          teamName: 'Goodfellas',
          city: 'Buffalo',
          firstYearofPlay: '2021',
          division: 'Buffalo',
          tier: '2',
          timezone: 'EST'
        },
      ]);
    });
};
