import { Link, BrowserRouter as Router } from 'react-router-dom'
import './header.css'
import React from 'react'

const HeaderContainer = () => {
  return (
    <div className="headercontainer">
        <nav>
            <div className="navbar">
                <ul>
                    <Link to="/" className="link">INÍCIO</Link>
                    <Link to="/cadastros" className="link">CADASTROS</Link>
                    <Link to="/matriculas" className="link">MATRÍCULAS</Link>
                    <Link to="/relatorios" className="link">RELATÓRIOS</Link>
                    <Link to="/login" className="link">SAIR</Link>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default HeaderContainer