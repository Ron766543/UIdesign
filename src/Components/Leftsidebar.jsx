import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import "./Leftsidebar.css"

const Leftsidebar = () => {
  return (
    <div className='leftsidebar'>
        <h1>Prospective customer segmentation</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus tempora eos aliquam, nostrum fugiat recusandae enim fuga magni veniam doloremque quidem iure ab cum eaque. Veritatis a voluptatibus voluptas voluptatem? Laudantium omnis odio pariatur, nulla dolores, repudiandae, aut ex sunt</p>
        <p>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
        <span>{<ArrowUpRight size={45} />}</span>
    </div>
  )
}

export default Leftsidebar