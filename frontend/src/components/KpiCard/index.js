import React from "react"
import FeatherIcon from "feather-icons-react"

const KpiCard = ({ icon, title, bg, value }) => {
  const imgClass = `rounded ${bg} p-3`
  return (
    <div className="card rounded shadow">
      <div className="card-body">
        <div className="card-innerBody d-flex align-items-center">
          <div className={imgClass}>
            <FeatherIcon icon={icon} className="text-white" />
          </div>
          <div className="ml-auto">
            <h3 className="text-right">{value}</h3>
            <span className="text-muted float-right">{title}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KpiCard
