import React from 'react'
import './Popular.css'
import data_product from '../assets/data'
import Item from '../Item/Item';


const Popular = () => {
  return (
    <div className='popular'>
<div className='popular-item'>
    {data_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} />
    })}
</div>
    </div>
  )
}

export default Popular