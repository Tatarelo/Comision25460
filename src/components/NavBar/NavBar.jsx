import React from 'react'

function NavBar() {
  return (
    <header className='navBar'>
        <div className='navBar_div'>
            <img className='logo' src="https://cdn-icons-png.flaticon.com/512/4632/4632965.png" alt="Logo" />
        </div>
          <h1 className='titleNav'>Repuestos Fawkes</h1>
          <div className='navList'>
            <ul className='navList_ul'>
                <a href=""><li className='navList_li'>Inicio</li></a>
                <a href=''><li className='navList_li'>Catálogo</li></a>
                <a href=''><li className='navList_li'>Contacto</li></a>
            </ul>
            <img className='logoCarrito' src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="LogoCarrito" />
          </div>  
    </header>
  )
}

export default NavBar