const withSass = require('@zeit/next-sass')

module.exports = withSass({
    cssModules: true,
    env: {
        apiActive: true,
        repository: 'https://github.com/puntope/whatcity',
        cities: [
            {
                name: 'Madrid',
                code: 'MAD',
                id: '3117735',
                country: 'Spain',
                picture: '/madrid.jpg',
                flights: {
                    price: '100'
                },
                weatherAvg: [
                    10,
                    12,
                    16,
                    18,
                    22,
                    28,
                    32,
                    31,
                    26,
                    19,
                    13,
                    10
                ]
            },
            {
                name: 'Amsterdam',
                id: '2759794',
                code: 'AMS',
                country: 'Netherlands',
                picture: '/amsterdam.jpg',
                flights: {
                    price: '70'
                },
                weatherAvg: [
                    6,
                    6,
                    10,
                    13,
                    17,
                    20,
                    22,
                    22,
                    19,
                    15,
                    10,
                    7
                ]
            },
            {
                name: 'Budapest',
                id: '3054638',
                code: 'BUD',
                country: 'Hungary',
                picture: '/budapest.jpg',
                flights: {
                    price: '160'
                },
                weatherAvg: [
                    0,
                    6,
                    11,
                    15,
                    17,
                    17,
                    17,
                    13,
                    8,
                    4,
                    3,
                    0
                ]
            },

        ],
        weather: {
            url: 'https://api.openweathermap.org/data/2.5/weather',
            apiKey: '477d1470a732fdc4a8836fe618ad44ea',
        },
        flights: {
            url: 'https://api.skypicker.com/flights',
        }
    }
})