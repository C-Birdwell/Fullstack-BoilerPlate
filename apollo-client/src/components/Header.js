import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>React GraphQL MongoDB</h1>
    <div className="row">
      <NavLink to="/" activeClassName="is-active" exact={true} className="nav-link">
        <div className="nav-item">Dashboard</div>
      </NavLink>
      <NavLink to="/help" activeClassName="is-active" className="nav-link">
        <div className="nav-item">Help Page</div>
      </NavLink>
    </div>
  </header>
)

export default Header
