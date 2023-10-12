import { useCallback } from "react";
import { setCookie } from "cookies-next";
import toast from "react-hot-toast";
import { useAccountStore } from "~/stores/account_store";
import { Account } from "~/types/auth/account";
import { AuthStatus } from "~/types/auth/auth_status";
import { Token } from "~/types/auth/token";
import { apiFetch } from "~/utils/basic_fetch";

export function useAuth() {
  const { account, setAccount } = useAccountStore();

  let status;
  switch (account) {
    case null:
      status = AuthStatus.Guest;
      break;
    case undefined:
      status = AuthStatus.Unknown;
      break;
    default:
      status = AuthStatus.Authenticated;
      break;
  }

  const authenticate = useCallback(() => {
    apiFetch<Account>("/auth/me")
      .then(setAccount)
      .catch(() => setAccount(null));
  }, [setAccount]);

  const login = useCallback(
    (email: string, password: string) => {
      apiFetch<Token>("/auth/login", { json: { email, password } })
        .then((data) =>
          setCookie("token", data.token, {
            expires: new Date(data.expires_at),
          }),
        )
        .then(authenticate)
        .then(() => window.location.assign("/"))
        .catch(() => toast.error("Invalid credentials"));
    },
    [authenticate],
  );

  const register = useCallback(
    (
      email: string,
      firstname: string,
      lastname: string,
      password: string,
      passwordConfirmation: string,
    ) => {
      apiFetch<Token>("/auth/register", {
        json: {
          email,
          firstname,
          lastname,
          password,
          password_confirmation: passwordConfirmation,
        },
      })
        .then((data) =>
          setCookie("token", data.token, {
            expires: new Date(data.expires_at),
          }),
        )
        .then(authenticate)
        .then(() => window.location.assign("/"))
        .catch(() => toast.error("An error happened"));
    },
    [authenticate],
  );

  const logout = useCallback(() => {
    apiFetch<Account>("/auth/logout", { method: "DELETE" })
      .then(() => setCookie("token", "", { expires: new Date(0) }))
      .then(() => setAccount(null))
      .then(() => window.location.assign("/"));
  }, [setAccount]);

  return {
    status,
    authenticate,
    login,
    register,
    logout,
  };
}
