var fs = require('fs');
const Visitor = require('../src/visitor.js');
const load = require('../src/visitor.js');
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
    it('should return the full name in a .json file', () => {
        expect(
        instance_of.fullName).toBe(myJSON.fullName);

describe('save function', function () {
    var info = fs.readFileSync(`visitor_${file}.json`,"utf8");
    myJSON = JSON.parse(info);
    it('should return the age in a .json file', () => {        
        expect(
        instance_of.age).toBe(myJSON.age);

describe('save function', function () {
    var info = fs.readFileSync(`visitor_${file}.json`,"utf8");
    myJSON = JSON.parse(info);
    it('should return an object with date and time of visit in a .json file', () => {
        expect(
        instance_of.dateOfVisit).toBe(myJSON.dateOfVisit);
        expect(
        instance_of.timeOfVisit).toBe(myJSON.timeOfVisit);

describe('save function', function () {
    var info = fs.readFileSync(`visitor_${file}.json`,"utf8");
    myJSON = JSON.parse(info);
    it('should return an object with comment and name of assistant in a .json file', () => {
        expect(
        instance_of.comments).toBe(myJSON.comments);
        expect(
        instance_of.nameOfAssistant).toBe(myJSON.nameOfAssistant);
    });
});

describe('the load function', function () {
    var info = fs.readFileSync(`visitor_${file}.json`,"utf8");
    myJSON = JSON.parse(info)
    it('should load the .json file', function () {
        expect(instance_of).toEqual(myJSON);
    });
});
