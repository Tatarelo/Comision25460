import React from 'react'
import TituloApp from './Titulo/TituloApp'

export default function ComponenteContenedor() {
  return (
    <div><TituloApp titulo={'titulo'} subtitulo='subtitulo de contenedor' saludo={() => console.log('saludo')}/></div>
  )
}

