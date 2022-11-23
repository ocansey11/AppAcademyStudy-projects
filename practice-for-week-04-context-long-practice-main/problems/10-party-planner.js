// Your code here
class PartyPlanner{
	constructor(){
		this.guestList = []
	}

	addToGuestList = (name) =>{
		this.guestList.push(name)
	}

	throwParty(){
		let guestList = this.guestList
		console.log(guestList)
		if(this.guestList.length >= 1)
		{
			return 'Welcome to the party ' + guestList.join(' and ')
		}
		else if(this.guestList.length === 1)
		{
			return	'Welcome to the party ' + guestList[0]
		}
		else
		{
			return 'Gotta add people to the guest list'
		}
	}
}

//  Example 1
// Testing with Node.js
const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

// Example 2
const party2 = new PartyPlanner();
console.log(party2.throwParty()); // prints "Gotta add people to the guest list"

party2.addToGuestList("Lucy");
console.log(party2.throwParty()); // prints "Welcome to the party Lucy"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
