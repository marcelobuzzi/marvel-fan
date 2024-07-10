import React from 'react'

function CustomButton({ label, icon, type, classes, id, onClick }) {

  return (
    <>
      <button
        id={id}
        type={type}
        className={`btn ${classes}`}
        onClick={onClick}
        >
          <i className={icon}></i>
          {label}
        </button>
    </>
  )
}

export default CustomButton