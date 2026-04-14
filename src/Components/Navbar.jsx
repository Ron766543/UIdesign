import React from 'react'
import { CornerDownRight } from "lucide-react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>TARGET AUDIENCE</h2>
        <h4>{<CornerDownRight size={28} strokeWidth={1.25} />}DIGITAL BANKING PLATFORM</h4>
    </div>
  )
}

export default Navbar