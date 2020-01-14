var fs = require('fs');

async function load(fullName) {
    let file = fullName.replace(' ', '_').toLowerCase();

    fs.readFile(`visitor_${file}.json`, 'utf8', (err, data) => {
        //if (err) throw err;
        console.log(data);
    });
}

load("Lwazi");
load("Tadiwa");

module.export = {load}