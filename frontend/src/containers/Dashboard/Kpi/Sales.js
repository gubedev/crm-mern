import React from "react"
import KpiCard from "components/KpiCard"

const Sales = ({ sales }) => {
  
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <KpiCard 
        icon="layers"
        title="Campaign Sent"
        bg="bg-blue "
        value={`$ ${sales.quantity}`}
      />
    </div>
  )

}

export default Sales
