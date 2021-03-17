import React from "react"
import KpiCard from "components/KpiCard"

const Purchases = ({ purchases }) => {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <KpiCard 
        icon="award"
        title="New Leads" 
        bg="bg-success" 
        value={`$ ${purchases.quantity}`} 
      />
    </div>
  )
}

export default Purchases
