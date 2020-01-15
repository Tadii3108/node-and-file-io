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

    async save() {
        let fullName = this.fullName.replace(' ', '_').toLowerCase();

        fs.appendFile(`visitor_${this.fullName}.json`, JSON.stringify(this, null, 4), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
}

let lwazi = new Visitor("lwazi", 26, '14/01/2020', "10:53", 'comments', "tadiwa");
lwazi.save();

let tadi = new Visitor("tadiwa", 21, '22/10/2019', "13:00", "the calmest ever. pleasing to work with", "marylyn");
tadi.save();
