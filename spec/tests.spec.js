var fs = require('fs');
const Visitor = require('../src/visitor');

var myJSON;

let instance_of = {
    fullName: 'John Doe',
    age: 89,
    dateOfVisit: '23/10/2020',
    timeOfVisit: '13:30',
    comments: 'In',
    nameOfAssistant: 'Jane Doe'
}

const visitor = new Visitor(
instance_of.fullName,
instance_of.age,
instance_of.dateOfVisit,
instance_of.timeOfVisit,
instance_of.comments,
instance_of.nameOfAssistant
);

let file = visitor.fullName.replace(' ', '_').toLowerCase();

describe('save() function ', function(){
    it('must be a function', function() {
            expect(visitor.save).toBeTruthy();
        });
    });

describe('save function', function () {
    var info = fs.readFileSync(`visitor_${file}.json`,"utf8");
    myJSON = JSON.parse(info);
    it('should save data in a .json file', function () {
        expect(instance_of.fullName).toBe(myJSON.fullName);
        expect(instance_of.dateOfVisit).toBe(myJSON.dateOfVisit);
        expect(instance_of.timeOfVisit).toBe(myJSON.timeOfVisit);
        expect(instance_of.age).toBe(myJSON.age);
        expect(instance_of.comments).toBe(myJSON.comments);
        expect(instance_of.nameOfAssistant).toBe(myJSON.nameOfAssistant);
        });
});


describe('load() function ', function(){
    it('must be a function', function() {
            expect(visitor.load).toBeDefined();
        });
    });

describe('the load function', function() {
    var info = fs.readFileSync(`visitor_${file}.json`,"utf8");
    myJSON = JSON.parse(info)
    it('should load the .json file', function() {
        expect(instance_of).toEqual(myJSON);
    });
});