import React from 'react'
import TituloSecao from './TituloSecao'
import BoxInfo from './BoxInfo'

const Secao = () => {
  return (
    <div className='secao'>
        <TituloSecao titulo="Acesso à Informação" subtitulo="Veja dados de Transparencia e governança"/>
        <BoxInfo/>
    </div>
  )
}

export default Secao