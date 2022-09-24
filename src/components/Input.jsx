import React from 'react'

export const Input = ({placeholder, type='text', onChangeFuncion}) => {
  return (
    <div class="mb-3">
        <label for="exampleFormControlInput1" className="form-label">{placeholder}</label>
        <input type={type} className="form-control" id="exampleFormControlInput1" placeholder={placeholder} onChange={onChangeFuncion} />
    </div>
  )
}
