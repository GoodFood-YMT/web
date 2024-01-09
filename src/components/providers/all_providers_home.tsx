"use client";

import { useFetchAllProviders } from "~/hooks/providers/use_fetch_all_providers";
import { AddProvider } from "~/components/providers/add_provider";

export const AllProvidersHome = () => {
  const providers = useFetchAllProviders();

  if (providers.isError) {
    return <div>Une erreur est survenue</div>;
  }

  return (
    <>
    <h1>Providers</h1>
    <AddProvider />
    <table>
      <thead>
        <tr>
          <th>Ingredients</th>
          <th>Actions</th>
        </tr>
      </thead>
        <tbody>
          {providers.data?.pages.map((page) =>
            page.data.map((providers) => (
              <tr>
                <td>
                  <link>
                    {providers.id}
                  </link>
                </td>
                <td>
                  <link href={`/providers/${providers.id}/ingredients`} key={providers.id}>
                    {providers.name}
                  </link>
                </td>
              </tr>
            )),
            )}
        </tbody>
      </table>
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
