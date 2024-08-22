document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('cryptoChart').getContext('2d');
    const cryptoChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['20:00', '20:10', '20:20', '20:30', '20:40', '20:50'],
            datasets: [{
                label: 'Bitcoin Price',
                data: [30000, 32000, 31000, 33000, 34000, 32500],
                borderColor: 'yellow',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            }
        }
    });

    // Placeholder for dynamically loading data in the future
});

<!-- TradingView Widget BEGIN -->
<div id="tradingview_chart"></div>
<script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
<script type="text/javascript">
    new TradingView.widget({
        container_id: "tradingview_chart",
        autosize: true,
        symbol: "BTCUSD",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        enable_publishing: false,
        allow_symbol_change: true,
        details: true
    });
</script>
<!-- TradingView Widget END -->