const { message1,message2, message3 } = require("./messages");
const { giveMessageToMrsPotato } = require("./send-messages/give-message-to-mrs-potato");
const { sayHelloTo } = require("./send-messages/say-hello-to");


 let msg1 = message1
 let msg2 = message2
 let msg3 = message3
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);

module.exports = {}
