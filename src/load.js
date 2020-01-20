var fs = require('fs');

async function load(fullName) {
    let mention = fullName.replace('_', ' ').toLowerCase();

    fs.readFile(`visitor_${mention}.json`, 'utf8', (err, data) => {
        console.log(data);
    });
}

load("Tadiwa Zingoni");
load("Lwazi Mtshali");
