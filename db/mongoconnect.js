const mongoose = require('mongoose');
const {config} = require("../config/secret");
main().catch(err => console.log(err));

async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(`mongodb+srv://${config.userDb}:${config.passDb}@cluster0.qzeewrh.mongodb.net/example`);
    console.log("mongo connect black 23")
}