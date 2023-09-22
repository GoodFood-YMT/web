import { env } from "~/env.mjs";

export async function apiFetch<T>(
  url: string,
  { json, method }: { json?: Record<string, unknown>; method?: string } = {},
): Promise<T> {
  method ??= json ? "POST" : "GET";

  const body = json ? JSON.stringify(json) : undefined;
  const response = await fetch(env.NEXT_PUBLIC_BACKEND_URL + url, {
    method,
    body,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
  });

  if (response.ok) {
    return response.json() as Promise<T>;
  }

  console.log("response", response);

  throw new ApiError(response.status, await response.json());
}

class ApiError extends Error {
  constructor(
    public status: number,
    public data: Record<string, unknown>,
  ) {
    if (status === 401) {
      localStorage.removeItem("account");
    }

    super(`ApiError: ${status} ${JSON.stringify(data)}`);
  }
}
