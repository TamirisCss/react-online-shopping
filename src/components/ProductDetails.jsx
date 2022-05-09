import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "../components/Card";

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
                    <Card
                        image={idData.image}
                        title={idData.title}
                        price={idData.price}
                        category={idData.category}
                    />
                </>
            )}
            {!idData && <h2>Loading...</h2>}
        </>
    );
};

export default ProductDetails;
