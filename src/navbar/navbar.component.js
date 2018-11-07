import React from 'react';
import './navbar.style.scss'

export default function Nav() {
  return (
    <div className="navbar">
      <div className="title">Contact List</div>
      <div className="search">
        <input type="text" placeholder="Search"></input>
      </div>
    </div>
  )
}