"use client";

import Link from "next/link";
import {
  Beef,
  Gauge,
  Home,
  PackageOpenIcon,
  Store,
  TableProperties,
  Truck,
  Users,
  Utensils,
} from "lucide-react";
import { LoggedInAdminSilent } from "~/components/auth/conditionnals/silents/logged_in_admin_silent";
import { LoggedInDelivererSilent } from "~/components/auth/conditionnals/silents/logged_in_deliverer_silent";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/utils/cn";
import { LoggedInManagerSilent } from "./auth/conditionnals/silents/logged_in_manager_silent";

export const AdminSidebar = () => {
  return (
    <div className="relative">
      <aside className="sticky top-4 shadow-sm">
        <div className="flex flex-col gap-1">
          <Link
            href="/admin"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full justify-start gap-1",
            )}
          >
            <Gauge size={16} /> Dashboard
          </Link>

          <LoggedInAdminSilent>
            <Link
              href="/admin/users"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full justify-start gap-1",
              )}
            >
              <Users size={16} /> Users
            </Link>
          </LoggedInAdminSilent>

          <LoggedInAdminSilent>
            <Link
              href="/admin/restaurants"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full justify-start gap-1",
              )}
            >
              <Store size={16} /> Restaurants
            </Link>
          </LoggedInAdminSilent>

          <LoggedInAdminSilent>
            <Link
              href="/admin/categories"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full justify-start gap-1",
              )}
            >
              <TableProperties size={16} /> Categories
            </Link>
          </LoggedInAdminSilent>

          <LoggedInManagerSilent>
            <Link
              href="/admin/orders"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full justify-start gap-1",
              )}
            >
              <PackageOpenIcon size={16} /> Orders
            </Link>
          </LoggedInManagerSilent>

          <LoggedInManagerSilent>
            <Link
              href="/admin/products"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full justify-start gap-1",
              )}
            >
              <Utensils size={16} /> Products
            </Link>
          </LoggedInManagerSilent>

          <LoggedInManagerSilent>
            <Link
              href="/admin/ingredients"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full justify-start gap-1",
              )}
            >
              <Beef size={16} /> Ingredients
            </Link>
          </LoggedInManagerSilent>

          <LoggedInDelivererSilent>
            <Link
              href="/admin/deliveries"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full justify-start gap-1",
              )}
            >
              <Truck size={16} /> Deliveries
            </Link>
          </LoggedInDelivererSilent>
        </div>
      </aside>
    </div>
  );
};
