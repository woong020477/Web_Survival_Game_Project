function buildDefense() {
    if (resources.wood >= 10 && resources.metal >= 5) {
        resources.wood -= 10;
        resources.metal -= 5;
        alert('🏠 기지 강화 완료!');
    } else {
        alert('❌ 자원이 부족합니다.');
    }

    updateUI();
}
