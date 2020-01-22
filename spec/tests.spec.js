var fs = require('fs');
const Visitor = require('../src/visitor.js');
const {load} = require('../src/load');
let myJSON;


let instance_of = {
    fullName: 'John Doe',
    age: 89,
    dateOfVisit: '23/10/2020',
    timeOfVisit: '13:30',
    comments: 'In',
    nameOfAssistant: 'Jane Doe'
}

const person = new Visitor(
instance_of.fullName,
instance_of.age,
instance_of.dateOfVisit,
instance_of.timeOfVisit,
instance_of.comments,
instance_of.nameOfAssistant
);

let file = person.fullName.replace(' ', '_').toLowerCase();


describe('save function', function () {
    var info = fs.readFileSync(`visitor_${file}.json`,"utf8");
    myJSON = JSON.parse(info);
    it('should return an object in a .json file', () => {
        expect(
        instance_of.fullName).toBe(myJSON.fullName);
        expect(
        instance_of.age).toBe(myJSON.age);
        expect(
        instance_of.dateOfVisit).toBe(myJSON.dateOfVisit);
        expect(
        instance_of.timeOfVisit).toBe(myJSON.timeOfVisit);
        expect(
        instance_of.comments).toBe(myJSON.comments);
        expect(
        instance_of.nameOfAssistant).toBe(myJSON.nameOfAssistant);
    });
});

describe('load function', function () {
    var info = fs.readFileSync(`visitor_${file}.json`,"utf8");
     myJSON = JSON.parse(info)
    it('should load .json file', function () {
        expect(
    instance_of).toEqual(myJSON);
    });
});