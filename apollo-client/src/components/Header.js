import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>React GraphQL MongoDB</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help Page
    </NavLink>
  </header>
)

export default Header
