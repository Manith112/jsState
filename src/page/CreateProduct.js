


import { useEffect, useState } from "react"
import { createProduct, getCategories, uploadImage, updateProduct } from "./ProductAction"
import { useLocation, useNavigate } from "react-router-dom"

export default function ProductForm({update}){
    const navigate = useNavigate()
    const location = useLocation()
    const [source, setSource] = useState("")
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState({
        "id": 0,
        "title": "",
        "price": 0,
        "description": "",
        "categoryId": 0,
        "images": [
            "https://picsum.photos/640/640?r=801"
        ]
    })

    const handleInputChange = (e) => {
        console.log(e)
        const {name, value} = e.target
        setProduct(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    const onFileUploadHandler = (e) => {
        console.log(e.target.files[0])
        setSource(e.target.files[0])
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(update)
        if(update){
            // source !=="" : mean that user choose new photo
            if (source !== ""){
                const formData = new FormData()
                formData.append("file", source)
                uploadImage(formData)
                .then(response => {
                    product.images = [response.data.location]
                    updateProduct(product, product.id)
                    .then(res => {
                        console.log(res)
                        navigate("/datatable")
                    })
                })
            }else{
                // User keep old photo
                updateProduct(product, product.id)
                .then(res => {
                    console.log(res)
                    navigate("/datatable")
                })
            }
            
        }else{
            insertProduct()
        } 
    }
    const insertProduct = () => {
        const formData = new FormData()
            formData.append("file", source)
            uploadImage(formData)
            .then(response => {
                product.images = [response.data.location]
                console.log(product)
                createProduct(product)
                .then(resp => {
                    console.log(resp)
                    alert("Insert Product Sucess")
                    navigate("/")
                })
        })
    }
    useEffect(() => {
        if(update){
            const {n_product} = location.state
            console.log("you want to update", location.state.n_product)
            product.id = n_product.id
            product.title = n_product.title
            product.price = n_product.price
            product.description = n_product.description
            product.categoryId = n_product.category.id
            product.images = [n_product.images[0]]
        }else{
            console.log("you want to create")
        }
        getCategories()
        .then(response => setCategories(response))
    }, [])
    return(
        <form 
            className="mt-5 w-50 m-auto"
            onSubmit={handleSubmit}
        >
            <h1 className="text-center">Create a Product</h1>
            <div className="mb-3">
                <label htmlFor="title" class="form-label">Product title</label>
                <input 
                    type="text" 
                    class="form-control"
                    placeholder="Magic Mouse"
                    name="title"
                    value={product.title}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input 
                    type="number" 
                    className="form-control"
                    placeholder="200$"
                    name="price"
                    value={product.price}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" class="form-label">Description</label>
                <textarea 
                    class="form-control" 
                    rows="5"
                    name="description"
                    placeholder="Leave the description here"
                    value={product.description}
                    onChange={handleInputChange}
                >

                </textarea>
            </div>

            <select 
                class="form-select"
                onChange={handleInputChange}
                name="categoryId"
                value={product.categoryId}
            >
                <option selected>Choose Category</option>
                {
                    categories.map(cat => (
                        <option value={cat.id}>{cat.name}</option>
                    ))
                }
            </select>
            <div className="mb-3">
                
                <label htmlFor="images" className="form-label">Upload Image</label>
                <input 
                    type="file" 
                    className="form-control"
                    name="images"
                    onChange={onFileUploadHandler}
                />
            </div>
            {/* preview image */}
            <div className="mb-3">
            {
                    console.log(product.images)
                }
                <img className="w-50" 
                    src={source !== "" ? URL.createObjectURL(source) : product.images[0]}  />
            </div>
            <button 
                type="submit" 
                class="btn btn-primary mt-4 w-100"
                >{
                    update ? "Update Product" : "Create Product"
                }</button>
        </form>
    )
}