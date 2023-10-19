"use client";

import { useFetchCategoryById } from "~/hooks/catalog/categories/use_fetch_category_by_id";

interface Props {
  id: string;
}

export const OneCategory = ({ id }: Props) => {
  const category = useFetchCategoryById(id);

  if (category.isLoading) {
    return <div>Loading...</div>;
  }

  if (category.isError) {
    return <div>Something went wrong</div>;
  }

  return <div>{category.data?.name}</div>;
};
