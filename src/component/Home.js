import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchProducts } from '../ReduxAction/productAction'

import secureLocalStorage from 'react-secure-storage'
import LoadingView from './LoadingView'
import Card from './Card'

function Home({fetchProducts, products}) {

    // The same as componentDidMount, Render
    useEffect(() => {
        console.log(secureLocalStorage.getItem("kiki"))
        fetchProducts()  
    }, []);
  return (
    <Container>
        <h1 className='h1 mt-3'>Product Collection</h1>
        <Row className='g-3 mt-3'>
            {
                products.length === 0 ? <LoadingView /> : <Card products={products} title="Little Kid" />
            }
        </Row>
    </Container>
  )
}

// To subscribe to store to get data
const mtp = (store) => {
    return{ products: store.productR.products }
}
export default connect(mtp, {fetchProducts})(Home)