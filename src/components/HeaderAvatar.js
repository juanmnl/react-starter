import React from 'react'
import Icon from './Icon'

const HeaderAvatar = () => {
  return (
    <div>
      <div className='avatar'>
        <img className='juanmnl-img img-circle img-responsive' />
      </div>
      <h1 className='text-center'>
        <Icon icon='music' /> Oh! Oh! Oh-oh!<Icon icon='music' />
      </h1>
    </div>
  )
}
export default HeaderAvatar
