"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, CreditCardIcon, Divide, InfoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useClearBasket } from "~/hooks/basket/use_clear_basket";
import { useFetchBasket } from "~/hooks/basket/use_fetch_basket";
import { useFetchAllAddresses } from "~/hooks/delivery/addresses/use_fetch_addresses";
import { useCreateOrder } from "~/hooks/ordering/use_create_order";
import { cn } from "~/utils/cn";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  addressId: z.string(),
  creditCardNumber: z.string(),
  creditCardExpiry: z.string(),
  creditCardCvv: z.string(),
});

export const Checkout = () => {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);

  const addresses = useFetchAllAddresses();
  const basket = useFetchBasket();
  const createOrder = useCreateOrder();
  const clearBasket = useClearBasket();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = (payload: z.infer<typeof formSchema>) => {
    if (payload.addressId && basket.data) {
      createOrder.mutate(
        {
          addressId: payload.addressId,
          products: basket.data.items.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
          })),
        },
        {
          onSuccess: async () => {
            await clearBasket.mutateAsync();
            await basket.refetch();
            toast.success("Order placed");
            router.push("/account");
          },
          onError: () => {
            toast.error("An error occurred");
          },
        },
      );
    }
  };

  if (basket.isLoading) {
    return null;
  }

  if (!basket.data?.items.length || basket.data?.items.length === 0) {
    router.push("/");
    return null;
  }

  return (
    <div>
      <div className="mb-8 grid grid-cols-[40px,1fr,40px] items-center gap-4 text-sm">
        <span
          className={cn(
            "flex aspect-square items-center justify-center rounded-full bg-white font-medium shadow-sm",
            {
              "bg-green-400 text-white": step > 1,
            },
          )}
        >
          {step > 1 ? <CheckIcon size={16} /> : <InfoIcon size={16} />}
        </span>
        <div
          className={cn("h-1 bg-white shadow-sm", {
            "bg-green-400": step > 1,
          })}
        ></div>
        <span className="flex aspect-square items-center justify-center rounded-full bg-white font-medium shadow-sm">
          <CreditCardIcon size={16} />
        </span>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          {step === 1 && (
            <div className="bg-white p-4 shadow-sm">
              <div className="flex h-full flex-col justify-between gap-4">
                <div className="flex flex-col gap-2 overflow-y-auto">
                  <h2 className="mb-2 text-lg font-medium tracking-tight">
                    Information
                  </h2>

                  <div className="flex w-full gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Firstname</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Lastname</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <h2 className="mb-2 text-lg font-medium tracking-tight">
                    Shipping Address
                  </h2>

                  {addresses.data?.addresses.map((address) => (
                    <div
                      key={address.id}
                      className={cn(
                        "cursor-pointer border p-4 shadow-sm hover:bg-gray-50",
                        {
                          "bg-gray-50": form.watch("addressId") === address.id,
                        },
                      )}
                      onClick={() => {
                        form.setValue("addressId", address.id);
                      }}
                    >
                      <h3 className="mb-1 text-base font-medium tracking-tight">
                        {address.name}
                      </h3>

                      <p className="text-sm">{address.street}</p>
                      <p className="text-sm">
                        {address.zip_code} {address.city}, {address.country}
                      </p>
                    </div>
                  ))}

                  {addresses.data && addresses.data.addresses.length <= 0 ? (
                    <div className="border p-4 shadow-sm">
                      <h3 className="mb-1 flex items-center justify-between text-base font-medium tracking-tight">
                        No addresses
                        <Link
                          href="/account/addresses/add"
                          className={buttonVariants({ size: "xs" })}
                        >
                          Add one
                        </Link>
                      </h3>
                    </div>
                  ) : null}
                  <div className="mt-2 flex justify-end">
                    <Button
                      onClick={() => {
                        setStep(2);
                      }}
                      disabled={
                        !form.watch("addressId") ||
                        !form.watch("firstName") ||
                        !form.watch("lastName")
                      }
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white p-4 shadow-sm">
              <div className="flex h-full flex-col justify-between gap-4">
                <div className="flex flex-col gap-2 overflow-y-auto">
                  <h2 className="mb-2 text-lg font-medium tracking-tight">
                    Payment
                  </h2>

                  <FormField
                    control={form.control}
                    name="creditCardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credit Card Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="flex w-full gap-4">
                    <FormField
                      control={form.control}
                      name="creditCardCvv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVV Code</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="creditCardExpiry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mt-2 flex justify-between">
                    <Button
                      onClick={() => {
                        setStep(1);
                      }}
                    >
                      Previous
                    </Button>
                    <Button
                      type="submit"
                      disabled={
                        !form.watch("addressId") ||
                        !form.watch("firstName") ||
                        !form.watch("lastName") ||
                        !form.watch("creditCardNumber") ||
                        !form.watch("creditCardExpiry") ||
                        !form.watch("creditCardCvv")
                      }
                    >
                      Proceed to payment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};
