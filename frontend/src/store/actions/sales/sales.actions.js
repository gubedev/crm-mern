export const SEARCH_SALES = "SEARCH_SALES"
export const SEARCH_SALES_SUCCESS = "SEARCH_SALES_SUCCESS"
export const SEARCH_SALES_ERROR = "SEARCH_SALES_ERROR"

export function serchSales(data) {
  return {
    type: SEARCH_SALES,
    payload: data,
  }
}
