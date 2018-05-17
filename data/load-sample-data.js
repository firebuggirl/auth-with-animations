require('dotenv').config({ path: __dirname + '/../variables.env' });
const fs = require('fs');

const mongoose = require('mongoose');

//mongoose.connect(process.env.LOCAL_DB);
//mongoose.connect(process.env.MONGODB_URI);//mLab connection string
mongoose.connect(process.env.DOCKER_DB);//for Docker development change `localhost`` to `mongodb` in connection string...needs to match name of image container!!!
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises


const Contact = require('../models/Contact');

const contacts = JSON.parse(fs.readFileSync(__dirname + '/contacts.json', 'utf-8'));

async function deleteData() {
  console.log('😢😢 Goodbye Data...');
  await Contact.remove();
  console.log('Data Deleted. To load sample data, run\n\n\t npm run sample\n\n');
  process.exit();
}

async function loadData() {
  try {
    await Contact.insertMany(contacts);
    console.log('👍👍👍👍👍👍👍👍 Done!');
    process.exit();
  } catch(e) {
    console.log('\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n');
    console.log(e);
    process.exit();
  }
}
if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}
