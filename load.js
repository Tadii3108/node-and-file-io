var fs = require('fs');

async function load(fullName) {
    let file = fullName.replace(' ', '_').toLowerCase();

    fs.readFile(`visitor_${file}.json`, 'utf8', (err, data) => {
        console.log(data);
    });
}

load("tadiwa");
load("lwazi");
