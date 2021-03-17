import React, { 
  useEffect 
} from "react"
import { 
  useDispatch, 
  useSelector 
} from "react-redux"
import { fetchData } from "store/actions"
import Kpi from "./Kpi"
import "./Dashboard.css"
import Charts from "./Charts"

const Dashboard = () => {
  const { data, isLoading } = useSelector(state => state.dashboard.general)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h3>Dashboard</h3>
        </div>
      </div>
      {!isLoading ? (
        <div>
          <Kpi data={data} />
          <Charts data={data} />
        </div>
      ) : (
        <div>
          <h5>Loading Dashboard...</h5>
        </div>
      )}
    </>
  )
}

export default Dashboard
