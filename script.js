  // JavaScript to create the interactive audiogram chart
  document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('audiogramChart').getContext('2d');
    const audiogramChart = new Chart(ctx, {
      type: 'scatter', // or 'line' if you want to connect the dots
      data: {
        datasets: [{
          label: 'Audiogram Results',
          data: [], // This would be filled with the actual test results
          backgroundColor: 'rgba(255, 99, 132, 1)',
          borderColor: 'rgba(255, 99, 132, 1)',
        }]
      },
      options: {
        scales: {
          x: {
            type: 'logarithmic',
            position: 'bottom',
            ticks: {
              callback: function(value, index, values) {
                return ['125', '250', '500', '1k', '2k', '4k', '8k'][index];
              }
            }
          },
          y: {
            reverse: true, // Inverse l'axe y pour que les valeurs élevées soient en bas
            min: -10, // Définit la valeur minimale de l'axe y
            max: 120, // Définit la valeur maximale de l'axe y
            ticks: {
              stepSize: 10 // Espacement entre les lignes de la grille
            }
        }
      }
    }
    });

    // Function to update chart with new test results
    function addTestData(frequency, decibel) {
      audiogramChart.data.datasets[0].data.push({x: frequency, y: decibel});
      audiogramChart.update();
    }

    // You would call `addTestData` with the frequency and decibel level whenever a new test result is recorded
  });