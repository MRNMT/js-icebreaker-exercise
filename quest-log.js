questLog.unshift("Rescue the Blacksmith's Cat")//add the quest at the beggining
console.log(questLog)

console.log("The removed quest is: "+questLog.shift())//removes first quest
console.log(questLog)

console.log("The removed quest is: "+questLog.splice(1,1))//removes 1 quest from position 1
console.log(questLog)

questLog.splice(1,0, "Slay the Dragon of Mount Doom");//adds 1 quest from position 1
console.log(questLog)

console.log(questLog.join(' | '))

