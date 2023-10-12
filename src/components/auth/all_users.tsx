"use client";

import Link from "next/link";
import { Eye } from "lucide-react";
import { AiOutlineLoading } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useFetchAllUsers } from "~/hooks/auth/use_fetch_all_users";
import { cn } from "~/utils/cn";

export const AllUsers = () => {
  const users = useFetchAllUsers();

  if (users.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.data?.pages.map((page) =>
            page.data.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>
                  {user.firstname} {user.lastname}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role_id}</TableCell>
                <TableCell>
                  <Link href={`/admin/users/${user.id}`}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            )),
          )}
        </TableBody>
      </Table>

      {users.isLoading && (
        <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
      )}

      {users.hasNextPage && (
        <button
          onClick={() => users.fetchNextPage()}
          disabled={users.isLoading}
        >
          Load more
        </button>
      )}
    </>
  );
};
