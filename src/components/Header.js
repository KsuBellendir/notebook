import React from 'react'

function Header({handleToggleDarkMode}) {
  return (
    <div className='header'>
        <h1>Блокнот</h1>
        <button className='save' onClick={()=>handleToggleDarkMode((pre)=> !pre)}>Тёмная тема</button>
    </div>
  )
}

export default Header