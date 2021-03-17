import * as Actions from "store/actions"

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
              pointRadius: 4,
              pointHoverRadius: 4,
              pointBorderWidth: 8,
            },
            {
              data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
              fill: false,
              borderColor: "#51CACF",
              backgroundColor: "transparent",
              pointBorderColor: "#7e57c2",
              pointRadius: 4,
              pointHoverRadius: 4,
              pointBorderWidth: 8,
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

const dashboard = function (state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_DATA: {
      return {
        ...state,
        error: true,
        isLoading: true,
      }
    }
    case Actions.FETCH_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: false,
        isLoading: false,
      }
    }
    case Actions.FETCH_DATA_ERROR: {
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    }
    default: {
      return state
    }
  }
}

export default dashboard
