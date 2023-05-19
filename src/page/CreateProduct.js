import { createProduct } from "./ProductAction"

export default function ProductForm(){

    const product = {
        "title": "Magic Mouse",
        "price": 300,
        "description": "Testing Insert by Mom Reksmey",
        "categoryId": 5,
        "images": [
            "https://picsum.photos/640/640?r=801"
        ]
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handle submit")
        createProduct(product)
        .then(response => console.log(response))
    }
    return(
        <form className="mt-5 w-50 m-auto"
            onSubmit= {handleSubmit} >
            <h1 className="text-center">Create a Product</h1>
            <div className="mb-3">
                <label htmlFor="title" class="form-label">Product title</label>
                <input 
                    type="text" 
                    class="form-control"
                    placeholder="Magic Mouse"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input 
                    type="number" 
                    className="form-control"
                    placeholder="200$"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" class="form-label">Description</label>
                <textarea 
                    class="form-control" 
                    rows="5"
                    placeholder="Leave the description here"
                >

                </textarea>
            </div>

            <select class="form-select">
                <option selected>Choose Category</option>
                <option value="1">Funiture</option>
                <option value="2">Funiture</option>
                <option value="3">Funiture</option>
            </select>
            
            <button type="submit" class="btn btn-primary mt-4 w-100">Insert Product</button>
        </form>
    )
}