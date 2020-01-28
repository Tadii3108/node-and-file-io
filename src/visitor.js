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

        fs.writeFile(`visitor_${file}.json`, JSON.stringify(this, null, 4), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        
    }
}

async function load(fullName) {
    let file = fullName.replace('_', ' ').toLowerCase();

    fs.readFile(`visitor_${file}.json`, 'utf8', (err, data) => {
         if(err) throw err;
        console.log(data);
    });
}

module.exports = Visitor;
module.exports = load;