import React from 'react';

const Icon = (props) => {
  let icon = `fa fa-${props.icon}`;
  return (
    <span className='icon'>
      <i className={icon}></i>
    </span>
  )
}
export default Icon;
