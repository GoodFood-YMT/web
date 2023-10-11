"use client";

import { useFetchIngredientById } from "~/hooks/catalog/ingredients/use_fetch_ingredient_by_id";

interface Props {
    id: string
};

export const OneIngredient = ({id}: Props) =>{
    const ingredient = useFetchIngredientById(id);
    
    if(ingredient.isLoading){
        return <div>Loading...</div>;
    }

    if(ingredient.isError){
        return <div>Something went wrong</div>;
    }

    return (
        <div>
            <p>{ingredient.data?.name}</p>
            <p>{ingredient.data?.quantity}</p>
            <p>{ingredient.data?.restaurantId}</p>
        </div>
    )
}