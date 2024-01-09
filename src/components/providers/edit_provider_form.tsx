
import { useUpdateProviders } from "~/hooks/providers/use_update_providers";
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

interface Props {
    id: string;
}

const formSchema = z.object({
    id: z.string(),
    data : z.object({
        name: z.string(),
        restaurant_id: z.string(),
    }),
});

const EditProviderForm = ({ id }: Props) => {

    const providers = useUpdateProviders();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
      
    const handleSubmit = (payload: z.infer<typeof formSchema>) => {
        providers.mutate(payload, {
        onSuccess: () => {
            toast.success("Provider modified");
        },
        onError: () => {
            toast.error("An error occurred");
        },
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                    control={form.control}
                    name="data.name"
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
                <Button type="submit">Create</Button>
            </form>
        </Form>
    );
};

