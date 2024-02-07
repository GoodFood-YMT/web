"use client";

import { useCreateProvider } from "~/hooks/providers/use_create_providers";
import toast from "react-hot-toast";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const formSchema = z.object({
    name: z.string(),
    restaurant_id: z.string(),
});
  
export const AddProviderForm = () => {
    const createProvider = useCreateProvider();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
      
    const onSubmit = (payload: z.infer<typeof formSchema>) => {
        createProvider.mutate(payload, {
            onSuccess: () => {
                toast.success("Provider created");
            },
            onError: () => {
                toast.error("An error occurred");
            },
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                    </FormItem>
                )}
                />

                <FormField
                    control={form.control}
                    name="restaurant_id"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Restaurant ID</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type="submit">Save</Button>
            </form>
        </Form>
    );
};