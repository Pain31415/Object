export const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
    { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
    { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
    { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

function addPlayersToDom(players) {
    const playersBox = document.querySelector('.player_box');
    playersBox.innerHTML = ''; // Clear the previous content
    const playerHtml = players.map((player) => {
        return `<div class="player">
            <h2>${player.name}</h2>
            <p>Тривалість гри: ${player.timePlayed}</p>
            <p>Досвід: ${player.points}</p>
            <p class="online"> ${player.online ? "Грає" : "Відпочиває"}</p>
        </div>`;
    }).join('');

    playersBox.insertAdjacentHTML("afterbegin", playerHtml);
    const onlineElements = document.querySelectorAll('.online');
    onlineElements.forEach((element, index) => {
        if (players[index].online) {
            element.style.color = 'blue';
        } else {
            element.style.color = 'red';
        }
    });
}

function filterPlayers() {
    const statusFilter = document.getElementById('statusFilter').value;
    const pointsFilter = document.getElementById('pointsFilter').value;

    const filteredPlayers = players.filter(player => {
        const matchesStatus = statusFilter === 'all' || (statusFilter === 'online' && player.online) || (statusFilter === 'offline' && !player.online);
        const matchesPoints = player.points >= pointsFilter;
        return matchesStatus && matchesPoints;
    });

    addPlayersToDom(filteredPlayers);
}

document.addEventListener('DOMContentLoaded', () => {
    addPlayersToDom(players);

    const statusFilterElement = document.getElementById('statusFilter');
    const pointsFilterElement = document.getElementById('pointsFilter');
    const pointsValueElement = document.getElementById('pointsValue');

    statusFilterElement.addEventListener('change', filterPlayers);
    pointsFilterElement.addEventListener('input', () => {
        pointsValueElement.textContent = pointsFilterElement.value;
        filterPlayers();
    });
});
