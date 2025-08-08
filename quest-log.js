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

questLog.unshift("Rescue the Blacksmith's Cat")//add the quest at the beggining
console.log(questLog)

console.log("The removed quest is: "+questLog.shift())//removes first quest
console.log(questLog)

console.log("The removed quest is: "+questLog.splice(1,1))//removes 1 quest from position 1
console.log(questLog)

questLog.splice(1,0, "Slay the Dragon of Mount Doom");//adds 1 quest from position 1
console.log(questLog)

console.log(questLog.join(' | '))

