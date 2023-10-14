import { InStockProductsByRestaurant } from "~/components/products/in_stock_products_by_restaurant"

interface Props{
    params: {
        restaurantId: string
    }
}

export default function Page({params}: Props){
    return <InStockProductsByRestaurant restaurantId={params.restaurantId} />
}