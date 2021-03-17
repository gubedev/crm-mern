import React from "react"
import KpiCard from "components/KpiCard"

const Unpaid = ({ unpaid }) => {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
       <KpiCard 
          icon="delete"
          title="Deals"
          bg="bg-danger"
          value={`$ ${unpaid.quantity}`}
       />
    </div>
  )
}

export default Unpaid
