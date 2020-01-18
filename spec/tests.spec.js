let {save} = require('../src/visitor.js');
let {load} = require('../src/load.js');


describe('saving a file', function() {
    let fullName = "tadiwa zingoni";

    it('should replace space with underscore', () => {
        expect(fullName).toBe('tadiwa_zingoni');
    });
});

describe('node file io', function () {
    it('should return an object', () => {
        let tadiwa = new Visitor('Tadiwa Zingoni', 21, '31/08/2020', '17:22', 'Pleasing to work with!', 'Lwazi Mtshali');

        let strTadiwa = '{"fullName": "Tadiwa Zingoni","age": 21,"dateOfVisit": "15/01/2020","timeOfVisit": "12:20","comments": "Pleasing to work with!","nameOfAssistant": "Lwazi Mtshali"}';
        expect(JSON.stringify(tadiwa)).toBe(strTadiwa);
    });
});