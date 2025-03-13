const resources = {
    food: 0,
    water: 0,
    wood: 0,
    metal: 0,
    health: 100
};

function updateUI() {
    document.getElementById('food-count').textContent = resources.food;
    document.getElementById('water-count').textContent = resources.water;
    document.getElementById('wood-count').textContent = resources.wood;
    document.getElementById('metal-count').textContent = resources.metal;
    document.getElementById('health').textContent = resources.health;
}

function gatherResources(type) {
    switch (type) {
        case 'food':
            resources.food += Math.floor(Math.random() * 5) + 1;
            break;
        case 'water':
            resources.water += Math.floor(Math.random() * 3) + 1;
            break;
        case 'wood':
            resources.wood += Math.floor(Math.random() * 4) + 2;
            break;
        case 'metal':
            resources.metal += Math.floor(Math.random() * 2) + 1;
            break;
    }
    updateUI();
}

updateUI();
