import React, { useEffect } from 'react'

import { fetchProducts } from '../ReduxAction/productAction';
import { connect } from 'react-redux';
function About({fetchProducts, products}) {
    useEffect(() => {
        fetchProducts()  
    }, []);
  return (
    <main>
        <section> { console.log(products) } </section>
    </main>
  )
}
// To subscribe to store to get data
const mtp = (store) => {
    return{ products: store.productR.products }
}
export default connect(mtp, {fetchProducts})(About)