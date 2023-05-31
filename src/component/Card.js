import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Card({products}) {
    
  return (
    products && products.map(product => (
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <div class="card h-100 border-0 shadow-sm">
            <img src={product.images[0]} class="card-img-top" alt="product" />
            <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                
            </div>
            </div>
        </div>
    ))
  )
}

export default Card