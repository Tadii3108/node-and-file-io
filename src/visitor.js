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
        let file = this.fullName.replace(' ', '_').toLowerCase();

        fs.appendFile(`visitor_${file}.json`, JSON.stringify(this, null, 4), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        
    }
}
module.exports = Visitor;