"use client"

import { notFound } from "next/navigation";
import { useFetchCategoryById } from "~/hooks/catalog/categories/use_fetch_category_by_id";
import { EditCategoryForm } from "./edit_category_form";
import { AiOutlineLoading } from "react-icons/ai";
import { cn } from "~/utils/cn";

interface Props{
    id: string;
}

export const EditCategory = ({id}: Props) => {
    const category = useFetchCategoryById(id);

    if (category.isLoading){
        return <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
    }

    if(category.isError){
        notFound();
    }

    return <EditCategoryForm category={category.data} />
}