let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

let fight = () => {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
};

// let fight = function() {
//     window.alert('Welcome to Robot Gladiators');
// };

fight();
