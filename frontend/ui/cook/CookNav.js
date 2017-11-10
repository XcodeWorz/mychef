import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import translateComponent from '../../utils/translateComponent'

const translations = {
  en: {
    edit: 'Edit contact information',
    dishes: 'Dishes',
    orders: 'Orders',
    logout: 'Logout'
  },
  he: {
    edit: 'ערוך פרטי קשר',
    dishes: 'מנות',
    orders: 'הזמנות',
    logout: 'התנתק'
  }
}

const CookNav = ({ logout, translated, profile }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
    <div className="container">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/cook/contact"
            activeClassName="active"
          >
            {translated.edit}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/cook/dishes"
            activeClassName="active"
          >
            {translated.dishes}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/cook/orders"
            activeClassName="active"
          >
            {translated.orders}
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav my-2 my-lg-0">
        <li className="nav-item p-1">
          <img
            src={profile.imgUrl}
            alt={profile.name}
            className="rounded-circle img-fluid"
            style={{ maxHeight: 42 }}
          />
          <span className="p-1">{profile.name}</span>
        </li>
        <li className="nav-item p-1">
          <button className="btn btn-primary w-100" onClick={logout}>
            {translated.logout}
          </button>
        </li>
      </ul>
    </div>
  </nav>
)

const mapStateToProps = state => ({
  profile: state.auth.profile
})

const CookNavContainer = connect(mapStateToProps)(CookNav)

export default translateComponent(CookNavContainer, translations)
