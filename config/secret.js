require("dotenv").config();
//stam
exports.config = {
    userDb:process.env.USER_DB,
    passDb:process.env.PASS_DB,
    tokenSecret:process.env.TOKEN_SECRET
}