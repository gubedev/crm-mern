import React from "react"
import { Pie } from "react-chartjs-2"
import FeatherIcon from "feather-icons-react"

const datasetKeyProvider=()=>{ 
  return btoa(Math.random()).substring(0,12)
} 

const IncomeVsExpenses = ({ chartData }) => {
  return (
    <div className="col-sm-12 col-lg-4 pb-4">
      <div className="card rounded shadow h-450">
        <div className="card-body">
          <h3 className="card-title pb-4">Total Revenue</h3>
          <div className="mt-4">
            <Pie 
              data={chartData.data} 
              options={chartData.options} 
              height={100} 
              datasetKeyProvider={datasetKeyProvider}
            />
          </div>
          <h3 className="text-muted mt-4 text-center">Total sales made today</h3>
          <h2 className="my-4 text-center">$ 12000</h2>
          <div className="row mt-3">
            <div className="col-4">
              <p className="text-muted font-15 mb-1 text-truncate">Target</p>
              <h4>
                <FeatherIcon 
                  icon="arrow-down" 
                  className="text-danger" 
                />$7.8k
              </h4>
            </div>
            <div className="col-4">
              <p className="text-muted font-15 mb-1 text-truncate">Last week</p>
              <h4>
                <FeatherIcon 
                  icon="arrow-up" 
                  className="text-success mr-1" 
                />$1.4k
              </h4>
            </div>
            <div className="col-4">
              <p className="text-muted font-15 mb-1 text-truncate">Last Month</p>
              <h4>
                <FeatherIcon 
                  icon="arrow-down" 
                  className="text-danger mr-1" 
                />$15k
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncomeVsExpenses
