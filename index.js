class Room {
  constructor() {
  }
};

/* 
- At Line 1, make a Room class.
- Define a "message" for each room (with \n). Briefly describe the current room. See paper for Zork Notes v2.
- Messages for rooms are static. Cannot change. Remember to use async-await-ask to get to rooms.
- Use camelCase to name the rooms. See line 15.
- Write cursor = await ask(">_"). Use if...else blocks based on cursor input. Use console.log!
- Note: roomInv and playerInv are arrays. Use array.push(beginning of array) and array.pop(end of array)
- Make sure to alter roomInv and playerInv as needed (see line 11)
- Example for line 8 could be: room.message = => {console.log("You are outside your apartment")}
- Try to define user input strings with || (OR operator), stick with .toUpperCase for simplicity
- On line 31, use const for each room, in order of progression, ex., const busStop = new Room();
- If I can't establish player back-and-forth direction between rooms, don't sweat it
- Write function moveToRoom(newRoom) {room.message();} -- prior to line# reading 'async function startGame()'
*/

const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

const busStop = new Room();
  this.roomInv = ["sticks", "bench"]
busStop.message = () => {
  console.log("You are standing at a bus stop outside your apartment in Burlington.\nYou have bus fare in your pocket.\nType I to see Room Inventory, or PI to see Player Inventory.\nWould you like to WALK downtown or RIDE the bus?")
}

const churchStreet = new Room();
  this.roomInv = ["leaves", "bench"]
churchStreet.message = () => {
  console.log("You are downtown on Church Street outside of Ben & Jerrys.\nYou have some time to spare.\nWould you like to GO to Ben & Jerrys for ice cream, or WALK down Church Street?")
}

const benJerrys = new Room();
  this.roomInv = ["tables", "chairs", "VW bus", "ice cream"]
benJerrys.message = () => {
  console.log("Welcome to Ben & Jerrys!\nWould you like to BUY ice cream or a SHIRT?")
}

const churchSt2 = new Room();
  this.roomInv = ["leaves", "bench"]
churchSt2.message = () => {
  console.log("Wow! Remember to look both ways before crossing the street.\nYou almost got smushed by a truck!")
}

const midTown = new Room();
  this.roomInv = ["sticks", "parking meters"]
midTown.message = () => {
  console.log("You are standing outside 182 Main Street, home to Burlington Code Academy.\nThere is a locked door in front of you, with a 0-9 keypad on the handle.\nTry a simple 5-digit code.")
}

const acadFoyer = new Room();
  this.roomInv = ["sign"]
acadFoyer.message = () => {
  console.log("There is a sign on the wall.\nIt says `BCA is on the 3rd floor. There will be coffee and tea in the kitchenette.\nIf you see the yoga studio, you went too far.`\nYou are tempted to TAKE the sign.")
} //In-game, remember to respond if player tries to TAKE the sign ("Sorry, you can't take the sign. Stealing isn't cool, man.").

const bcaLab = new Room();
  this.roomInv = ["desks", "chairs", "laptops", "tea", "coffee", "7 Days newspaper"]
bcaLab.message = () => {
  console.log("Welcome to the BCA lab. Lecture will begin shortly.\nTake a COPY of 7 Days.\nHelp yourself to TEA or COFFEE, and have a seat.\n")
} //In-game, remember to move 7 Days from roomInv to playerInv arrays. Typing TEA or COFFEE puts item in playerInv. DRINK removes beverage item from playerInv.

const midTown2 = new Room();
  this.roomInv = ["sticks", "parking meters"]
midTown2.message = () => {
  console.log("Whew! That was a heck of an involved lecture. You can WALK back to Church Street.")
} //In-game, code for room change from midTown2 to churchStreet3

const churchStreet3 = new Room();
  this.roomInv = ["leaves", "bench"]
churchStreet3.message = () => {
  console.log("Time to go home. Nice. Would you like to WALK or RIDE the bus?")
} //In-game, code for room change from churchStreet3 to apartment, regardless if WALK or RIDE is entered

const apartMent = new Room();
  this.roomInv = ["couch", "cat", "TV"]
apartMent.message = () => {
  console.log("Now you're home-sweet-home. DROP your stuff, put your feet up, and chill.\nType DONE to exit the game.")
}

function moveToRoom() {
  room.message(); //from project instructions
}

startGame();

let playerInv = ["water bottle (full)", "cigarettes", "bus fare2", "bus fare1"];
let roomInv = [];

