import React from 'react'

const Logo = ({ width = '50px' }) => {
  return (
    <img
      src="/Logo.png"
      alt="BlogHub Logo"
      style={{ width }}
      className="h-auto"
    />
  )
}

export default Logo