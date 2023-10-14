"use client"

import { useFetchProductById } from "~/hooks/catalog/products/use_fetch_product_by_id"

interface Props {
    id: string;
};

export const OneProduct = ({id}:Props) =>{
    const product = useFetchProductById(id);

    if(product.isLoading){
        return <div>Loading...</div>
    }

    if(product.isError){
        return <div>Something went wrong</div>
    }

    return <div>
        <p>Product: {product.data.label}</p>
        <p>Description: {product.data.description}</p>
        <p>Price: {product.data.price} €</p>
        <p>Quantity: {product.data.quantity}</p>
    </div>
}