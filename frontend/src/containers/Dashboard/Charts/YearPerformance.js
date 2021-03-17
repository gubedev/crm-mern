import React from "react"
import { Line } from "react-chartjs-2"

const datasetKeyProvider=()=>{ 
  return btoa(Math.random()).substring(0,12)
} 

const YearPerformance = ({ chartData }) => {
  return (
    <div className="col-sm-12 col-lg-8 pb-4">
      <div className="card rounded shadow h-450">
        <div className="card-body">
          <h3 className="card-title">Year Performance</h3>
          <h4 className="card-subtitle text-muted">Income vs Expenses (M)</h4>
          <div className="mt-4">
            <Line 
              data={chartData.data} 
              options={chartData.options} 
              height={100}
              datasetKeyProvider={datasetKeyProvider}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default YearPerformance
