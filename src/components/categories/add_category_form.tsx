"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";
import { useFetchCreateCategory } from "~/hooks/catalog/categories/use_create_category";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
    name: z.string()
})

export const AddCategory = () => {
    const router = useRouter();
    const createCategory = useFetchCreateCategory();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const handleSubmit = (payload: z.infer<typeof formSchema>) =>{
        createCategory.mutate(payload, {
            onSuccess: () => {
                toast.success("Category created");
                router.push("/admin/categories")
            },
            onError: () => {
                toast.error("An error occurred");
            }
        })
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-8"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                    />

                    <Button type="submit">Save</Button>
            </form>
        </Form>
    )
}