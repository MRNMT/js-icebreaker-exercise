
const questLog = [
  "Collect 10 Firefly Wings",
  "Defeat the Goblin King",
  "Find the Lost Sword of Oakhaven"
];
console.log("Initial quest log:", questLog);


console.log("The hero has " + questLog.length + " quests.");


console.log("The first quest is:", questLog[0]);


questLog.push("Deliver the Royal Scroll");
console.log("After receiving a new quest:", questLog);


let completedQuest = questLog.pop();
console.log("Completed quest:", completedQuest);
console.log("Updated quest log:", questLog);



