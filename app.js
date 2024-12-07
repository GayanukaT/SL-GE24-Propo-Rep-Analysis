const districtData = {
    Colombo: {
      votes: { "Party A": 40, "Party B": 30, "Party C": 20, "Party D": 10 },
      seats: { "Party A": 6, "Party B": 4, "Party C": 2 }
    },
    Gampaha: {
      votes: { "Party A": 45, "Party B": 25, "Party C": 20, "Party D": 10 },
      seats: { "Party A": 7, "Party B": 3, "Party C": 2 }
    },
    Kandy: {
      votes: { "Party A": 35, "Party B": 35, "Party C": 20, "Party D": 10 },
      seats: { "Party A": 5, "Party B": 5, "Party C": 2 }
    }
  };
  
  function renderDonutChart(canvasId, data, title) {
    const ctx = document.getElementById(canvasId).getContext("2d");
    if (window[canvasId]) window[canvasId].destroy();
  
    window[canvasId] = new Chart(ctx, {
      type: "doughnut", // Use 'doughnut' for donut charts
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            data: Object.values(data),
            backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true, position: "bottom" },
          title: { display: true, text: title },
        },
        cutout: "50%",
      },
    });
  }
  
  function showGraphs(district) {
    const data = districtData[district];
    if (!data) {
      alert("Data for this district is not available.");
      return;
    }
  
    renderDonutChart("votesChart", data.votes, "Votes Distribution");
    renderDonutChart("seatsChart", data.seats, "Seats Distribution");
  }  