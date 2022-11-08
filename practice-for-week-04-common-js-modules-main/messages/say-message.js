const  {helloMessage}  = require('../messages/hello-message')



function sayMessage(message) {
  console.log(`"${message}"`)
}

console.log(helloMessage)
module.exports.sayMessage = sayMessage
// OR
// module.exports = { sayMessage }
