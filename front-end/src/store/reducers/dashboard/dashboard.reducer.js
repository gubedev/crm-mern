import * as Actions from '../../actions/index';

const initialState = {
    data: {
        kpi: {
            sales: { quantity: 200000, result: 5.34 },
            orders: { quantity: 300000, result: 8.66 },
            visitors: { quantity: 4000, result: 1.74 },
            followers: { quantity: 2000, result: -0.74 },
        },
        charts: {
            emails: {
                data: {
                    labels: [
                        'Unopened',
                        'Opened',
                        'Read',
                        'Deleted'
                    ],
                    datasets: [{
                        data: [300, 50, 100, 50],
                        backgroundColor: [
                            "#e3e3e3", "#4acccd", "#fcc468", "#ef8157"
                        ],
                        hoverBackgroundColor: [
                            "#e3e3e3", "#4acccd", "#fcc468", "#ef8157"
                        ]
                    }]
                },
                options: {
                    legend: {
                        display: false
                    }
                }
            },
            nasdaq: {
                data: {
                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    datasets: [
                        {
                            data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
                            fill: false,
                            borderColor: "#fbc658",
                            backgroundColor: "transparent",
                            pointBorderColor: "#fbc658",
                            pointRadius: 4,
                            pointHoverRadius: 4,
                            pointBorderWidth: 8
                        },
                        {
                            data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
                            fill: false,
                            borderColor: "#51CACF",
                            backgroundColor: "transparent",
                            pointBorderColor: "#51CACF",
                            pointRadius: 4,
                            pointHoverRadius: 4,
                            pointBorderWidth: 8
                        }
                    ]
                },
                options: {
                    legend: {
                        display: false,
                        position: "top"
                    }
                }
            }
        },
        purchases: [{
            product: 'Sony Xperia M4',
            price: 149,
            date: '2019-09-23',
            state: 'Completed'
        }]
    },
    error: false,
    isLoading: false
};

const dashboard = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_DATA:
            {
                return {
                    error: true,
                    isLoading: true
                };
            }
        case Actions.GET_DATA_SUCCESS:
            {
                return {
                    data: action.payload,
                    error: false,
                    isLoading: false
                };
            }
        case Actions.GET_DATA_ERROR:
            {
                return {
                    ...state,
                    error: true,
                    isLoading: false
                };
            }
        default:
            {
                return state;
            }
    }
};

export default dashboard;
