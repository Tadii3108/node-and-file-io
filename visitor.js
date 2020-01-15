var fs = require('fs');

class Visitor {
    constructor(fullName, age, dateOfVisit, timeOfVisit,comments, nameOfAssistant) {
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.nameOfAssistant = nameOfAssistant;
    }

    async save() {
        let mention = this.fullName.replace(' ', '_').toLowerCase();

        fs.appendFile(`visitor_${mention}.json`, JSON.stringify(this, null, 4), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        return(this);
    }
}

let lwazi = new Visitor("Lwazi Mtshali", 26,"15/01/2020","12:19","comments", "tadiwa");
lwazi.save();

let tadi = new Visitor("Tadiwa Zingoni", 21,"15/01/2020","12:20","the calmest ever. pleasing to work with", "marylyn");
tadi.save();
