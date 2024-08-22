document.addEventListener("DOMContentLoaded", () => {
    // Update Balance Section
    const balanceElement = document.querySelector(".balance");
    balanceElement.textContent = "$150,000.00"; // Example static balance value

    // Add Event Listeners for Trade and Transfer Buttons
    document.querySelector(".trade").addEventListener("click", () => {
        alert("Trade functionality coming soon!");
    });

    document.querySelector(".transfer").addEventListener("click", () => {
        alert("Transfer functionality coming soon!");
    });

    // Dynamically Update Favorites List (Placeholder)
    const favorites = [
        { name: "Binance Coin", price: "$17.51", change: "-3.69%" },
        { name: "Crypto.com Coin", price: "$0.09351", change: "-1.47%" },
    ];

    const favoritesContainer = document.querySelector(".favorites");
    favorites.forEach(coin => {
        const coinElement = document.createElement("div");
        coinElement.classList.add("coin");
        coinElement.innerHTML = `
            <div class="coin-name">${coin.name}</div>
            <div class="coin-price">${coin.price}</div>
            <div class="coin-change ${coin.change.includes('-') ? 'red' : 'green'}">${coin.change}</div>
        `;
        favoritesContainer.appendChild(coinElement);
    });

    // Reserve space for future updates
    // Placeholder for API calls, form handling, etc.
});