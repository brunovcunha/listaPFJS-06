import React from 'react'

const TituloSecao = (props) => {
  return (
    <div className='tituloSecao'>
        <h1>{props.titulo}</h1>
        <p>{props.subtitulo}</p>
    </div>
  )
}

export default TituloSecao