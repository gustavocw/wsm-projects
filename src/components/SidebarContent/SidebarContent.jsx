import React from 'react'
import './sidebar.css'
import { FiBox, FiAnchor, FiHome, FiCodepen, FiFlag, FiTarget, FiX } from "react-icons/fi";

const SidebarContent = () => {
  return (
  <div className="sidebar">
  <a href="#">
    <FiHome style={{ margin: '0 5px 0 5px' }}/> Home
  </a>
  <a href="/cadastros/ships">
  <FiAnchor style={{ margin: '0 5px 0 5px' }}/> Ships
  </a>
  <a href="/cadastros/professores">
  <FiCodepen style={{ margin: '0 5px 0 5px' }}/> Shipowner
  </a>
  <a href="/cursos">
  <FiBox style={{ margin: '0 5px 0 5px' }}/> Supplies
  </a>
  <a href="/cursos">
  <FiFlag style={{ margin: '0 5px 0 5px' }}/> Flags
  </a>
  <a href="/Ports">
  <FiTarget style={{ margin: '0 5px 0 5px' }}/> Ports
  </a>
  <a className='exit' href="/Sair">
  <FiX style={{ margin: '0 5px 0 5px' }}/> Exit
  </a>
</div>


  )
}

export default SidebarContent