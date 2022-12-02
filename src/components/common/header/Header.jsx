import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"


const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Trang chủ</Link>
            </li>
            <li>
              <Link to='/courses'>Khoá học</Link>
            </li>
            <li>
              <Link to='/about'>Về chúng tôi</Link>
            </li>
            <li>
              <Link to='/team'>Đội ngũ</Link>
            </li>
            <li>
              <Link to='/pricing'>Giá cả</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Liên Hệ</Link>
            </li>
          </ul>
          <div className='start'>
            <Link to='/login'>
              {localStorage.getItem('jwt_token') === null || localStorage.getItem('jwt_token') === '' ? 'Đăng nhập' : localStorage.getItem('user') }
            </Link>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
