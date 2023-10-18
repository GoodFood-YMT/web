"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z, { string } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { useUpdateCategory } from "~/hooks/catalog/categories/use_update_category";
import { extractFields } from "~/utils/extract_fields";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface Props {
  category: {
    id: string;
    name: string;
  };
}

const formSchema = z.object({
  name: z.string().optional(),
});

export const EditCategoryForm = ({ category }: Props) => {
  const router = useRouter();
  const updateCategory = useUpdateCategory();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: category.name,
    },
  });

  const handleSubmit = (payload: z.infer<typeof formSchema>) => {
    const fields = extractFields(form.formState.dirtyFields, payload) as {
      name?: string;
    };

    updateCategory.mutate(
      {
        id: category.id,
        data: {
          ...fields,
        },
      },
      {
        onSuccess: () => {
          toast.success("Category updated");
          router.push("/admin/categories");
        },
        onError: () => {
          toast.error("An error occurred");
        },
      },
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
};
