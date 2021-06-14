const { GoogleSpreadsheet } = require('google-spreadsheet');

const creds = require('./client_secret.json')

async function start() {
    const doc = new GoogleSpreadsheet('1Q9eIc62Mt2YpGNZ166nS0b03YGV8YTn58_tBHk8GK8g');
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    console.log(doc.title)
}

start();
