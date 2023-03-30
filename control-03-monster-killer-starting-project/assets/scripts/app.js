const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
currentMonsterHealth = chosenMaxLife;
currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage; 

    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0) {
        alert('You Won!');
    } 
    else if (currentPlayerHealth <= 0) {
        alert('You Lost');
    }
}

attackBtn.addEventListener('click', attackHandler);