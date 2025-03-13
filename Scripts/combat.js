function startCombat() {
    const enemyHealth = 20;
    let playerAttack = Math.floor(Math.random() * 8) + 5;
    let enemyAttack = Math.floor(Math.random() * 5) + 3;

    alert(`전투 시작! 적 체력: ${enemyHealth}`);
    
    let currentEnemyHealth = enemyHealth;
    
    while (currentEnemyHealth > 0 && resources.health > 0) {
        currentEnemyHealth -= playerAttack;
        resources.health -= enemyAttack;
        alert(`플레이어가 공격! 적 체력: ${currentEnemyHealth}\n적의 반격! 체력: ${resources.health}`);
    }

    if (resources.health <= 0) {
        alert('💀 사망했습니다...');
        resources.health = 100;
    } else {
        alert('🎯 승리했습니다!');
    }

    updateUI();
}
