"use client";

import { useFetchAllProvidersIngredients } from "~/hooks/providers/use_fetch_all_ingredients_providers_by_id";

interface Props {
    id: string;
}

export const AllProvidersHome = ({ id }: Props) => {
  const providers = useFetchAllProvidersIngredients(id);

  if (providers.isError) {
    return <div>Une erreur est survenue</div>;
  }

  return (
    <>
    {providers.data?.pages.map((page) =>
        page.data.map((providers) => (
          <link href={`/providers/${providers.id}/ingredients`} key={providers.id}>
            {}
          </link>
        )),
      )}

      {providers.hasNextPage && (
        <button
          onClick={() => providers.fetchNextPage()}
          disabled={providers.isLoading}
        >
          Load more
        </button>
      )}
    </>
)};
