import React from 'react'

const SalaryandType = ({type,salary}) => {
  return (
    <p className="text-gray-400">{`•${type} •${salary}`}</p>
  )
}

export default SalaryandType