import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
    const { id } = useParams();
    const [idData, setIdData] = useState();

    useEffect(() => {
        const getItem = async (id) => {
            console.log(id);
            const response = await fetch(
                `https://fakestoreapi.com/products/${id}`
            );
            console.log(response);
            const data = await response.json();
            setIdData(data);
            console.log(data);
        };
        getItem(id);
        console.log(getItem);
    }, []);

    return (
        <>
            {idData && (
                <>
                    <div className="imageContainer">
                        <img src={idData.image} alt="#" className="imageProduct " />
                    </div>
                    <div className="card-info">
                        <h6>{idData.title}</h6>
                        <h6>{`Price: ${idData.price}`}</h6>
                        <h6>{`Category: ${idData.category}`}</h6>
                    </div>
                </>
            )}
            {!idData && <h2>Loading...</h2>}
        </>
    );
};

export default ProductDetails;
