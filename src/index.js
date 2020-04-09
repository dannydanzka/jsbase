const CITIES = [
    'Ciudad de Mexico',
    'Bogota', 'Lima',
    'Buenos Aires',
    'Guadalajara'
];

const randomString = () => {
    return CITIES[Math.floor(Math.random() * CITIES.length)];
};

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if(!str) {
            reject(Error('Error'));
        }
        resolve(str.split("").reverse().join(""));
    });
};

module.exports = randomString;