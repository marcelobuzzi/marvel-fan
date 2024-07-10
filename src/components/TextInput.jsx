import React from 'react'
import './text-input.css'

function TextInput({ label, type, name, id, value, onChange, error, inputClasses}) {

  return (
    <>
      <div className="input-group mb-3">
        <div className="form-floating">
          <input id={id} type={type} className={`form-control ${inputClasses} ${error.estado ? 'is-invalid':''}`} name={name} placeholder={label} value={value} onChange={onChange}/>
          <label htmlFor="password">{label}</label>
        </div>
        {error.estado && <div className="my-invalid-feedback">{error.message}</div>}
      </div>
    </>
  )
}

export default TextInput