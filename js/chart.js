const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Borrowed Books',
            data: [18, 25, 20, 30, 22, 28],
            borderWidth: 1
        }]
    },

    options: {
        responsive: true,

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});