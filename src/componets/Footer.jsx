import React from 'react'
import { useSelector } from 'react-redux';

const Footer = () => {

    const myTogglemenu = useSelector(store => store.toggle.isMenuOpen);

  return (
    <div className='text-center' style={{backgroundColor: myTogglemenu ? "#27282f" : "", borderTop: myTogglemenu ? "#1c2025": "#10637d"}}>
        <h6 className='py-3' style={{color:  myTogglemenu ? "#10f0fc": ""}}>Design and developed by <span>Kunal</span></h6>
    </div>
  )
}

export default Footer;