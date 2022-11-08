const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask the user a question
rl.question("What's up, doc? ", answer => {
  // print their response
  console.log("you responded: " + answer);
  // close the interface
  rl.close();
});

console.log("DONE!");

// TWO NESTED CODE

// this code is a partial snippet from previous examples

rl.question("What's up, doc? ", firstAnswer => {
    console.log(firstAnswer + " is up.");

    rl.question("What's down, clown? ", secondAnswer => {
      console.log(secondAnswer + " is down.");

      rl.question("What's left, Jeff? ", thirdAnswer => {
        console.log(thirdAnswer + " is left.");
        rl.close();
      });
    });
  });



//   HANDLE RESPONSE THREE

  rl.question("What's up, doc? ", handleResponseOne);

function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + " is up.");
  rl.question("What's down, clown? ", handleResponseTwo);
}

function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + " is down.");
  rl.question("What's left, Jeff? ", handleResponseThree);
}

function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + " is left.");
  rl.close();
}
