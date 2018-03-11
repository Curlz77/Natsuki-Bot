const Discord = require("discord.js");

module.exports.random = function random(myArray) {
    return myArray[Math.floor(Math.random()*myArray.length)];
}
