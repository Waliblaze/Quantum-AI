// Utility Function to Generate Random Numbers Within a Range
function getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// 1. Dynamic Balance Update
let balanceElement = document.querySelector('.balance-overview p');
let currentBalance = 154610.00;

function updateBalance() {
    // Increment balance by a random amount between $3 and $5
    const increment = parseFloat(getRandomNumber(3, 5));
    currentBalance += increment;
    balanceElement.textContent = `$${currentBalance.toFixed(2)}`;
}

// Run the balance update every 1 minute (60000 ms)
setInterval(updateBalance, 60000);

// 2. Real-Time Market Data Update
const marketDataElements = document.querySelectorAll('.market-data p');

function updateMarketData() {
    marketDataElements.forEach((element) => {
        // Get current price
        let [price, change] = element.textContent.split(' ');
        price = parseFloat(price.replace('$', ''));

        // Randomly increase or decrease the price by a small percentage
        const percentageChange = parseFloat(getRandomNumber(-0.3, 0.3));
        price += (price * percentageChange) / 100;

        // Update the change span with the correct color
        const changeSpan = element.querySelector('span');
        changeSpan.textContent = `${percentageChange > 0 ? '+' : ''}${percentageChange.toFixed(2)}%`;
        changeSpan.classList.toggle('positive', percentageChange > 0);
        changeSpan.classList.toggle('negative', percentageChange < 0);

        // Update the price
        element.innerHTML = `$${price.toFixed(2)} <span class="${percentageChange > 0 ? 'positive' : 'negative'}">${changeSpan.textContent}</span>`;
    });
}

// Run the market data update every 10 seconds
setInterval(updateMarketData, 10000);

// 3. Portfolio Visualization (Pie Chart)
const ctx = document.getElementById('portfolioChart').getContext('2d');
const portfolioChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Bitcoin', 'Tether', 'Ethereum', 'Ripple', 'Solana'],
        datasets: [{
            data: [37, 23, 20, 12, 8],
            backgroundColor: ['#e50914', '#ff6347', '#4682b4', '#32cd32', '#8a2be2'],
            borderColor: '#000',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white'
                }
            }
        }
    }
});

// 4. Bitcoin Price Chart
const chartContainer = document.getElementById('chart-container');

function initializeChart() {
    // Insert your preferred chart implementation here.
    // Example: You can use Chart.js or a TradingView widget for a live chart.
    chartContainer.innerHTML = '<iframe src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_7f524&symbol=BITSTAMP%3ABTCUSD&interval=1&theme=dark" width="100%" height="500"></iframe>';
}

// Initialize the chart on page load
initializeChart();

// 5. Search Functionality (Optional)
const searchInput = document.querySelector('header input[type="text"]');
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const marketItems = document.querySelectorAll('.market-data');

    marketItems.forEach(item => {
        const cryptoName = item.querySelector('h3').textContent.toLowerCase();
        item.style.display = cryptoName.includes(query) ? 'block' : 'none';
    });
});