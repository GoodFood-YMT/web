"use client"

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useFetchAllCategories } from "~/hooks/catalog/categories/use_fetch_all_categories";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { useCreateProduct } from "~/hooks/catalog/products/use_create_product";
import toast from "react-hot-toast";
import { Switch } from "../ui/switch";

const formSchema = z.object({
    label: z.string(),
    description: z.string(),
    visible: z.boolean(),
    price: z.string(),
    categoryId: z.string()
})

export const AddProductForm = () => {
    const router = useRouter()
    const categories = useFetchAllCategories(1, 100);
    const createProduct = useCreateProduct();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            categoryId: "null",
            visible: false,
        },
    });

    const handleSubmit = (payload: z.infer<typeof formSchema>) => {
        createProduct.mutate(payload, {
            onSuccess: () =>{
                toast.success("Product created");
                router.push("/admin/products");
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
                    name="label" 
                    render={({field}) =>(
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
                    name="description" 
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField 
                    control={form.control} 
                    name="price" 
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                                <Input  {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="visible"
                    render={({field}) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel>Visible</FormLabel>
                            <FormControl>
                                <Switch 
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField 
                    control={form.control} 
                    name="categoryId" 
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.data?.pages[0].data.length === 0 && (
                                            <SelectItem value="null" disabled>
                                                No Category
                                            </SelectItem>
                                        )}
                                        {categories.data?.pages.map((page) => 
                                            page.data.map((category) => (
                                                <SelectItem key={category.id} value={category.id}>
                                                    {category.name}
                                                </SelectItem>
                                            ))
                                        )}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type="submit">Save</Button>
            </form>
        </Form>
    )
    
}