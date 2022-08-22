// console.log('log 2')

document.getElementById('calculator-btn').addEventListener('click',function () {
    
const perPlayerCost = document.getElementById('per-player')
const perPlayerCostString = perPlayerCost.value;
const perPlayerValue = parseFloat(perPlayerCostString)
// console.log(perPlayerValue)

// player-expences---->

const playerExpences = document.getElementById('expences')
const playerExpencesCost =playerExpences. innerText;
// const playerExpencesCost = parseFloat(playerExpencesString)


const totalExpencesForPlayers =perPlayerValue * 5;
// console.log(totalExpencesForPlayers)
document.getElementById('expences').innerText = totalExpencesForPlayers;

// })

document.getElementById('total').addEventListener('click',function () {
    

    // manager cost---->

const managerExpences = document.getElementById('manager')
const totalManagerCostString = managerExpences.value;
const totalManagerCost = parseFloat(totalManagerCostString)
// console.log(totalManagerCost)


// coach-cost--->

const coachExpences = document.getElementById('coach')
const totalCoachCostString = coachExpences.value;
const totalCoachCost = parseFloat(totalCoachCostString)





// total-expences---->

 const totalCostForEverything = document.getElementById('total-expences')
 const totalExpencesForString = totalCostForEverything.innerText
 const totalCostForEverythingText = parseFloat(totalExpencesForString)
// console.log(totalCostForEverythingText)

const totalExpences = totalExpencesForPlayers + totalManagerCost +totalCoachCost
document.getElementById('total-expences').innerText = totalExpences

})


})
