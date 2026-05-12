import axios from 'axios'
import { useEffect, useState } from 'react'

// useEffect will get called immediately after the page or component renders or loads, 
// useEffect is also a function,
// which accepts two parameters, 
// 1st is callback function and 2nd is dependency array(optional). It is widely used in API calls.

// if we don't pass dependency array then it will get called whenever component get rendered.
// if we pass empty dependency array then it will get called only once.
// if we pass state variable then will get called whenever the value of state variable changes.

function Product() {

    const apiURL = "https://fakestoreapi.com/products"

    const [product, setProduct] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(apiURL)
            // console.log(response);

            const productData = response.data; //fetching array of dummy API.
            // console.log(productData);
            setProduct(productData); //updating state here.


        } catch (error) {
            console.log(error);
        }
    } //fetchData close

    useEffect(() => {
        console.log("Use effect called");
        fetchData()
    }, [])


    return (
        <>
            <h1 style={{ textAlign: 'center', fontFamily: "monotype corsiva" }}>Products Board</h1>
            <div style={{ padding: "20px" }}>
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price ($)</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Image</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            product.map((productObj) => (
                                <tr key={productObj.id}>
                                    <td>{productObj.title}</td>
                                    <td>{productObj.price}</td>
                                    <td>{productObj.category}</td>
                                    <td className="desc">{productObj.description}</td>
                                    <td>
                                        <img 
                                            src={productObj.image} 
                                            alt="product"
                                            className="product-img"
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Product