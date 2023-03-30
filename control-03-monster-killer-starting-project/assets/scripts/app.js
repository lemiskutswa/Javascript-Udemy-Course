const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
currentMonsterHealth = chosenMaxLife;
currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage; 
    if (currentMonsterHealth <= 0) {
        alert('You Won!');
    } 
}

attackBtn.addEventListener('click', attackHandler);