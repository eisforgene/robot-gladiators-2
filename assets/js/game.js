let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyAttack = 12;

let fight = (enemyNames) => {
  while (playerHealth > 0 && enemyHealth > 0) {
    let promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    if (promptFight === "skip" || promptFight === "SKIP") {
      let confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyNames +
        ". " +
        enemyNames +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    if (enemyHealth <= 0) {
      window.alert(enemyNames + " has died!");
      break;
    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;

    console.log(
      enemyNames +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// let fight = function() {
//     window.alert('Welcome to Robot Gladiators');
// };
let startGame = () => {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      let pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        let storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};

let endGame = () => {
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle.");
  }

  let playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

let shop = () => {
  let shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

  switch(shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      break;
    } else {
      window.alert("You don't have enough money!");
    }

      break;
    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      break;
    } else {
      window.alert("You don't have enough money!");
    }

      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try Again.")
      shop();
      break;
  };

};

startGame();
