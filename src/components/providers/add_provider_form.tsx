"use client";
import React, { useState } from 'react';
import { useCreateProvider } from "~/hooks/providers/use_create_providers";
import toast from "react-hot-toast";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    name: z.string(),
    restaurant_id: z.string(),
});
  
const AddProviderForm = () => {
    const createProvider = useCreateProvider();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
      
    const handleSubmit = (payload: z.infer<typeof formSchema>) => {
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
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <h1>New Provider</h1>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Provider's Name"
            />
            <button type="submit">Create</button>
        </form>
    );
};
