import React from "react"

import Sales from "./Sales"
import Purchases from "./Purchases"
import Unpaid from "./Unpaid"
import Customers from "./Customers"

const Kpi = ({ data }) => {
  const { sales, purchases, unpaid, customers } = data.kpi

  return (
    <div className="row">
      <Sales sales={sales} />
      <Purchases purchases={purchases} />
      <Unpaid unpaid={unpaid} />
      <Customers customers={customers} />
    </div>
  )
}

export default Kpi
