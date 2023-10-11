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
        <p>product: {product.data.label}</p>
        <p>description: {product.data.description}</p>
        <p>{product.data.price} €</p>
        <p>quantity: {product.data.quantity}</p>
    </div>
}