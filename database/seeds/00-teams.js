
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nbhl-teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('nbhl-teams').insert([
        {
          id: 1,
          divisionId: 1,
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
          divisionId: 1,
          name: 'Buffalo Goodfellas',
          teamName: 'Goodfellas',
          city: 'Buffalo',
          firstYearofPlay: '2021',
          division: 'Buffalo',
          tier: '2',
          timezone: 'EST'
        },
        {
          id: 3,
          divisionId: 1,
          name: 'Liverpool Hockey Club',
          teamName: 'Liverpool',
          city: 'Liverpool',
          firstYearofPlay: '2021',
          division: 'Buffalo',
          tier: '2',
          timezone: 'EST'
        },
        {
          id: 4,
          divisionId: 1,
          name: 'Nickel City Smoke',
          teamName: 'Smoke',
          city: 'Nickel City',
          firstYearofPlay: '2021',
          division: 'Buffalo',
          tier: '2',
          timezone: 'EST'
        },
        {
          id: 5,
          divisionId: 1,
          name: 'Queen City Quakes',
          teamName: 'Quakes',
          city: 'Queen City',
          firstYearofPlay: '2021',
          division: 'Buffalo',
          tier: '2',
          timezone: 'EST'
        },
        {
          id: 6,
          divisionId: 1,
          name: 'Rochester Rink Rats',
          teamName: 'Rink Rats',
          city: 'Rochester',
          firstYearofPlay: '2021',
          division: 'Buffalo',
          tier: '2',
          timezone: 'EST'
        },
        {
          id: 7,
          divisionId: 2,
          name: 'Bay Area Bashers',
          teamName: 'Bashers',
          city: 'Bay Area',
          firstYearofPlay: '2021',
          division: 'California',
          tier: '2',
          timezone: 'PST'
        },
        {
          id: 8,
          divisionId: 2,
          name: 'Cali Pama Golden Knights',
          teamName: 'Golden Knights',
          city: 'Cali Pama',
          firstYearofPlay: '2021',
          division: 'California',
          tier: '2',
          timezone: 'PST'
        },
        {
          id: 9,
          divisionId: 2,
          name: 'California Wildfires',
          teamName: 'Wildfires',
          city: 'California',
          firstYearofPlay: '2021',
          division: 'California',
          tier: '2',
          timezone: 'PST'
        },
        {
          id: 10,
          divisionId: 2,
          name: 'Las Vegas Shiners',
          teamName: 'Shiners',
          city: 'Las Vegas',
          firstYearofPlay: '2021',
          division: 'California',
          tier: '2',
          timezone: 'PST'
        },
        {
          id: 11,
          divisionId: 2,
          name: 'Orange County Wolves',
          teamName: 'Wolves',
          city: 'Orange County',
          firstYearofPlay: '2021',
          division: 'California',
          tier: '2',
          timezone: 'PST'
        },
        {
          id: 12,
          divisionId: 2,
          name: 'SoCal Royalty',
          teamName: 'Royalty',
          city: 'SoCal',
          firstYearofPlay: '2021',
          division: 'California',
          tier: '2',
          timezone: 'PST'
        },
        {
          id: 13,
          divisionId: 3,
          name: 'Chicago Dolphins',
          teamName: 'Dolphins',
          city: 'Chicago',
          firstYearofPlay: '2021',
          division: 'California',
          tier: '2',
          timezone: 'PST'
        },
        
        
      ]);
    });
};
