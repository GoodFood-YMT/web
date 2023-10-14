import { LoggedInAdmin } from "~/components/auth/conditionnals/logged_in_admin";
import { AddProductForm } from "~/components/products/add_product_form";

export default function Page(){
    return (
        <LoggedInAdmin>
            <h1 className="mb-4 text-2xl font-medium">
                Add product
            </h1>
            <AddProductForm />
        </LoggedInAdmin>
    )}