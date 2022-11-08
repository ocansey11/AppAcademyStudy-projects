const { sayMessage } = require("../messages/say-message");

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

module.exports.sayHelloTo = sayHelloTo
// OR
// module.exports = {sayHelloTo}
