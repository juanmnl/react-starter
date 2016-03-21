import React from 'react'

const Icon = (props) => {
  let icon = `fa fa-${props.icon}`
  return (
    <i className={icon}></i>
  )
}
export default Icon
