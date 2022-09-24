import React from 'react'

export const Button = ({children}) => {
  return (
    <button 
        type="button"
        className="btn btn-secondary">
            {children}
    </button>
  )
}
