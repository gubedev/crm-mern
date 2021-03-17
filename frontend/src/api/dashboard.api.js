export async function fetchData() {
  const initialState = {
    data: {
      kpi: {
        sales: { quantity: 200000, result: 5.34 },
        purchases: { quantity: 300000, result: 8.66 },
        unpaid: { quantity: 4000, result: 1.74 },
        customers: { quantity: 2000, result: -0.74 },
      },
      charts: {
        incomeVsExpenses: {
          data: {
            labels: ["Income", "Expenses"],
            datasets: [
              {
                data: [300, 250],
                backgroundColor: ["#4fc6e1", "#7e57c2"],
                hoverBackgroundColor: ["#fbc658", "#51CACF"],
              },
            ],
          },
          options: {
            legend: {
              display: false,
            },
          },
        },
        yearPerformance: {
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
                fill: false,
                borderColor: "#4fc6e1",
                backgroundColor: "transparent",
                pointBorderColor: "#4fc6e1",
                pointRadius: 2,
                pointHoverRadius: 2,
                pointBorderWidth: 4,
              },
              {
                data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
                fill: false,
                borderColor: "#51CACF",
                backgroundColor: "transparent",
                pointBorderColor: "#7e57c2",
                pointRadius: 2,
                pointHoverRadius: 2,
                pointBorderWidth: 4,
              },
            ],
          },
          options: {
            legend: {
              display: false,
              position: "top",
            },
          },
        },
      },
      purchases: [
        {
          product: "Sony Xperia M4",
          price: 149,
          date: "2019-09-23",
          state: "Completed",
        },
      ],
    },
    error: false,
    isLoading: false,
  }

  return Promise.resolve(initialState.data)
}
