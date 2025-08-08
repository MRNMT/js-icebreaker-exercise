
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


questLog.unshift("Rescue the Blacksmith's Cat");
console.log("After adding an urgent quest:", questLog);


let delegatedQuest = questLog.shift();
console.log("Delegated quest:", delegatedQuest);
console.log("Updated quest log:", questLog);

questLog.splice(1, 1); 
console.log("After removing a quest:", questLog);


questLog.splice(1, 0, "Slay the Dragon of Mount Doom");
console.log("After adding a new quest:", questLog);

let questSummary = questLog.join(" | ");
console.log("Quest summary for the king:", questSummary);
