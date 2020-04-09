const text = 'Hola Mundo';
const fruits = ['manzana', 'melon', 'banana'];
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""));
};
const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if(!str) {
            reject(Error('Error'));
        }
        resolve(str.split("").reverse().join(""));
    });
};


test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/);
});

test('Tenemos una banana?', () => {
    expect(fruits).toContain('banana');
});

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
});

test('Verdadero', () => {
    expect(true).toBeTruthy();
});

test('Probar un Callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    })
});

test('Probar un promesa', () => {
    return reverseString2('Hola')
        .then(string => {
            expect(string).toBe('aloH');
        });
});

test('Probar async/await', async () => {
    const string = await reverseString2('Hola');
    expect(string).toBe('aloH');
});

// afterEach(() => console.log('Despues de cada prueba'));
// afterAll(() => console.log('Despues de todas pruebas'));
// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las pruebas'));
