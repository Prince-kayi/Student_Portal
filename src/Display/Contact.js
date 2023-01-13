import React from 'react'
import { Link } from "react-router-dom"
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa"
import "../Pages/pages.css"

const Contact = () => {
  return (
    <div className='footer-container'>
      <footer>
  <p className='text'>PUT</p>
  <br/>
  <p>For more information about Phaswana  University of Technology.Please click the link below</p>
<div className='social-media'>
 <Link to="#"><FaFacebook/></Link>
 <Link to="#"><FaLinkedin/></Link>
 <Link to="#"><FaTwitter/></Link>
 <Link to="#"><FaInstagram/></Link>
 <Link to="#"><FaYoutube/></Link>
 </div>
 <p className='down'>CopyRight by Anza </p>
 </footer>
      
    </div>
  )
}
export default Contact
