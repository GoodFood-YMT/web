"use client";
import React, { useState } from 'react';
import { useCreateProvider } from "~/hooks/providers/use_create_providers";

const AddProviderForm = () => {
    const createProvider = useCreateProvider();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };


    return (
        <form onSubmit={handleSubmit}>
            <h1>Ajouter un fournisseur</h1>
            <label htmlFor="name">Nom du fournisseur</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Nom du fournisseur"
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};
