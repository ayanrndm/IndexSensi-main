const gamesData = [
    { homeTeam: "Team A", awayTeam: "Team B", homeScore: 3, awayScore: 1 },
    { homeTeam: "Team C", awayTeam: "Team D", homeScore: 2, awayScore: 2 },
    { homeTeam: "Team E", awayTeam: "Team F", homeScore: 1, awayScore: 0 }
];

// Function to display game scores
function displayGames() {
    const gamesSection = document.getElementById("games");
    gamesData.forEach(game => {
        const gameElement = document.createElement("div");
        gameElement.classList.add("game");
        gameElement.innerHTML = `
            <h2>${game.homeTeam} vs ${game.awayTeam}</h2>
            <p>${game.homeScore} - ${game.awayScore}</p>
        `;
        gamesSection.appendChild(gameElement);
    });
}

// Call the function to display games
displayGames();