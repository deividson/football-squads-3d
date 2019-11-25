export default {
    activePlayerId: null,
    mouseOverPlayerId: null,
    activeTeamId: 1,
    playersVisible: false,
    isLoading: true,
    match: {
        time: '14:00 Sun 24 Nov 2019',
        venue: 'Stamford Bridge, London',
    },
    teams: [
        {
            id: 1,
            title: 'Chelsea',
            color: '#3750b1',
            players: [
                {
                    id: 1,
                    teamId: 1,
                    x: 13,
                    y: 50,
                    firstName: 'Kepa',
                    lastName: 'Arrizabalaga',
                    position: 'Midfield',
                    number: '1',
                    thumbnail: 'chelsea-th-1.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 2,
                    teamId: 1,
                    x: 30,
                    y: 30,
                    firstName: 'Antonio',
                    lastName: 'Rudiger',
                    position: 'Midfield',
                    number: '2',
                    thumbnail: 'chelsea-th-2.png',
                    hero: 'chelsea-hero-2.jpg',
                    foo: 'bar',
                },
                {
                    id: 3,
                    teamId: 1,
                    x: 30,
                    y: 70,
                    firstName: 'Marcus',
                    lastName: 'Alonso',
                    position: 'Midfield',
                    number: '3',
                    thumbnail: 'chelsea-th-3.png',
                    hero: 'chelsea-hero-3.jpg',
                    foo: 'bar',
                },
                {
                    id: 4,
                    teamId: 1,
                    x: 52,
                    y: 13,
                    firstName: 'Andreas',
                    lastName: 'Christensen',
                    position: 'Midfield',
                    number: '4',
                    thumbnail: 'chelsea-th-4.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 5,
                    teamId: 1,
                    x: 48,
                    y: 40,
                    firstName: '',
                    lastName: 'Jorghino',
                    position: 'Midfield',
                    number: '5',
                    thumbnail: 'chelsea-th-5.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 6,
                    teamId: 1,
                    x: 48,
                    y: 65,
                    firstName: "N'Golo",
                    lastName: 'Kante',
                    position: 'Midfield',
                    number: '7',
                    thumbnail: 'chelsea-th-7.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 7,
                    teamId: 1,
                    x: 52,
                    y: 92,
                    firstName: 'Ross',
                    lastName: 'Barkley',
                    position: 'Midfield',
                    number: '8',
                    thumbnail: 'chelsea-th-8.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 8,
                    teamId: 1,
                    x: 70,
                    y: 25,
                    firstName: 'Pedro',
                    lastName: 'Bale',
                    position: 'Midfield',
                    number: '11',
                    thumbnail: 'chelsea-th-11.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 9,
                    teamId: 1,
                    x: 70,
                    y: 50,
                    firstName: '',
                    lastName: 'Willian',
                    position: 'Midfield',
                    number: '10',
                    thumbnail: 'chelsea-th-10.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 10,
                    teamId: 1,
                    x: 70,
                    y: 75,
                    firstName: 'Oliver',
                    lastName: 'Giroud',
                    position: 'Midfield',
                    number: '18',
                    thumbnail: 'chelsea-th-18.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 11,
                    teamId: 1,
                    x: 87,
                    y: 50,
                    firstName: 'Mason',
                    lastName: 'Mount',
                    position: 'Midfield',
                    number: '19',
                    thumbnail: 'chelsea-th-19.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
            ],
        },
        {
            id: 2,
            title: 'Barcelona',
            color: '#c9181d',
            players: [
                {
                    id: 31,
                    teamId: 2,
                    x: 87,
                    y: 50,
                    firstName: 'Gianluigi',
                    lastName: 'Donnarumma',
                    position: 'Goalie',
                    number: '99',
                    thumbnail: 'barcelona-th-99.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 30,
                    teamId: 2,
                    x: 70,
                    y: 75,
                    firstName: 'Davide',
                    lastName: 'Calabria',
                    position: 'Defender',
                    number: '2',
                    thumbnail: 'barcelona-th-2.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 29,
                    teamId: 2,
                    x: 70,
                    y: 50,
                    firstName: 'Andrea',
                    lastName: 'Conti',
                    position: 'Midfield',
                    number: '12',
                    thumbnail: 'barcelona-th-12.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 28,
                    teamId: 2,
                    x: 70,
                    y: 25,
                    firstName: 'Matteo ',
                    lastName: 'Musacchio',
                    position: 'Midfield',
                    number: '22',
                    thumbnail: 'barcelona-th-22.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 27,
                    teamId: 2,
                    x: 52,
                    y: 92,
                    firstName: 'Ross',
                    lastName: 'Barkley',
                    position: 'Midfield',
                    number: '8',
                    thumbnail: 'chelsea-th-8.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 26,
                    teamId: 2,
                    x: 48,
                    y: 65,
                    firstName: "N'Golo",
                    lastName: 'Kante',
                    position: 'Midfield',
                    number: '7',
                    thumbnail: 'chelsea-th-7.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 25,
                    teamId: 2,
                    x: 48,
                    y: 40,
                    firstName: '',
                    lastName: 'Jorghino',
                    position: 'Midfield',
                    number: '5',
                    thumbnail: 'chelsea-th-5.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 24,
                    teamId: 2,
                    x: 52,
                    y: 13,
                    firstName: 'Andreas',
                    lastName: 'Christensen',
                    position: 'Midfield',
                    number: '4',
                    thumbnail: 'chelsea-th-4.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 23,
                    teamId: 2,
                    x: 30,
                    y: 70,
                    firstName: 'Marcus',
                    lastName: 'Alonso',
                    position: 'Midfield',
                    number: '3',
                    thumbnail: 'chelsea-th-3.png',
                    hero: 'chelsea-hero-3.jpg',
                    foo: 'bar',
                },
                {
                    id: 22,
                    teamId: 2,
                    x: 30,
                    y: 30,
                    firstName: 'Antonio',
                    lastName: 'Rudiger',
                    position: 'Midfield',
                    number: '2',
                    thumbnail: 'chelsea-th-18.png',
                    hero: 'chelsea-hero-2.jpg',
                    foo: 'bar',
                },
                {
                    id: 21,
                    teamId: 2,
                    x: 13,
                    y: 50,
                    firstName: 'Kepa',
                    lastName: 'Arrizabalaga',
                    position: 'Midfield',
                    number: '1',
                    thumbnail: 'chelsea-th-19.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
            ],
        },
    ],
};
