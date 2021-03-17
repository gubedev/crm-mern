import React from "react"
import IncomeVsExpenses from "./IncomeVsExpenses"
import YearPerformance from "./YearPerformance"

const Charts = ({ data }) => {
  const { incomeVsExpenses, yearPerformance } = data.charts

  return (
    <div className="row">
      <IncomeVsExpenses chartData={incomeVsExpenses} />
      <YearPerformance chartData={yearPerformance}/>
    </div>
  )
}

export default Charts