async function startGame() {
  let welcomeMessage = await ask (`Welcome to Zorkington!
  This is not a game of skill. It about exploration.
  Relax, there are no grues here. Are you ready?\n>_`)
  if (welcomeMessage.toUpperCase === 'yes' || 'y' || 'uh huh') {
    moveToRoom(busStop);
  } 
  else {console.log("That's OK. Come back when you're ready.")
    startGame()}
};

async function moveToRoom(busStop) {
  busStop.message()
  let cursor = await ask (">_") 
  if (cursor.toUpperCase === 'I') {
    console.log("This room contains " + busStop.roomInv());
  }
  else if (cursor.toUpperCase === 'PI') {
    console.log("You are carrying " + busStop.playerInv());
  }
  else if (cursor.toUpperCase === 'Ride') {
    playerInv.pop();
  }
  else {
    moveToRoom(churchStreet);
  }
}

async function moveToRoom(churchStreet) {
  churchStreet.message();
  let cursor = await ask (">_")
  if (cursor.toUpperCase === 'Go') {
    moveToRoom(benJerrys);
  }
  else {
    moveToRoom(churchSt2);
  }
}

async function moveToRoom(benJerrys) {
  benJerrys.message()
  let cursor = await ask (">_")
  if (cursor.toUpperCase === 'Buy') {
    roomInv.pop();
    playerInv.push("ice cream");
  }
  else if (cursor.toUpperCase === 'Shirt') {
    playerInv.push("shirt");
  }
  else if (cursor.toUpperCase === 'Go' || 'Leave') {
    moveToRoom(churchSt2);
  }
  else if (cursor.toUpperCase === "Eat" || "Eat ice cream") {
    playerInv.pop();
    roomInv.push("ice cream");
  }
}

async function moveToRoom(churchSt2) {
  churchSt2.message();
  let cursor = await ask (">_")
  if (cursor.toUpperCase === 'Walk' || 'Go' || 'Leave') {
    moveToRoom(midTown);
  }
  else {
    moveToRoom(midTown);
  }
}

async function moveToRoom(midTown) {
  midTown.message();
  let entry = await ask ("Try a simple 5-digit code, such as 12345")
  if (entry === '12345') {
    console.log("You're in! Enter the foyer and read the sign.")
    moveToRoom(acadFoyer);
  }
  else {
    console.log("Sorry, wrong code. Try again.")
    moveToRoom(midTown);
  }
}

async function moveToRoom(acadFoyer) {
  acadFoyer.message();
  let cursor = await ask (">_")
  if (cursor.toUpperCase === 'Take' || 'Take Sign' || 'Steal' || 'Steal Sign') {
    console.log("You can't take the sign. Stealing isn't cool, man.")
  }
  else if (cursor.toUpperCase === 'Go' || 'Go Upstairs' || 'Up' || 'Upstairs') {
    moveToRoom(bcaLab);
  }
}

async function moveToRoom(bcaLab) {
  bcaLab.message();
  let cursor = await ask (">_")
  if (cursor.toUpperCase === 'Copy' || 'Paper') {
    roomInv.pop();
    playerInv.push("7 Days paper")
  }
  else if (cursor.toUpperCase === 'Coffee') {
    roomInv.pop();
    playerInv.push("Coffee")
  }
  else if (cursor.toUpperCase === 'Tea') {
    roomInv.pop();
    playerInv.push("Tea")
  }
  else if (cursor.toUpperCase === 'Go' || 'Leave' || 'Down' || 'Downstairs') {
    console.log("That's enough lecture for today. State machines are really confusing!")
    moveToRoom(midTown2);
  }
}

async function moveToRoom(midTown2) {
  midTown2.message();
  let cursor = await ask (">_")
  if (cursor.toUpperCase === 'Walk' || 'Walk Downtown' || 'Go' || 'Go Downtown') {
    moveToRoom(churchStreet3);
  }
  else {
    console.log("What do you feel like doing?")
    moveToRoom(midTown2);
  }
}

async function moveToRoom(churchStreet3) {
  churchStreet3.message();
  let cursor = await ask (">_")
  if (cursor.toUpperCase === 'Walk') {
    moveToRoom(apartMent);
  }
  else if (cursor.toUpperCase === 'Ride') {
    playerInv.pop();
    moveToRoom(apartMent);
  }
}

async function moveToRoom(apartMent) {
  apartMent.message();
  let cursor = await ask (">_")
  if (cursor.toUpperCase === 'Drop') {
    playerInv.length = 0
  }
  else if (cursor.toUpperCase === 'Done') {
    console.log("\n>_")
    process.exit();
  }
}