// insert product to api
export const createProduct = async (product) => {
    const resp = await fetch  ("https://api.escuelajs.co/api/v1/products/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)

   })
   return resp.json()
    

}