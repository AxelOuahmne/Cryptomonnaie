import React from 'react'
import styles from '../asset/css/mystyle.module.css'; 

const NavBar =() =>{
  return (
    // navbar navbar-dark bg-dark fixed-top
<nav className="navbar navbar-expand-lg navbar-dark bg-dark pe-2">
  <a className="navbar-brand " href="#"><h1> Cryptomonnaie</h1></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ms-5" >
      <li className="nav-item">
        <a className={`nav-link ${styles.link}`} href="#" >Features</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${styles.link}`} href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${styles.link}`} href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${styles.link}`} href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${styles.link}`} href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${styles.link}`}href="#">Pricing</a>
      </li>
    </ul>
    <ul className="navbar-nav  ms-auto ps-2">
      <li className="nav-item">
        <a className=" btn btn-danger me-2" href="#">Connexion</a>
      </li>
      <li className="nav-item">
        <a className="btn btn-primary" href="#">S'inscrire</a>
      </li>
   
    </ul>

  </div>
</nav>
  )
}

export default NavBar
