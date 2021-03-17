import React from "react"
import Brand from "components/Brand"
import FeatherIcon from "feather-icons-react"
import "./Header.css"

const Header = ({ handleShowSidebar }) => {
  return (
    <>
      <nav className="navbar navbar-expand fixed-top d-flex flex-row justify-content-between header">
        <div className=" d-flex flex-row justify-content-between align-items-center left-box">
          <div className="p-2">
            <Brand />
          </div>
          <div className="p-2 cursor-pointer">
            <div 
              className="d-none d-lg-block"
              onClick={handleShowSidebar}
            >
              <FeatherIcon 
                icon="menu"
                className="text-white" 
              />
            </div>
          </div>
        </div>
        <div className="p-2">john doe</div>
      </nav>
    </>
  )
}

export default Header
