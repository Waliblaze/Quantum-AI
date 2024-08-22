document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.querySelector('.balance-overview p');
    const depositForm = document.querySelector('form[action="#"]');
    const withdrawalForm = document.querySelectorAll('form[action="#"]')[1];
    const transactionTable = document.querySelector('.transaction-history tbody');

    let balance = parseFloat(balanceElement.textContent.replace('$', '').replace(',', ''));

    depositForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = parseFloat(document.getElementById('deposit-amount').value);
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            balanceElement.textContent = `$${balance.toLocaleString()}`;
            addTransaction('Deposit', amount, 'Completed');
        }
    });

    withdrawalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = parseFloat(document.getElementById('withdrawal-amount').value);
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            balance -= amount;
            balanceElement.textContent = `$${balance.toLocaleString()}`;
            addTransaction('Withdrawal', amount, 'Completed');
        }
    });

    function addTransaction(type, amount, status) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${new Date().toISOString().split('T')[0]}</td>
            <td>${type}</td>
            <td>$${amount.toLocaleString()}</td>
            <td>${status}</td>
        `;
        transactionTable.prepend(row); // Add new transaction to the top
    }
});