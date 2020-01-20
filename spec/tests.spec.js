const Visitor = require('./../src/visitor.js');
let a = new Visitor;
const {load} = require('../src/load');
const visitor = {
    'fullName': 'Lwazi Mtshali',
    'age': 26,
    'dateOfVisit': '23/11/2019',
    'timeOfVisit': '23:44',
    'comments': 'Well done',
    'nameOfAssistant': 'Tadiwa Zingoni'
}


describe('saving a file', function() {
   let fullName = "tadiwa zingoni";

    it('should replace space with underscore', () => {
        expect(a.save(fullName)).toBe('tadiwa_zingoni');
    });
});

//describe('node file io', function () {
//    it('should return an object', () => {
//        let tadiwa = new Visitor('Tadiwa Zingoni', 21, '31/08/2020', '17:22', 'Pleasing to work with!', 'Lwazi Mtshali');

//        let strTadiwa = '{"fullName": "Tadiwa Zingoni","age": 21,"dateOfVisit": "15/01/2020","timeOfVisit": "12:20","comments": "Pleasing to work with!","nameOfAssistant": "Lwazi Mtshali"}';
//        expect(JSON.stringify(tadiwa)).toBe(strTadiwa);
//    });
//});

//describe('saves visitors data', function () {
//    let tadi = new Visitor;

//    it('should return visitos full name', function (){
//        expect(tadi.save()).toBe(visitor_tadiwa_zingoni.json)
//    });
//});

//describe('function that takes name and grabs a Visitor object file', ()=>{
//    let Tadiwa = new Visitor;

//   it('should return visitor', ()=>{
//        expect(load("Tadiwa Zingoni")).toBe(visitor_tadiwa_zingoni.json)
//   });
//});