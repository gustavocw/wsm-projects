import React from 'react'
import './sidebar.css'

const SidebarContent = () => {
  return (
  <div className="sidebar">
  <a href="/">Início</a>
  <a href="/cadastros/alunos">Alunos</a>
  <a href="/cadastros/professores">Professores</a>
  <a href="/cursos">Cursos</a>
  <a className='exit' href="/Sair">Sair</a>
</div>


  )
}

export default SidebarContent