"use client";

import { useAccountStore } from "~/stores/account_store";

export const ProfileInformation = () => {
  const { account } = useAccountStore();
  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="flex h-full w-full flex-col">
        <h2 className="mb-2 text-lg font-medium tracking-tight">Information</h2>
        <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-1 text-sm">
          <span className="font-medium">Name</span>
          <span>
            {account?.firstname} {account?.lastname}
          </span>

          <span className="font-medium">Email</span>
          <span>{account?.email}</span>

          <span className="font-medium">Role</span>
          <span className="capitalize">{account?.role_id}</span>
        </div>
      </div>
    </div>
  );
};
