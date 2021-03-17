import React, { 
  Suspense, 
  lazy 
} from "react"
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from "react-router-dom"
import { 
  useDispatch, 
  useSelector 
} from "react-redux"
import { 
  showSidebar, 
  hideSidebar 
} from "store/actions"
import Header from "components/Header"
import Sidebar from "components/Sidebar"

const Dashboard = lazy(() => import("containers/Dashboard"))
const About = lazy(() => import("containers/About"))

function App() {
  
  const { isShowingSidebar } = useSelector(state => state.layout.sidebar)
  const dispatch = useDispatch()
  
  const handleShowSidebar = () => {
    if (!isShowingSidebar) dispatch(showSidebar())
  }

  const handleHideSidebar = () => {
    if (isShowingSidebar) dispatch(hideSidebar())
  }

  return (
    <>
      <BrowserRouter>
        <div 
          className="container-fluid wrapper"
        >
          <Sidebar 
            isVisible={isShowingSidebar} 
            handleClickOutside={handleHideSidebar}
          />
          <Header 
            handleShowSidebar={handleShowSidebar} 
          />
          <Suspense fallback={<div>Loading...</div>}>
            <div 
              className="page-content container-fluid pt-4"
            >
              <Switch>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route path="/about" exact>
                  <About />
                </Route>
              </Switch>
            </div>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
