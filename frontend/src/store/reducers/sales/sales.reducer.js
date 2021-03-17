import * as Actions from "store/actions"

const initialState = {
  kpi: {
    total: { amount: 250000 },
    paid: { amount: 300000 },
    pending: { amount: 4000 },
    due: { amount: 2000 },
  },
  sales: [
    {
      billingReference: "A-0001-00000001",
      saleDate: "2019-09-20",
      customer: "Northwind INC",
      state: "Paid",
      amount: 1200,
      taxAmount: 252,
      total: 1452,
      detail: [
        {
          product: "Hp Notebook 17",
          quantity: 2,
          unitPrice: 1000,
          amount: 2000,
          TAX: 10,
          subtotal: 2200,
        },
        {
          product: "Hp Server",
          quantity: 1,
          unitPrice: 10000,
          amount: 10000,
          TAX: 10,
          subtotal: 11000,
        },
      ],
    },
  ],
  selectedSale: {
    billingReference: "",
    saleDate: "",
    customer: "",
    state: "",
    amount: 0,
    subtotal: 0,
    taxAmount: 202,
    total: 0,
    detail: [],
  },
  isLoading: false,
  error: {},
}

const sales = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SEARCH_SALES: {
      return {
        ...state,
        isLoading: true,
        error: {},
      }
    }
    case Actions.SEARCH_SALES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        purchases: action.payload.invoices,
      }
    }
    case Actions.SEARCH_SALES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    }
    default: {
      return state
    }
  }
}

export default sales
