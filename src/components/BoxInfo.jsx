import React from 'react'
import Info from './Info'

const BoxInfo = () => {

    const dados = [
        { titulo: 'PLANO DE DESENVOLVIMENTO INSTITUCIONAL' },
        { titulo: 'PESQUISA PUBLICA PROCESSOS IFTM' },
        { titulo: 'LICITAÇÕES E CONTRATOS' },
        { titulo: 'RECEITAS E DESPESAS' },
        { titulo: 'DADOS ABERTOS' },
        { titulo: 'TRANSPARÊNCIA E PRESTAÇÃO DE CONTAS' },
        { titulo: 'SERVIDORES' },
        { titulo: 'PERGUNTAS FREQUENTES' }
        
      ];


  return (
    <div className='boxInfo'>
        {dados.map((item, index) =>
            <Info key={index} titulo={item.titulo}/>
        )}
    </div>
  )
}

export default BoxInfo