import { OneProduct } from "~/components/products/one_product";

interface Props {
    params: {
        productId: string;
    }
};

export default function Page({params}: Props) {
    return <OneProduct id={params.productId} />
}