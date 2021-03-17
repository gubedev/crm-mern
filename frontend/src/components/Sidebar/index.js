import React, { useRef } from "react"
import "./Sidebar.scss"
import { useOutsideClick } from "utils/hooks/useOnClickOutside"

const Sidebar = ({ isVisible, handleClickOutside }) => {
  const ref = useRef()

  useOutsideClick(ref, () => handleClickOutside())
  
  return (
    <>
      {isVisible && (
        <>
          <div 
            className="sidebar shadow p-4 d-flex flex-column" 
            ref={ref}
          >
            <h3>Sidebar</h3>
          </div>
          <div className="sidebar-overlay"></div>
        </>
      )}
    </>
  )
}

export default Sidebar
