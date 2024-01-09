"use client";

import { useFetchAllProviders } from "~/hooks/providers/use_fetch_all_providers";

export const AllProvidersHome = () => {
  const providers = useFetchAllProviders();

  if (providers.isError) {
    return <div>Une erreur est survenue</div>;
  }

  return (
    <>
    {providers.data?.pages.map((page) =>
        page.data.map((providers) => (
          <link href={`/providers/${providers.id}/ingredients`} key={providers.id}>
            {providers.name}
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
