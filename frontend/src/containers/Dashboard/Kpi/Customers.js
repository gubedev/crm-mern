import React from "react"
import KpiCard from "components/KpiCard"

const Customers = ({ customers }) => {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <KpiCard 
          icon="dollar-sign"
          title="Booked Revenue"
          bg="bg-warning"
          value={`$ ${customers.quantity}`}
       />
    </div>
  )
}

export default Customers
