let profitChart;

function updateProfitChart() {
  const labels = purchases.map(p => new Date(p.saleDate).toLocaleDateString());
  const data = purchases.map(p => p.profitLoss);

  if (profitChart) {
    profitChart.data.labels = labels;
    profitChart.data.datasets[0].data = data;
    profitChart.update();
  } else {
    const ctx = document.getElementById('profitChart').getContext('2d');
    profitChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Profit/Loss Over Time',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: true
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
  }
}
