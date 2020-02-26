var fs = require('fs');

class Visitor {
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, nameOfAssistant) {
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.nameOfAssistant = nameOfAssistant;
    }

    save() {
        let file = this.fullName.replace(' ', '_').toLowerCase();

        fs.writeFile(`visitor_${file}.json`, JSON.stringify(this, null, 4), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        
    }

    load(fullName) {
        let file = fullName.replace(' ', '_').toLowerCase();
    
        fs.readFile(`visitor_${file}.json`, 'utf8', (err, data) => {
             if(err) throw err;
            console.log(data);
        });
    }
}



module.exports = Visitor;
var person;
person = new Visitor('Will Smith',50,'16/06/2020','22:30','Out','Picket');
person.save();
//person.load('Will Smith');